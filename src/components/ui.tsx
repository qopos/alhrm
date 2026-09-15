import { useEffect, useRef, useState, type ReactNode, type SVGProps } from "react";

export type IconName =
  | "sofa"
  | "bed"
  | "table"
  | "office"
  | "decor"
  | "shelf"
  | "truck"
  | "shield"
  | "badge"
  | "pen"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "clock"
  | "cart"
  | "close"
  | "menu"
  | "plus"
  | "minus"
  | "trash"
  | "star"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "arrow-down"
  | "check"
  | "gem"
  | "box"
  | "spark"
  | "home"
  | "sound"
  | "mute"
  | "send";

const base: Omit<SVGProps<SVGSVGElement>, "children"> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  switch (name) {
    case "sofa":
      return (
        <svg {...base} className={className}>
          <path d="M5 13V9.5A2.6 2.6 0 0 1 7.6 6.9h8.8A2.6 2.6 0 0 1 19 9.5V13" />
          <path d="M4 13h16a1.6 1.6 0 0 1 1.6 1.6V16a1 1 0 0 1-1 1H3.4a1 1 0 0 1-1-1v-1.4A1.6 1.6 0 0 1 4 13z" />
          <path d="M7.2 17v1.8M16.8 17v1.8" />
        </svg>
      );
    case "bed":
      return (
        <svg {...base} className={className}>
          <path d="M3.5 18.5V11a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v7.5" />
          <path d="M7 9V6.6A1.6 1.6 0 0 1 8.6 5h2.8A1.6 1.6 0 0 1 13 6.6V9" />
          <path d="M3.5 14.5h17" />
          <path d="M6.2 18.5v1M17.8 18.5v1" />
        </svg>
      );
    case "table":
      return (
        <svg {...base} className={className}>
          <path d="M4.2 8.2h15.6" />
          <path d="M4.2 8.2v7.6a1.6 1.6 0 0 0 1.6 1.6h12.4a1.6 1.6 0 0 0 1.6-1.6V8.2" />
          <path d="M8.6 17.4V18.8M15.4 17.4V18.8" />
        </svg>
      );
    case "office":
      return (
        <svg {...base} className={className}>
          <path d="M4 18.5h16" />
          <path d="M6 18.5V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8.5" />
          <path d="M9.5 8V6a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 6v2" />
          <path d="M9.5 18.5v.8M14.5 18.5v.8" />
        </svg>
      );
    case "decor":
      return (
        <svg {...base} className={className}>
          <path d="M12 3.2l1.6 4.4 4.4 1.6-4.4 1.6L12 15.2l-1.6-4.4L6 9.2l4.4-1.6z" />
          <path d="M6.5 16.5l.9 2.3 2.3.9" />
        </svg>
      );
    case "shelf":
      return (
        <svg {...base} className={className}>
          <rect x="3.2" y="4" width="17.6" height="16" rx="1.8" />
          <path d="M3.2 11h17.6" />
          <path d="M11 4v14" />
          <path d="M6.4 8.6h2.1M6.4 14.6h2.1M13.5 8.6h2.1M13.5 14.6h2.1" />
        </svg>
      );
    case "truck":
      return (
        <svg {...base} className={className}>
          <path d="M3 16V6.8A1.8 1.8 0 0 1 4.8 5h9.4A1.8 1.8 0 0 1 16 6.8V16" />
          <path d="M16 9.5h3.2l1.8 2.4V16" />
          <circle cx="7" cy="18" r="1.9" />
          <circle cx="17.3" cy="18" r="1.9" />
          <path d="M8.9 18h6.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base} className={className}>
          <path d="M12 3l6.8 2.4v4.9c0 4.3-2.8 7.6-6.8 9-4-1.4-6.8-4.7-6.8-9V5.4z" />
          <path d="M8.9 11.6l2.2 2.2 4-4.1" />
        </svg>
      );
    case "badge":
      return (
        <svg {...base} className={className}>
          <circle cx="12" cy="9" r="5.2" />
          <path d="M8.7 13.6L8 20l4-1.9L16 20l-.7-6.4" />
        </svg>
      );
    case "pen":
      return (
        <svg {...base} className={className}>
          <path d="M12.5 19.5H21" />
          <path d="M16.6 4.6a2.2 2.2 0 0 1 3.1 3.1L8.6 18.8l-4.4.9.9-4.4z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...base} className={className}>
          <path d="M6.2 3.5H9l1.4 4.2-1.9 1.6a12.5 12.5 0 0 0 6.3 6.3l1.6-1.9 4.2 1.4v2.8A2 2 0 0 1 18.6 20 15.5 15.5 0 0 1 4 5.4a2 2 0 0 1 2.2-1.9z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...base} className={className}>
          <path d="M12 3.2a8.8 8.8 0 0 0-7.7 13.2L3 21l4.8-1.2A8.8 8.8 0 1 0 12 3.2z" />
          <path d="M8.7 9.2c0 3.4 2.8 6.1 6.4 6.5l.9-.9c.3-.3.7-.3 1.1-.1l1.5.8" />
        </svg>
      );
    case "mail":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2.2" />
          <path d="M3.5 7.5l8.5 6 8.5-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...base} className={className}>
          <path d="M12 21.2S6 15.6 6 10.7a6 6 0 1 1 12 0c0 4.9-6 10.5-6 10.5z" />
          <circle cx="12" cy="10.8" r="2.1" />
        </svg>
      );
    case "clock":
      return (
        <svg {...base} className={className}>
          <circle cx="12" cy="12" r="8.4" />
          <path d="M12 7.5V12l3 1.8" />
        </svg>
      );
    case "cart":
      return (
        <svg {...base} className={className}>
          <path d="M3 4h2.1l2.2 11.5a1.6 1.6 0 0 0 1.6 1.3h8.7a1.6 1.6 0 0 0 1.6-1.2L21 8.2H6" />
          <circle cx="9.6" cy="20.5" r="1.3" />
          <circle cx="17.2" cy="20.5" r="1.3" />
        </svg>
      );
    case "close":
      return (
        <svg {...base} className={className}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "menu":
      return (
        <svg {...base} className={className}>
          <path d="M4.5 7h15M4.5 12h15M4.5 17h10" />
        </svg>
      );
    case "plus":
      return (
        <svg {...base} className={className}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...base} className={className}>
          <path d="M5 12h14" />
        </svg>
      );
    case "trash":
      return (
        <svg {...base} className={className}>
          <path d="M5 7h14" />
          <path d="M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7" />
          <path d="M7 7l.8 12h8.4L17 7" />
          <path d="M10 11v4.5M14 11v4.5" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.3 2.7 1-5.8L3.5 9.7l5.9-.9z" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...base} className={className}>
          <path d="M14.5 6L8.5 12l6 6" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...base} className={className}>
          <path d="M9.5 6l6 6-6 6" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg {...base} className={className}>
          <path d="M6 14.5l6-6 6 6" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...base} className={className}>
          <path d="M6 9.5l6 6 6-6" />
        </svg>
      );
    case "check":
      return (
        <svg {...base} className={className}>
          <path d="M4.5 12.5l5 5L19.5 6.5" />
        </svg>
      );
    case "gem":
      return (
        <svg {...base} className={className}>
          <path d="M6 8l2.2-3H15.8L18 8l-6 9.5L6 8z" />
          <path d="M6 8h12M9.8 8L12 17.5 14.2 8" />
        </svg>
      );
    case "box":
      return (
        <svg {...base} className={className}>
          <path d="M3.6 7.8L12 4l8.4 3.8V16.2L12 20l-8.4-3.8z" />
          <path d="M3.6 7.8L12 11.5l8.4-3.7" />
          <path d="M12 11.5V20" />
        </svg>
      );
    case "spark":
      return (
        <svg {...base} className={className}>
          <path d="M12 2.8l1.7 4.8 4.8 1.7-4.8 1.7L12 15.8l-1.7-4.8L5.5 9.3l4.8-1.7z" />
          <path d="M19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
        </svg>
      );
    case "home":
      return (
        <svg {...base} className={className}>
          <path d="M4 11.2L12 4l8 7.2" />
          <path d="M6 9.5V20h12V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "sound":
      return (
        <svg {...base} className={className}>
          <path d="M5 10v4h3l4 3.5v-11L8 10z" />
          <path d="M15.5 9a3.5 3.5 0 0 1 0 6M18 6.5a7 7 0 0 1 0 11" />
        </svg>
      );
    case "mute":
      return (
        <svg {...base} className={className}>
          <path d="M5 10v4h3l4 3.5v-11L8 10z" />
          <path d="M16 9.5l5 5M21 9.5l-5 5" />
        </svg>
      );
    case "send":
      return (
        <svg {...base} className={className}>
          <path d="M21 3L10.5 13.5" />
          <path d="M21 3l-6.5 18-4-7.5L3 9.5z" />
        </svg>
      );
    default:
      return <svg {...base} className={className} />;
  }
}

