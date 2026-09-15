import { PROMISES } from "@/data";
import { useApp } from "@/context";
import { Icon, Reveal } from "@/components/ui";

const CHECKLIST = [
  "ضمان ٥ سنوات على جميع المنتجات",
  "توصيل وتركيب مجاني داخل بغداد",
  "خامات مستوردة ومعتمدة دولياً",
  "خدمة عملاء متاحة ٢٤ / ٧",
];

export function About() {
  const { goTo } = useApp();

  return (
    <section id="about" className="scroll-mt-24 px-5 pb-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(173,129,71,0.12) 0%, rgba(173,129,71,0) 70%)",
              }}
            />

            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text */}
              <div>
                <p className="mb-3 inline-flex items-center gap-2 text-[12.5px] font-bold tracking-[0.14em] text-gold-600">
                  <span className="h-[5px] w-[5px] rounded-full bg-gold-500" />
                  وعدنا لك
                </p>
                <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
                  جودة لا تُساوَم عليها
                  <br />
                  <span className="text-gold-600">وخدمة تستحقها</span>
                </h2>
                <p className="mt-4 max-w-[460px] text-[14.5px] leading-[1.9] text-ink-500">
                  كل قطعة أثاث تخرج من ورشنا تمر بمراحل صارمة من مراقبة الجودة.
                  نستخدم أجود أنواع الخشب المستورد ونضمن لك منتجاً يدوم لأجيال.
                </p>

                <div className="mt-6 space-y-3">
                  {CHECKLIST.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-gold-500 to-gold-700 text-white shadow-sm">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span className="text-[13.5px] font-medium text-ink-600">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => goTo("contact")}
                  className="btn-gold mt-8 rounded-2xl px-6 py-3 text-[14px] font-bold"
                >
                  احجز استشارتك المجانية
                </button>
              </div>

              {/* Promise cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {PROMISES.map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="glass-card flex h-full flex-col items-start gap-3 rounded-3xl p-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-300/30 bg-gradient-to-br from-gold-50 to-gold-100 text-gold-600">
                        <Icon name={item.icon as never} className="h-5 w-5" />
                      </span>
                      <p className="text-[15px] font-extrabold text-ink-900">{item.title}</p>
                      <p className="text-[12.5px] leading-relaxed text-ink-500">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}