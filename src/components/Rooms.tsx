import { CATEGORIES } from "@/data";
import { useApp } from "@/context";
import { FurnArt, Icon, Reveal, SectionHeader } from "@/components/ui";
import { arNum } from "@/lib/format";

const ROOM_ART: Record<string, string> = {
  sofa: "sofa",
  bed: "bed",
  dining: "table",
  office: "office",
  decor: "shelf",
};

export function Rooms() {
  const { setFilter, goTo } = useApp();

  return (
    <section id="rooms" className="scroll-mt-24 px-5 pb-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="غرف جاهزة للإلهام"
            center
            title={
              <>
                تصاميم متكاملة لكل ركن في بيتك
              </>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((room, i) => (
            <Reveal key={room.key} delay={i * 70}>
              <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-[0_6px_28px_rgba(56,42,26,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_54px_rgba(56,42,26,0.12)]">
                <div className="product-art flex h-44 items-center justify-center overflow-hidden border-b border-white/70">
                  <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
                  <FurnArt
                    type={ROOM_ART[room.key]}
                    width={180}
                    height={136}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-300/30 bg-gradient-to-br from-gold-50 to-gold-100 text-gold-600">
                      <Icon name={room.icon as never} className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-gold-100/80 px-2.5 py-1 text-[10.5px] font-bold text-gold-700">
                      {arNum(room.count)} قطعة
                    </span>
                  </div>
                  <h3 className="text-[16px] font-extrabold text-ink-900">{room.name}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">{room.blurb}</p>
                  <button
                    onClick={() => {
                      setFilter(room.key);
                      goTo("collection");
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 transition-colors hover:text-gold-800"
                  >
                    تصفح القطع
                    <Icon name="arrow-left" className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={CATEGORIES.length * 70}>
            <article className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[28px] bg-gradient-to-br from-gold-500 via-gold-600 to-gold-800 p-8 text-center text-ivory shadow-[0_20px_54px_rgba(122,83,46,0.3)]">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-14 -left-10 h-44 w-44 rounded-full bg-black/10"
              />
              <Icon name="gem" className="h-9 w-9 opacity-90" />
              <h3 className="text-xl font-extrabold leading-snug">لست متأكداً بعد؟</h3>
              <p className="max-w-[260px] text-[13px] leading-relaxed text-ivory/80">
                احجز استشارة تصميم مجانية ونساعدك تختار الأنسب لمساحتك وذوقك.
              </p>
              <button
                onClick={() => goTo("contact")}
                className="rounded-2xl bg-white/95 px-6 py-2.5 text-[13.5px] font-bold text-gold-700 shadow-lg transition-transform hover:scale-[1.03]"
              >
                استشارة مجانية
              </button>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}