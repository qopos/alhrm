import { useEffect, useState } from "react";
import { CONTACT_INFO } from "@/data";
import { Icon } from "@/components/ui";

export function Floats() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 end-5 z-[60] flex flex-col items-center gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="icon-btn"
          aria-label="العودة للأعلى"
          style={{ animation: "scale-in 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <Icon name="arrow-up" className="h-5 w-5" />
        </button>
      )}
      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 via-gold-600 to-gold-800 text-white shadow-[0_14px_34px_rgba(122,83,46,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(122,83,46,0.5)]"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
        <span
          className="pointer-events-none absolute hidden whitespace-nowrap rounded-xl border border-gold-300/30 bg-white/90 px-3 py-1.5 text-[12px] font-bold text-ink-700 shadow-lg backdrop-blur-md group-hover:block"
          style={{ left: "calc(100% + 14px)", top: "50%", transform: "translateY(-50%)" }}
        >
          تواصل عبر واتساب
        </span>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-2xl bg-gold-500/30" style={{ animationDuration: "2.6s" }} />
      </a>
    </div>
  );
}