export function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-gold-500 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className={`h-3.5 w-3.5 ${i < n ? "" : "opacity-25"}`} />
      ))}
    </span>
  );
}

// ── Brand mark ─────────────────────────────────────────────────────────────
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 via-gold-600 to-gold-800 text-ivory shadow-[0_6px_18px_rgba(122,83,46,0.35)]`}
      style={{ width: size, height: size, fontSize: size * 0.46, fontWeight: 800 }}
    >
      ر
    </div>
  );
}

// ── Section header (eyebrow + title) ───────────────────────────────────────
export function SectionHeader({
  eyebrow,
  title,
  action,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-10 flex flex-wrap items-end gap-x-6 gap-y-4 ${
        center ? "flex-col items-center text-center" : "justify-between"
      }`}
    >
      <div className={center ? "flex flex-col items-center" : ""}>
        <p className="mb-3 inline-flex items-center gap-2 text-[12.5px] font-bold tracking-[0.14em] text-gold-600">
          <span className="h-[5px] w-[5px] rounded-full bg-gold-500" />
          {eyebrow}
        </p>
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

// ── Scroll reveal wrapper ──────────────────────────────────────────────────
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

// ── Furniture art (refined gold silhouettes) ───────────────────────────────
type ArtColors = {
  body: string;
  bodyStroke: string;
  light: string;
  lightStroke: string;
  dark: string;
  darkStroke: string;
};

