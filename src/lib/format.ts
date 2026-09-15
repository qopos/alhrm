const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

/** Format a number into Arabic-Indic digits with Western grouping (٤٥٠٬٠٠٠). */
export function arNum(n: number): string {
  const rounded = Math.round(n);
  const grouped = rounded.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return grouped.replace(/[0-9]/g, (d) => AR_DIGITS[Number(d)]);
}

/** Format a currency amount, e.g. arNum(450000) + " د.ع". */
export function arPrice(n: number): string {
  return arNum(n);
}

/** Convert an Arabic-Indic digit string back to Latin (e.g. for parsing). */
export function toLatin(s: string): string {
  return s.replace(/[٠-٩]/g, (d) => String(AR_DIGITS.indexOf(d)));
}

/** Animate a counter from 0 to target, formatting each frame to Arabic digits. */
export function animateArabicCount(
  target: number,
  onFrame: (formatted: string) => void,
  onDone?: () => void,
  duration = 1400,
): () => void {
  const start = performance.now();
  let raf = 0;
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - p, 3);
    const value = Math.round(target * eased);
    onFrame(arNum(value));
    if (p < 1) {
      raf = requestAnimationFrame(tick);
    } else {
      onDone?.();
    }
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

export function formatPriceLabel(price: number): string {
  return `${arPrice(price)} د.ع`;
}