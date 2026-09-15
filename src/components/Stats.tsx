import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data";
import { animateArabicCount, arNum } from "@/lib/format";
import { Reveal } from "@/components/ui";

function StatItem({
  target,
  suffix,
  label,
  index,
}: {
  target: number;
  suffix?: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(() => arNum(0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancel: (() => void) | null = null;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            obs.disconnect();
            cancel = animateArabicCount(target, setText, undefined, 1500 + index * 180);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancel?.();
    };
  }, [target, index]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1.5 text-center"
    >
      <span className="text-4xl font-extrabold leading-none tracking-tight text-gold-600 lg:text-[44px]">
        {text}
        {suffix && <span className="text-2xl text-gold-400">{suffix}</span>}
      </span>
      <span className="text-[12.5px] font-medium text-ink-500">{label}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 px-5 pb-20 sm:px-8">
      <Reveal className="mx-auto w-full max-w-6xl">
        <div className="glass grid grid-cols-2 gap-y-10 rounded-[26px] px-6 py-10 md:grid-cols-4 md:gap-y-0 md:py-12">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`flex items-center justify-center md:border-s md:border-gold-300/25 md:ps-8 ${
                i === 0 ? "md:border-s-0 md:ps-0" : ""
              }`}
            >
              <StatItem target={s.value} suffix={s.suffix} label={s.label} index={i} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}