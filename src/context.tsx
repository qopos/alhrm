import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, type CategoryKey } from "@/data";
import { sound } from "@/lib/audio";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  type: string;
  qty: number;
};

export type ToastKind = "success" | "info" | "warn";
export type Toast = { id: number; message: string; kind: ToastKind };

type AppContextValue = {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (id: string, qty?: number) => void;
  changeQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  checkout: () => void;

  toasts: Toast[];
  pushToast: (message: string, kind?: ToastKind) => void;
  dismissToast: (id: number) => void;

  modalId: string | null;
  openProduct: (id: string | null) => void;

  filter: CategoryKey | "all";
  setFilter: (f: CategoryKey | "all") => void;

  muted: boolean;
  toggleMuted: () => void;

  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;

  goTo: (id: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const CART_KEY = "rashad_cart_v1";

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((i) => i && typeof i.id === "string" && Number(i.qty) > 0);
  } catch {
    return [];
  }
}

let toastCounter = 0;

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(loadCart);
  const [cartOpen, setCartOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [modalId, setModalId] = useState<string | null>(null);
  const [filter, setFilterState] = useState<CategoryKey | "all">("all");
  const [muted, setMuted] = useState(sound.muted);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioUnlocked = useRef(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      /* noop */
    }
  }, [cart]);

  useEffect(() => {
    const unlock = () => {
      if (audioUnlocked.current) return;
      audioUnlocked.current = true;
      sound.unlock();
    };
    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", cartOpen || modalId !== null || menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [cartOpen, modalId, menuOpen]);

  // delicate hover feedback on interactive elements (throttled, near-silent)
  useEffect(() => {
    let last = 0;
    let lastEl: Element | null = null;
    const onOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      const interactive = t.closest("button, a, [role='button'], input, textarea, select");
      if (!interactive) return;
      const now = performance.now();
      if (now - last < 100 || interactive === lastEl) return;
      last = now;
      lastEl = interactive;
      sound.play("hover");
    };
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => window.removeEventListener("pointerover", onOver);
  }, []);

  const pushToast = useCallback((message: string, kind: ToastKind = "info") => {
    const id = ++toastCounter;
    setToasts((t) => [...t, { id, message, kind }]);
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3200);
  }, []);

  const dismissToast = useCallback((id: number) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const addToCart = useCallback(
    (id: string, qty = 1) => {
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) return;
      setCart((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (existing) {
          return prev.map((i) =>
            i.id === id ? { ...i, qty: Math.min(99, i.qty + qty) } : i,
          );
        }
        return [
          ...prev,
          {
            id,
            name: product.name,
            price: product.price,
            type: product.type,
            qty: Math.min(99, qty),
          },
        ];
      });
      sound.play("add");
      pushToast(`تمت إضافة «${product.name}» إلى الطلبية`, "success");
    },
    [pushToast],
  );

  const changeQty = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
    sound.play("remove");
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const checkout = useCallback(() => {
    sound.play("success");
    pushToast("تم إرسال طلبك بنجاح، فريقنا سيتواصل معك قريباً", "success");
    clearCart();
    setCartOpen(false);
  }, [clearCart, pushToast]);

  const openProduct = useCallback((id: string | null) => {
    setModalId(id);
    if (id) sound.play("open");
  }, []);

  const setFilter = useCallback((f: CategoryKey | "all") => {
    setFilterState(f);
  }, []);

  const toggleMuted = useCallback(() => {
    const next = sound.setMuted(!sound.muted);
    setMuted(next);
    if (!next) sound.play("pop");
  }, []);

  const goTo = useCallback(
    (id: string) => {
      setMenuOpen(false);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      sound.play("click");
    },
    [],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      cart,
      cartCount: cart.reduce((s, i) => s + i.qty, 0),
      cartTotal: cart.reduce((s, i) => s + i.qty * i.price, 0),
      cartOpen,
      openCart: () => {
        setCartOpen(true);
        sound.play("open");
      },
      closeCart: () => {
        setCartOpen(false);
        sound.play("close");
      },
      addToCart,
      changeQty,
      removeFromCart,
      clearCart,
      checkout,
      toasts,
      pushToast,
      dismissToast,
      modalId,
      openProduct,
      filter,
      setFilter,
      muted,
      toggleMuted,
      menuOpen,
      setMenuOpen,
      goTo,
    }),
    [
      cart,
      cartOpen,
      addToCart,
      changeQty,
      removeFromCart,
      clearCart,
      checkout,
      toasts,
      pushToast,
      dismissToast,
      modalId,
      openProduct,
      filter,
      setFilter,
      muted,
      toggleMuted,
      menuOpen,
      goTo,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}