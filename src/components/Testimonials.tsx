import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data";
import { Icon, Reveal, SectionHeader, Stars } from "@/components/ui";

function visiblePerPage(): number {
  if (typeof window === "undefined") return 3;
  return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      setPerPage(visiblePerPage());
      setPage((p) => 0);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pages = Math.max(1, Math.ceil(TESTIMONIALS.length / perPage));

  const go = useCallback(
    (dir: number) => {
      setPage((p) => (p + dir + pages) % pages);
    },
    [pages],
  );

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => go(1), 6000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, go]);

  useEffect(() => {
    if (page >= pages) setPage(0);
  }, [pages, page]);

  const slice = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="px-5 pb-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="ماذا يقول عملاؤنا"
            center
            title="آراء حقيقية من عملاء حقيقيين"
          />
        </Reveal>

        <Reveal>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {slice.map((t) => (
                <figure
                  key={t.name}
                  className="glass-card flex h-full flex-col gap-4 rounded-[26px] p-6"
                  style={{ animation: "rise-sm 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                  <Stars n={t.stars} />
                  <blockquote className="text-[14px] leading-[1.85] text-ink-600">
                    "{t.text}"
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-gold-300/20 pt-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-[16px] font-extrabold text-white shadow-md">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-[13.5px] font-extrabold text-ink-900">
                        {t.name}
                      </span>
                      <span className="block text-[11.5px] font-medium text-ink-400">
                        {t.city}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                onClick={() => go(-1)}
                className="icon-btn"
                aria-label="السابق"
              >
                <Icon name="arrow-right" className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`صفحة ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === page
                        ? "w-6 bg-gradient-to-r from-gold-500 to-gold-700"
                        : "w-2 bg-gold-300/50 hover:bg-gold-400/70"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="icon-btn"
                aria-label="التالي"
              >
                <Icon name="arrow-left" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}