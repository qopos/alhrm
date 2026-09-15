import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data";
import { useApp } from "@/context";
import { Icon, LogoMark } from "@/components/ui";

export function Navbar() {
  const { cartCount, openCart, goTo, menuOpen, setMenuOpen, muted, toggleMuted } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // scrollspy
      const probe = window.scrollY + window.innerHeight * 0.32;
      let current = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= probe) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border border-gold-300/30 bg-white/80 shadow-[0_18px_50px_rgba(56,42,26,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl"
            : "border border-white/60 bg-white/50 shadow-[0_8px_30px_rgba(56,42,26,0.07),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl"
        }`}
        style={{ maxWidth: "1180px" }}
      >
        {/* Brand */}
        <button
          onClick={() => goTo("home")}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="رشاد هوم"
        >
          <LogoMark size={40} />
          <span className="hidden text-start xs:block">
            <span className="block text-base font-extrabold leading-none tracking-tight text-ink-900">
              رشاد هوم
            </span>
            <span className="mt-0.5 block text-[9.5px] font-semibold tracking-[0.22em] text-ink-400">
              RASHAD HOME
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`relative rounded-xl px-3.5 py-2 text-[13.5px] transition-colors duration-200 ${
                active === item.id
                  ? "bg-gold-100/80 font-bold text-gold-700"
                  : "font-medium text-ink-500 hover:bg-white/70 hover:text-ink-800"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMuted}
            className="icon-btn"
            aria-label={muted ? "تشغيل الأصوات" : "كتم الأصوات"}
            title={muted ? "تشغيل الأصوات" : "كتم الأصوات"}
          >
            <Icon name={muted ? "mute" : "sound"} className="h-[18px] w-[18px]" />
          </button>
          <button
            onClick={openCart}
            className="icon-btn relative"
            aria-label="سلة المشتريات"
          >
            <Icon name="cart" className="h-[19px] w-[19px]" />
            {cartCount > 0 && (
              <span className="absolute -end-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-700 px-1 text-[10px] font-extrabold text-white shadow-md">
                {cartCount.toLocaleString("en-US")}
              </span>
            )}
          </button>
          <button
            onClick={() => goTo("contact")}
            className="btn-gold hidden rounded-xl px-5 py-2.5 text-[13px] font-bold sm:inline-flex"
          >
            تواصل معنا
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="icon-btn md:hidden"
            aria-label="القائمة"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-[20px] w-[20px]" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto overflow-hidden rounded-2xl border shadow-2xl transition-all duration-300 ${
          menuOpen
            ? "mt-2 max-h-[420px] border-gold-300/30 bg-white/90 opacity-100 backdrop-blur-2xl"
            : "max-h-0 border-transparent bg-transparent opacity-0"
        }`}
        style={{ maxWidth: "1180px" }}
      >
        <div className="flex flex-col gap-1 p-3">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-start text-[15px] transition-colors ${
                active === item.id
                  ? "bg-gold-100/80 font-bold text-gold-700"
                  : "font-medium text-ink-600 hover:bg-white/80"
              }`}
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {item.label}
              <Icon name="arrow-left" className="h-4 w-4 opacity-40" />
            </button>
          ))}
          <button
            onClick={() => goTo("contact")}
            className="btn-gold mt-1 rounded-xl px-4 py-3 text-[14px] font-bold"
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </header>
  );
}