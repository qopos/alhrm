import { useState, type FormEvent } from "react";
import { CONTACT_INFO } from "@/data";
import { useApp } from "@/context";
import { Icon, Reveal } from "@/components/ui";

const INFO_CARDS: { icon: "phone" | "whatsapp" | "mail" | "pin" | "clock"; title: string; value: string; href?: string }[] = [
  { icon: "phone", title: "اتصل بنا", value: CONTACT_INFO.phone, href: CONTACT_INFO.phoneHref },
  { icon: "whatsapp", title: "واتساب", value: "راسلنا مباشرة", href: CONTACT_INFO.whatsapp },
  { icon: "mail", title: "البريد الإلكتروني", value: CONTACT_INFO.email },
  { icon: "pin", title: "فروعنا", value: `${CONTACT_INFO.address1} • ${CONTACT_INFO.address2}` },
  { icon: "clock", title: "ساعات العمل", value: CONTACT_INFO.hours },
];

export function Contact() {
  const { pushToast } = useApp();
  const [form, setForm] = useState({ name: "", phone: "", msg: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; msg?: string }>({});

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (form.name.trim().length < 2) next.name = "المرجو إدخال الاسم";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 9) next.phone = "المرجو إدخال رقم هاتف صحيح";
    if (form.msg.trim().length < 6) next.msg = "اكتب نبذة قصيرة عن طلبك";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    pushToast("تم إرسال رسالتك، سنتواصل معك خلال دقائق", "success");
    setForm({ name: "", phone: "", msg: "" });
  };

  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[36px] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(173,129,71,0.1) 0%, rgba(173,129,71,0) 70%)",
              }}
            />
            <span className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />

            <div className="relative mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 inline-flex items-center gap-2 text-[12.5px] font-bold tracking-[0.14em] text-gold-600">
                <span className="h-[5px] w-[5px] rounded-full bg-gold-500" />
                رشاد هوم — بغداد، العراق
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                بيتك ينتظر
                <br />
                <span className="bg-gradient-to-l from-gold-400 via-gold-600 to-gold-800 bg-clip-text text-transparent">
                  لمستك الأخيرة
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-[470px] text-[14.5px] leading-[1.85] text-ink-500">
                تواصل معنا اليوم واحصل على استشارة تصميم مجانية. نساعدك تختار ما
                يناسب مساحتك وذوقك وميزانيتك.
              </p>
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr]">
              {/* Info cards */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                {INFO_CARDS.map((c) => {
                  const inner = (
                    <div className="glass-card flex items-center gap-3.5 rounded-2xl p-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-300/30 bg-gradient-to-br from-gold-50 to-gold-100 text-gold-600">
                        <Icon name={c.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-medium text-ink-400">{c.title}</span>
                        <span className="block truncate text-[13.5px] font-bold text-ink-800">
                          {c.value}
                        </span>
                      </span>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div key={c.title}>{inner}</div>
                  );
                })}
              </div>

              {/* Form */}
              <form
                onSubmit={submit}
                className="glass-card flex flex-col gap-4 rounded-[26px] p-6 sm:p-7"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12.5px] font-bold text-ink-700">الاسم الكامل</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="مثال: أحمد الكاظمي"
                      className={`rounded-xl border bg-white/70 px-4 py-3 text-[14px] text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 ${
                        errors.name ? "border-red-300" : "border-gold-300/30"
                      }`}
                    />
                    {errors.name && <span className="text-[11px] font-medium text-red-400">{errors.name}</span>}
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12.5px] font-bold text-ink-700">رقم الهاتف</span>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="07xxxxxxxx"
                      inputMode="tel"
                      dir="ltr"
                      className={`rounded-xl border bg-white/70 px-4 py-3 text-end text-[14px] text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 ${
                        errors.phone ? "border-red-300" : "border-gold-300/30"
                      }`}
                    />
                    {errors.phone && <span className="text-[11px] font-medium text-red-400">{errors.phone}</span>}
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-bold text-ink-700">رسالتك</span>
                  <textarea
                    value={form.msg}
                    onChange={(e) => setForm((f) => ({ ...f, msg: e.target.value }))}
                    placeholder="حدثنا عن القطعة أو التصميم الذي تبحث عنه..."
                    rows={4}
                    className={`resize-none rounded-xl border bg-white/70 px-4 py-3 text-[14px] text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 ${
                      errors.msg ? "border-red-300" : "border-gold-300/30"
                    }`}
                  />
                  {errors.msg && <span className="text-[11px] font-medium text-red-400">{errors.msg}</span>}
                </label>

                <button type="submit" className="btn-gold mt-1 rounded-2xl py-4 text-[15px] font-bold">
                  <Icon name="send" className="h-4 w-4" />
                  أرسل الطلب
                </button>

                <p className="text-center text-[11.5px] font-medium text-ink-400">
                  أو راسلنا مباشرة على واتساب
                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-1 font-bold text-gold-600 hover:text-gold-700"
                  >
                    من هنا
                  </a>
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}