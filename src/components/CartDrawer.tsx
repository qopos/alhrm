import { useApp } from "@/context";
import { FREE_DELIVERY_THRESHOLD } from "@/data";
import { FurnArt, Icon } from "@/components/ui";
import { arPrice } from "@/lib/format";

export function CartDrawer() {
  const {
    cartOpen,
    closeCart,
    cart,
    cartCount,
    cartTotal,
    changeQty,
    removeFromCart,
    checkout,
    openProduct,
    goTo,
  } = useApp();

  if (!cartOpen) return null;

  const progress = Math.min(1, cartTotal / FREE_DELIVERY_THRESHOLD);
  const remaining = FREE_DELIVERY_THRESHOLD - cartTotal;
  const isEmpty = cart.length === 0;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-ink-950/45 backdrop-blur-sm"
        style={{ animation: "fade-in 0.25s ease both" }}
        onClick={closeCart}
      />

      <aside
        className="glass-panel absolute inset-y-0 start-0 flex w-full max-w-md flex-col border-s-0 rounded-none"
        style={{ animation: "drawer-in 0.38s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gold-300/20 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 text-white shadow-md">
              <Icon name="cart" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[16px] font-extrabold text-ink-900">طلبيتك</p>
              <p className="text-[11.5px] font-medium text-ink-400">
                {arPrice(cartCount)} قطعة
              </p>
            </div>
          </div>
          <button onClick={closeCart} className="icon-btn" aria-label="إغلاق السلة">
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        {isEmpty ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gold-100 text-gold-500">
              <Icon name="box" className="h-10 w-10" />
            </span>
            <p className="text-[16px] font-extrabold text-ink-900">طلبيتك فارغة</p>
            <p className="text-[13px] leading-relaxed text-ink-500">
              تصفح الكولكشن وأضف ما يعجبك وستجده هنا.
            </p>
            <button
              onClick={() => {
                closeCart();
                goTo("collection");
              }}
              className="btn-gold rounded-2xl px-6 py-3 text-[13.5px] font-bold"
            >
              تصفح الكولكشن
            </button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="glass-card flex items-center gap-3.5 rounded-2xl p-3"
              >
                <button
                  onClick={() => {
                    closeCart();
                    openProduct(item.id);
                  }}
                  className="product-art flex h-[74px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-xl"
                  aria-label={`تفاصيل ${item.name}`}
                >
                  <FurnArt type={item.type} width={90} height={66} />
                </button>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13.5px] font-extrabold text-ink-900">{item.name}</p>
                  <p className="mt-0.5 text-[13px] font-bold text-gold-600">
                    {arPrice(item.price)}
                    <span className="text-[10px] font-medium text-ink-400"> د.ع</span>
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 rounded-lg border border-gold-300/30 bg-white/70 p-1">
                      <button
                        onClick={() => changeQty(item.id, 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-gold-100 hover:text-gold-700"
                        aria-label="زيادة"
                      >
                        <Icon name="plus" className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-[12.5px] font-extrabold text-ink-900">
                        {item.qty.toLocaleString("en-US")}
                      </span>
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        className="flex h-6 w-6 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-gold-100 hover:text-gold-700"
                        aria-label="إنقاص"
                      >
                        <Icon name="minus" className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-red-50 hover:text-red-400"
                      aria-label="حذف"
                    >
                      <Icon name="trash" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {!isEmpty && (
          <div className="space-y-4 border-t border-gold-300/20 px-6 py-5">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-[11.5px] font-medium text-ink-500">
                <span>
                  {remaining > 0 ? (
                    <>
                      أضف <span className="font-bold text-gold-700">{arPrice(remaining)}</span> د.ع
                      للحصول على توصيل مجاني
                    </>
                  ) : (
                    <span className="font-bold text-gold-700">تهانينا! التوصيل مجاني</span>
                  )}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gold-100">
                <div
                  className="h-full rounded-full bg-gradient-to-l from-gold-400 to-gold-700 transition-all duration-700"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-ink-700">الإجمالي</span>
              <span className="text-[22px] font-extrabold tracking-tight text-gold-600">
                {arPrice(cartTotal)}
                <span className="text-[11px] font-medium text-ink-400"> د.ع</span>
              </span>
            </div>

            <button
              onClick={checkout}
              className="btn-gold w-full rounded-2xl py-4 text-[14.5px] font-bold"
            >
              إتمام الطلب
              <Icon name="check" className="h-4 w-4" />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}