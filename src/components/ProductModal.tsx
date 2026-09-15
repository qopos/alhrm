import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data";
import { useApp } from "@/context";
import { FurnArt, Icon } from "@/components/ui";
import { arPrice } from "@/lib/format";

export function ProductModal() {
  const { modalId, openProduct, addToCart, openCart } = useApp();
  const product = PRODUCTS.find((p) => p.id === modalId) ?? null;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
  }, [modalId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") openProduct(null);
    };
    if (modalId) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalId, openProduct]);

  if (!modalId || !product) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-ink-950/45 backdrop-blur-sm"
        style={{ animation: "fade-in 0.25s ease both" }}
        onClick={() => openProduct(null)}
      />

      <div
        className="glass-panel relative w-full max-w-lg overflow-hidden rounded-t-[30px] sm:rounded-[30px]"
        style={{ animation: "scale-in 0.32s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        <button
          onClick={() => openProduct(null)}
          className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-gold-300/30 bg-white/80 text-ink-600 shadow-sm backdrop-blur-md transition-all hover:rotate-90 hover:text-gold-700"
          aria-label="إغلاق"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>

        <div className="product-art relative flex h-56 items-center justify-center border-b border-white/70 sm:h-64">
          <span className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
          {product.tag && (
            <span className="absolute right-4 top-4 rounded-full bg-gold-100 px-3 py-1 text-[10.5px] font-bold text-gold-800">
              {product.tag}
            </span>
          )}
          <FurnArt type={product.type} width={250} height={188} />
        </div>

        <div className="p-6 sm:p-7">
          <p className="text-[11.5px] font-medium text-ink-400">{product.material}</p>
          <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-ink-900">
            {product.name}
          </h3>
          <p className="mt-3 text-[13.5px] leading-[1.85] text-ink-500">{product.desc}</p>

          <div className="mt-5 space-y-2.5">
            {product.features.map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-[13px] font-medium text-ink-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gold-100 text-gold-700">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {f}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => qty > 1 && setQty((q) => q - 1)}
                className="icon-btn"
                style={{ width: 40, height: 40 }}
                aria-label="إنقاص"
              >
                <Icon name="minus" className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-[16px] font-extrabold text-ink-900">
                {qty.toLocaleString("en-US")}
              </span>
              <button
                onClick={() => qty < 99 && setQty((q) => q + 1)}
                className="icon-btn"
                style={{ width: 40, height: 40 }}
                aria-label="زيادة"
              >
                <Icon name="plus" className="h-4 w-4" />
              </button>
            </div>
            <div className="text-end">
              <p className="text-[10.5px] font-medium text-ink-400">السعر الكلي</p>
              <p className="text-xl font-extrabold text-gold-600">
                {arPrice(product.price * qty)}
                <span className="text-[11px] font-medium text-ink-400"> د.ع</span>
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              onClick={() => addToCart(product.id, qty)}
              className="btn-gold rounded-2xl py-3.5 text-[14px] font-bold"
            >
              أضف للطلب
            </button>
            <button
              onClick={() => {
                addToCart(product.id, qty);
                openProduct(null);
                openCart();
              }}
              className="btn-ghost rounded-2xl py-3.5 text-[14px] font-bold"
            >
              طلب مباشر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}