const C: ArtColors = {
  body: "rgba(173,129,71,0.16)",
  bodyStroke: "rgba(150,105,58,0.45)",
  light: "rgba(214,192,150,0.2)",
  lightStroke: "rgba(173,129,71,0.42)",
  dark: "rgba(122,83,46,0.2)",
  darkStroke: "rgba(95,64,35,0.5)",
};

export function FurnArt({
  type,
  width = 170,
  height = 128,
  className = "",
}: {
  type: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const art = (body: ReactNode, w = width, h = height) => (
    <svg
      width={w}
      height={h}
      viewBox="0 0 170 128"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {body}
    </svg>
  );

  switch (type) {
    case "sofa":
      return art(
        <>
          <rect x="14" y="70" width="142" height="44" rx="10" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="26" y="54" width="118" height="24" rx="8" fill={C.light} stroke={C.lightStroke} strokeWidth="1.4" />
          <rect x="8" y="56" width="24" height="56" rx="9" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="138" y="56" width="24" height="56" rx="9" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <path d="M83 54v20" stroke={C.lightStroke} strokeWidth="1.4" />
          <rect x="30" y="112" width="10" height="10" rx="4" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.2" />
          <rect x="130" y="112" width="10" height="10" rx="4" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.2" />
        </>,
      );
    case "bed":
      return art(
        <>
          <rect x="16" y="64" width="138" height="48" rx="7" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="14" y="38" width="24" height="74" rx="6" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="36" y="54" width="46" height="17" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1.3" />
          <rect x="88" y="54" width="46" height="17" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1.3" />
          <rect x="40" y="90" width="36" height="18" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
          <rect x="94" y="90" width="36" height="18" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
        </>,
      );
    case "table":
      return art(
        <>
          <rect x="6" y="52" width="158" height="15" rx="7" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="30" y="67" width="11" height="46" rx="5" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.3" />
          <rect x="129" y="67" width="11" height="46" rx="5" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.3" />
          <rect x="50" y="36" width="70" height="17" rx="6" fill={C.light} stroke={C.lightStroke} strokeWidth="1.3" />
          <ellipse cx="85" cy="36" rx="15" ry="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
        </>,
      );
    case "armchair":
      return art(
        <>
          <rect x="34" y="68" width="102" height="40" rx="11" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="47" y="52" width="76" height="23" rx="9" fill={C.light} stroke={C.lightStroke} strokeWidth="1.4" />
          <rect x="22" y="54" width="28" height="54" rx="9" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="120" y="54" width="28" height="54" rx="9" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="42" y="106" width="10" height="12" rx="4" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.1" />
          <rect x="118" y="106" width="10" height="12" rx="4" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.1" />
        </>,
      );
    case "kingbed":
      return art(
        <>
          <rect x="10" y="60" width="150" height="50" rx="7" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="10" y="36" width="26" height="74" rx="6" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="32" y="46" width="40" height="19" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1.4" />
          <rect x="80" y="46" width="40" height="19" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1.4" />
          <rect x="128" y="46" width="32" height="19" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
          <path d="M36 88v22M134 88v22" stroke={C.darkStroke} strokeWidth="1.6" />
        </>,
      );
    case "wardrobe":
      return art(
        <>
          <rect x="22" y="16" width="126" height="98" rx="8" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <path d="M85 16v98" stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="28" y="24" width="52" height="34" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
          <rect x="90" y="24" width="52" height="34" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
          <circle cx="70" cy="74" r="4.5" fill="rgba(173,129,71,0.35)" stroke={C.bodyStroke} strokeWidth="1.4" />
          <circle cx="100" cy="74" r="4.5" fill="rgba(173,129,71,0.35)" stroke={C.bodyStroke} strokeWidth="1.4" />
          <path d="M28 100h52M90 100h52" stroke={C.lightStroke} strokeWidth="1" />
        </>,
      );
    case "office":
      return art(
        <>
          <rect x="8" y="58" width="154" height="16" rx="8" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <rect x="22" y="40" width="60" height="18" rx="6" fill={C.light} stroke={C.lightStroke} strokeWidth="1.3" />
          <rect x="90" y="74" width="12" height="42" rx="4" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.2" />
          <rect x="30" y="74" width="12" height="42" rx="4" fill={C.dark} stroke={C.darkStroke} strokeWidth="1.2" />
          <rect x="48" y="82" width="54" height="12" rx="4" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
        </>,
      );
    case "shelf":
      return art(
        <>
          <rect x="26" y="18" width="118" height="94" rx="8" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
          <path d="M26 62h118" stroke={C.lightStroke} strokeWidth="1.3" />
          <rect x="34" y="28" width="34" height="24" rx="4" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
          <rect x="76" y="28" width="24" height="24" rx="4" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
          <rect x="42" y="70" width="40" height="30" rx="5" fill={C.light} stroke={C.lightStroke} strokeWidth="1" />
          <path d="M42 84h40" stroke={C.lightStroke} strokeWidth="1" />
        </>,
      );
    default:
      return art(
        <>
          <rect x="26" y="40" width="118" height="70" rx="12" fill={C.body} stroke={C.bodyStroke} strokeWidth="1.6" />
        </>,
      );
  }
}