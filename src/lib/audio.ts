// ── Soft, ear-friendly UI sound engine (WebAudio) ──────────────────────────
// All sounds are generated at runtime — no assets needed. They use gentle
// sine/triangle oscillators, soft attack envelopes, exponential decay and a
// low master volume so they stay smooth and never harsh.

type ToneOpts = {
  freq?: number;
  end?: number | null;
  dur?: number;
  vol?: number;
  type?: OscillatorType;
  delay?: number;
};

type TapOpts = {
  dur?: number;
  vol?: number;
  cutoff?: number;
  ramptype?: BiquadFilterType;
  delay?: number;
};

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let muted = false;

try {
  muted = localStorage.getItem("rashad_muted") === "1";
} catch {
  muted = false;
}

function ensure(): { ctx: AudioContext; master: GainNode } | null {
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) {
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  if (!master) return null;
  return { ctx, master };
}

function tone(o: ToneOpts) {
  if (muted) return;
  const s = ensure();
  if (!s) return;
  const { ctx, master } = s;
  const {
    freq = 440,
    end = null,
    dur = 0.12,
    vol = 0.04,
    type = "sine",
    delay = 0,
  } = o;
  const t0 = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(Math.max(1, freq), t0);
  if (end) osc.frequency.exponentialRampToValueAtTime(Math.max(1, end), t0 + dur);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol), t0 + 0.014);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + 0.03);
  osc.connect(gain);
  gain.connect(master);
  osc.start(t0);
  osc.stop(t0 + dur + 0.06);
}

function tap(o: TapOpts) {
  if (muted) return;
  const s = ensure();
  if (!s) return;
  const { ctx, master } = s;
  const { dur = 0.05, vol = 0.03, cutoff = 2400, ramptype = "bandpass", delay = 0 } = o;
  const t0 = ctx.currentTime + delay;
  const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) {
    d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = ramptype;
  filter.frequency.value = cutoff;
  filter.Q.value = 0.9;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol), t0 + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(master);
  src.start(t0);
  src.stop(t0 + dur + 0.03);
}

export type SoundName =
  | "click"
  | "hover"
  | "open"
  | "close"
  | "pop"
  | "add"
  | "success"
  | "remove"
  | "warn";

export const sound = {
  get muted(): boolean {
    return muted;
  },
  setMuted(m: boolean): boolean {
    muted = m;
    try {
      localStorage.setItem("rashad_muted", m ? "1" : "0");
    } catch {
      /* noop */
    }
    return muted;
  },
  /** Unlock the AudioContext on the first user gesture. */
  unlock() {
    ensure();
  },
  play(name: SoundName) {
    switch (name) {
      case "click":
        // soft low wood tap
        tone({ freq: 210, end: 140, dur: 0.09, vol: 0.035, type: "sine" });
        tap({ dur: 0.045, vol: 0.025, cutoff: 1900 });
        break;
      case "hover":
        // near-silent tick; barely perceptible warmth
        tone({ freq: 920, end: 1040, dur: 0.055, vol: 0.008, type: "sine" });
        break;
      case "open":
        // gentle rising two-note
        tone({ freq: 520, end: 640, dur: 0.09, vol: 0.035 });
        tone({ freq: 660, end: 860, dur: 0.12, vol: 0.03, delay: 0.06 });
        break;
      case "close":
        // soft falling two-note
        tone({ freq: 540, end: 430, dur: 0.08, vol: 0.03 });
        tone({ freq: 380, end: 300, dur: 0.11, vol: 0.028, delay: 0.05 });
        break;
      case "pop":
        // light confirmation blip
        tone({ freq: 470, end: 820, dur: 0.13, vol: 0.045 });
        tone({ freq: 1200, end: 1500, dur: 0.08, vol: 0.016, delay: 0.02 });
        break;
      case "add":
        // pleasant "put in cart" double blip
        tone({ freq: 420, end: 560, dur: 0.09, vol: 0.04 });
        tone({ freq: 660, end: 900, dur: 0.12, vol: 0.04, delay: 0.08 });
        break;
      case "success":
        // warm marimba-like arpeggio C5–E5–G5–C6 with a soft shimmer
        tone({ freq: 523.25, end: 500, dur: 0.24, vol: 0.045 });
        tone({ freq: 659.25, end: 620, dur: 0.24, vol: 0.042, delay: 0.1 });
        tone({ freq: 783.99, end: 740, dur: 0.3, vol: 0.04, delay: 0.2 });
        tone({ freq: 1046.5, end: 990, dur: 0.34, vol: 0.025, delay: 0.3 });
        tap({ dur: 0.07, vol: 0.012, cutoff: 5000, ramptype: "highpass", delay: 0.3 });
        break;
      case "remove":
        // gentle slide down
        tone({ freq: 400, end: 240, dur: 0.12, vol: 0.032 });
        break;
      case "warn":
        // muted soft double low tone
        tone({ freq: 260, end: 230, dur: 0.1, vol: 0.035 });
        tone({ freq: 240, end: 210, dur: 0.1, vol: 0.032, delay: 0.12 });
        break;
    }
  },
};