import { useMemo } from "react";
import { CATEGORIES, PRODUCTS, type CategoryKey } from "@/data";
import { useApp } from "@/context";
import { FurnArt, Icon, Reveal, SectionHeader } from "@/components/ui";
import { arPrice } from "@/lib/format";

const FILTERS: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "الكل" },
  ...CATEGORIES.map((c) => ({ key: c.key, label: c.name.replace("غرف ", "").replace("المكتب الفاخر", "مكتب") })),
];

const TAG_STYLES: Record<string, string> = {
  "جديد": "bg-gold-100 text-gold-800",
  "مميز": "bg-gold-200 text-gold-900",
  "الأكثر طلباً": "bg-gold-800 text-gold-50",
};

export function Collection() {
  const { filter, setFilter, openProduct, addToCart } = useApp();

  const visible = useMemo(
    () =>
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  return (
    <section id="collection" className="scroll-mt-24 px-5 pb-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="كولكشن مختار"
            title="القطع الأكثر طلباً"
            action={
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`chip ${filter === f.key ? "active" : ""}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            }
          />
        </Reveal>

        {visible.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-400">
            لا توجد قطع في هذا التصنيف حالياً.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product, i) => (
              <Reveal key={product.id} delay={(i % 3) * 80}>
                <article
                  className="glass-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-[26px]"
                  onClick={() => openProduct(product.id)}
                >
                  <div className="product-art relative h-[196px] overflow-hidden border-b border-white/70">
                    <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
                    {product.tag && (
                      <span
                        className={`absolute end-3.5 top-3.5 rounded-full px-3 py-1 text-[10.5px] font-bold shadow-sm ${
                          TAG_STYLES[product.tag] ?? "bg-gold-100 text-gold-800"
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                    <div className="flex h-full w-full items-center justify-center">
                      <FurnArt
                        type={product.type}
                        width={176}
                        height={132}
                        className="transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-medium text-ink-400">{product.material}</p>
                    <h3 className="mt-1 text-[16.5px] font-extrabold tracking-tight text-ink-900">
                      {product.name}
                    </h3>
                    <div className="mt-4 flex items-end justify-between gap-3 pt-1">
                      <div>
                        <p className="text-[21px] font-extrabold leading-none tracking-tight text-gold-600">
                          {arPrice(product.price)}
                        </p>
                        <p className="mt-1 text-[10.5px] font-medium text-ink-400">دينار عراقي</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[12.5px] font-bold text-gold-700 transition-all duration-200 hover:bg-gold-600 hover:text-white"
                        style={{ background: "rgba(173,129,71,0.14)" }}
                      >
                        <Icon name="cart" className="h-4 w-4" />
                        اطلب
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}