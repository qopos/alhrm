import { CATEGORIES } from "@/data";
import { useApp } from "@/context";
import { Icon, Reveal, SectionHeader } from "@/components/ui";
import { arNum } from "@/lib/format";

export function Categories() {
  const { setFilter, goTo } = useApp();

  return (
    <section className="px-5 pb-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="تصفح التصنيفات"
            title={
              <>
                أثّث كل غرفة
                <br />
                بأناقة لا مثيل لها
              </>
            }
            action={
              <button
                onClick={() => {
                  setFilter("all");
                  goTo("collection");
                }}
                className="btn-ghost rounded-xl px-5 py-2.5 text-[13px] font-bold"
              >
                عرض الكل
                <Icon name="arrow-left" className="h-4 w-4" />
              </button>
            }
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 70}>
              <button
                onClick={() => {
                  setFilter(cat.key);
                  goTo("collection");
                }}
                className="glass-card group flex h-full w-full flex-col items-center gap-2.5 rounded-3xl p-5 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-300/30 bg-gradient-to-br from-gold-50 to-gold-100 text-gold-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-gold-500 group-hover:to-gold-700 group-hover:text-white">
                  <Icon name={cat.icon as never} className="h-6 w-6" />
                </span>
                <span className="text-[13.5px] font-extrabold text-ink-800">{cat.name}</span>
                <span className="text-[11px] font-medium text-ink-400">
                  {arNum(cat.count)} قطعة
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}