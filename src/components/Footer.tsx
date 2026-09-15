import { FOOTER_LINKS } from "@/data";
import { useApp } from "@/context";
import { Icon, LogoMark } from "@/components/ui";

const SOCIALS: { icon: "whatsapp" | "mail" | "phone" | "pin"; label: string }[] = [
  { icon: "whatsapp", label: "واتساب" },
  { icon: "mail", label: "بريد" },
  { icon: "phone", label: "اتصال" },
  { icon: "pin", label: "موقع" },
];

export function Footer() {
  const { goTo, pushToast } = useApp();

  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="glass rounded-[30px] px-6 py-10 sm:px-10 lg:px-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr]">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <LogoMark size={42} />
                <div>
                  <p className="text-[17px] font-extrabold tracking-tight text-ink-900">رشاد هوم</p>
                  <p className="text-[9.5px] font-semibold tracking-[0.22em] text-ink-400">
                    RASHAD HOME
                  </p>
                </div>
              </div>
              <p className="max-w-[260px] text-[13.5px] leading-[1.85] text-ink-500">
                أثاث فاخر يجمع بين الذوق الراقي والجودة العالية — بحرفية عراقية
                أصيلة منذ عام ٢٠٠٩.
              </p>
              <div className="mt-5 flex gap-2.5">
                {SOCIALS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => pushToast("روابط التواصل قادمة قريباً", "info")}
                    className="icon-btn"
                    aria-label={s.label}
                  >
                    <Icon name={s.icon} className="h-[18px] w-[18px]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-[14px] font-extrabold text-ink-800">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => goTo(link.target)}
                        className="text-[13px] font-normal text-ink-500 transition-colors hover:text-gold-700"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/55 px-6 py-4 backdrop-blur-md sm:flex-row">
          <p className="text-[12px] font-medium text-ink-400">
            © ٢٠٢٥ رشاد هوم — جميع الحقوق محفوظة
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {["سياسة الخصوصية", "الشروط والأحكام", "سياسة الإرجاع"].map((l) => (
              <button
                key={l}
                onClick={() => pushToast(`«${l}» ستُتاح قريباً`, "info")}
                className="text-[11.5px] font-medium text-ink-400 transition-colors hover:text-gold-700"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}