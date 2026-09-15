import { useApp } from "@/context";
import { Icon } from "@/components/ui";

const KIND_STYLES = {
  success: {
    bar: "from-gold-500 to-gold-700",
    icon: "check",
    text: "text-gold-800",
  },
  info: {
    bar: "from-gold-400 to-gold-500",
    icon: "spark",
    text: "text-gold-700",
  },
  warn: {
    bar: "from-amber-500 to-gold-600",
    icon: "badge",
    text: "text-gold-700",
  },
} as const;

export function Toasts() {
  const { toasts, dismissToast } = useApp();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-[90] flex flex-col items-center gap-2.5 px-4">
      {toasts.map((t) => {
        const s = KIND_STYLES[t.kind];
        return (
          <div
            key={t.id}
            className="glass-panel pointer-events-auto flex w-full max-w-md items-center gap-3 overflow-hidden rounded-2xl py-3 pe-4 ps-3"
            style={{ animation: "toast-in 0.4s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 text-white shadow-md">
              <Icon name={s.icon} className="h-4.5 w-4.5" />
            </span>
            <p className={`flex-1 text-[13px] font-bold ${s.text}`}>{t.message}</p>
            <button
              onClick={() => dismissToast(t.id)}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-white/70 hover:text-ink-700"
              aria-label="إغلاق"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-l ${s.bar}`} />
          </div>
        );
      })}
    </div>
  );
}