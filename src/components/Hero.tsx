import { PRODUCTS } from "@/data";
import { useApp } from "@/context";
import { FurnArt, Icon, Stars } from "@/components/ui";
import { arPrice } from "@/lib/format";

export function Hero() {
  const { goTo, addToCart, openProduct } = useApp();
  const featured = PRODUCTS[0];

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pt-40">
      {/* soft ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 -top-24 h-[480px] w-[480px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(173,129,71,0.16) 0%, rgba(173,129,71,0) 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(214,192,150,0.13) 0%, rgba(214,192,150,0) 68%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Text side */}
        <div className="flex flex-col gap-7">
          <div
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-gold-300/40 bg-white/60 py-1.5 pl-4 pr-2.5 shadow-sm backdrop-blur-md"
          >
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gradient-to-br from-gold-400 to-gold-600" />
            <span className="text-[12.5px] font-bold text-gold-700">
              كولكشن ٢٠٢٥ متاح الآن
            </span>
          </div>

          <h1 className="text-[42px] font-extrabold leading-[1.12] tracking-tight text-ink-900 sm:text-6xl lg:text-[64px]">
            أثاث يعكس
            <br />
            <span className="bg-gradient-to-l from-gold-400 via-gold-600 to-gold-800 bg-clip-text text-transparent">
              ذوقك الفاخر
            </span>
          </h1>

          <p className="max-w-[440px] text-[15.5px] leading-[1.9] text-ink-500">
            في رشاد هوم نصنع لك بيتاً يليق بك — من أجود الخامات الخشبية المستوردة
            وأرقى التصاميم الكلاسيكية والمعاصرة، بحرفية عراقية أصيلة منذ ٢٠٠٩.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => goTo("collection")}
              className="btn-gold rounded-2xl px-7 py-3.5 text-[15px] font-bold"
            >
              استعرض الكولكشن
              <Icon name="arrow-left" className="h-4 w-4" />
            </button>
            <button
              onClick={() => goTo("about")}
              className="btn-ghost rounded-2xl px-6 py-3.5 text-[15px] font-semibold"
            >
              تعرّف علينا
            </button>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
            {["ضمان ٥ سنوات", "توصيل مجاني", "تصنيع محلي"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-[12.5px] font-semibold text-gold-700">
                <Icon name="check" className="h-3.5 w-3.5" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Product card */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="glass-panel relative overflow-hidden rounded-[34px] p-6 sm:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(173,129,71,0.14) 0%, rgba(173,129,71,0) 70%)",
              }}
            />

            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-gold-300/40 bg-gold-50 px-3.5 py-1.5 text-[11.5px] font-bold text-gold-700">
                القطعة المميزة
              </span>
              <span className="flex items-center gap-1 text-[10.5px] font-semibold tracking-wide text-ink-400">
                رشاد هوم
                <Icon name="gem" className="h-3.5 w-3.5 text-gold-500" />
              </span>
            </div>

            <button
              onClick={() => openProduct(featured.id)}
              className="product-art group relative block h-[210px] w-full overflow-hidden rounded-3xl border border-white/70 transition-transform duration-300 hover:scale-[1.015]"
            >
              <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
              <FurnArt type={featured.type} width={220} height={164} className="absolute inset-0 m-auto" />
            </button>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-lg font-extrabold tracking-tight text-ink-900">
                  {featured.name}
                </p>
                <p className="mt-0.5 text-[12px] text-ink-400">{featured.material}</p>
              </div>
              <div className="text-end">
                <p className="text-[21px] font-extrabold leading-none tracking-tight text-gold-600">
                  {arPrice(featured.price)}
                </p>
                <p className="mt-1 text-[10px] font-medium text-ink-400">دينار عراقي</p>
              </div>
            </div>

            <div className="mt-5 flex gap-2.5">
              <button
                onClick={() => addToCart(featured.id)}
                className="btn-gold flex-1 rounded-2xl py-3 text-[14px] font-bold"
              >
                اطلب الآن
              </button>
              <button
                onClick={() => openProduct(featured.id)}
                className="btn-ghost rounded-2xl px-4 py-3"
                aria-label="التفاصيل"
              >
                <Icon name="spark" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Floating: delivery */}
          <div className="anim-floaty absolute -left-10 top-6 hidden items-center gap-2.5 rounded-2xl border border-gold-300/25 bg-white/80 px-3.5 py-3 shadow-[0_16px_40px_rgba(56,42,26,0.14)] backdrop-blur-xl md:flex md:-left-16">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
              <Icon name="truck" className="h-5 w-5" />
            </span>
            <span className="text-start">
              <span className="block text-[12px] font-bold text-ink-800">توصيل مجاني</span>
              <span className="block text-[11px] text-ink-400">لجميع أنحاء العراق</span>
            </span>
          </div>

          {/* Floating: rating */}
          <div
            className="anim-floaty-soft absolute bottom-14 -right-4 hidden rounded-2xl border border-gold-300/25 bg-white/80 px-3.5 py-3 shadow-[0_16px_40px_rgba(56,42,26,0.14)] backdrop-blur-xl md:-right-10 md:bottom-20 md:block"
          >
            <p className="mb-1 text-[10.5px] font-medium text-ink-400">تقييم العملاء</p>
            <Stars n={5} />
            <p className="mt-1.5 text-[12px] font-bold text-ink-800">
              ٤.٩ من مجموعة تقييمات
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}