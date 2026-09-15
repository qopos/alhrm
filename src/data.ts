// ── Site content ────────────────────────────────────────────────────────────
// All numerals are stored as Latin and formatted to Arabic-Indic at render.

export type CategoryKey = "sofa" | "bed" | "dining" | "office" | "decor";

export type NavItem = { id: string; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "الرئيسية" },
  { id: "collection", label: "الكولكشن" },
  { id: "rooms", label: "الغرف" },
  { id: "about", label: "من نحن" },
  { id: "contact", label: "تواصل معنا" },
];

export const CATEGORIES: {
  key: CategoryKey;
  name: string;
  count: number;
  icon: string;
  blurb: string;
  productTypes: string[];
}[] = [
  {
    key: "sofa",
    name: "غرف المعيشة",
    count: 48,
    icon: "sofa",
    blurb: "صالونات وركنات بأقمشة فاخرة",
    productTypes: ["sofa", "armchair"],
  },
  {
    key: "bed",
    name: "غرف النوم",
    count: 32,
    icon: "bed",
    blurb: "أسرة وخزائن بدفء راقٍ",
    productTypes: ["bed", "kingbed", "wardrobe"],
  },
  {
    key: "dining",
    name: "غرف الطعام",
    count: 24,
    icon: "table",
    blurb: "طاولات تليق بلقاءات عائلية",
    productTypes: ["table"],
  },
  {
    key: "office",
    name: "المكتب الفاخر",
    count: 16,
    icon: "office",
    blurb: "مكاتب تنفيذية وحلول عمل",
    productTypes: ["office"],
  },
  {
    key: "decor",
    name: "الديكور",
    count: 60,
    icon: "decor",
    blurb: "لمسات نهائية تُكمل الحكاية",
    productTypes: ["decor", "shelf"],
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  material: string;
  tag?: string;
  type: string;
  categories: CategoryKey[];
  alt?: string;
  desc: string;
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "طقم صالة ملكي",
    price: 450000,
    material: "خشب جوز أمريكي + قماش إيطالي",
    tag: "جديد",
    type: "sofa",
    categories: ["sofa"],
    desc: "صالة بثلاثة مقاعد بتصميم كلاسيكي معاصر، هيكل من خشب الجوز الأمريكي وتنجيد مخملي إيطالي.",
    features: ["هيكل خشب جوز أمريكي", "قماش مخمل إيطالي", "إسفنج عالي الكثافة"],
  },
  {
    id: "p2",
    name: "غرفة نوم فاخرة",
    price: 380000,
    material: "خشب زان + مرايا مُطوَّقة",
    tag: "مميز",
    type: "bed",
    categories: ["bed"],
    desc: "غرفة نوم كاملة بإطار فاخر ومرايا مُطوّقة بدقة حرفية عالية لتجربة راحة حقيقية.",
    features: ["خشب زان مصقّول", "مرايا مطوّقة يدوياً", "دهان عالي الجودة"],
  },
  {
    id: "p3",
    name: "طاولة طعام ملكية",
    price: 180000,
    material: "رخام كاراره + قاعدة بلوط",
    type: "table",
    categories: ["dining"],
    desc: "طاولة طعام برخام كاراره الأصيل وقاعدة من خشب البلوط، تتسع لعشرة أشخاص بأناقة.",
    features: ["رخام كاراره إيطالي", "قاعدة بلوط صلبة", "تتسع لعشرة أشخاص"],
  },
  {
    id: "p4",
    name: "ركنة كابوتشينو",
    price: 220000,
    material: "جلد طبيعي فاخر مستورد",
    tag: "الأكثر طلباً",
    type: "armchair",
    categories: ["sofa"],
    desc: "ركنة عصرية بجلد طبيعي مستورد بلون كابوتشينو دافئ، مريحة وثابتة في التصميم.",
    features: ["جلد طبيعي مستورد", "تصميم على شكل L", "وسائد مبطنة"],
  },
  {
    id: "p5",
    name: "سرير كينج كلاسيك",
    price: 290000,
    material: "خشب ماهوجني مصري أصيل",
    type: "kingbed",
    categories: ["bed"],
    desc: "سرير كينج بتصميم كلاسيكي فخم من خشب الماهوجني المصري الأصيل مع لوح رأس مزخرف.",
    features: ["ماهوجني مصري أصيل", "مقاس كينج", "نحت تفصيلي يدوي"],
  },
  {
    id: "p6",
    name: "خزانة ملابس إيطالية",
    price: 310000,
    material: "خشب صاج + جلد ومرايا",
    tag: "جديد",
    type: "wardrobe",
    categories: ["bed", "office"],
    desc: "خزانة إيطالية بطابع حديث تجمع بين الخشب الصاج والجلد والمرايا لتخزين أنيق وفاخر.",
    features: ["خشب صاج إيطالي", "أبواب جلد ومرايا", "نظام إضاءة داخلي"],
  },
  {
    id: "p7",
    name: "مكتب تنفيذي دبلوماسي",
    price: 260000,
    material: "بوليستر مطفي + جلد",
    type: "office",
    categories: ["office"],
    desc: "مكتب تنفيذي بخطوط انسيابية وخشب معالج بلمسة مطفية، مع خزائن جانبية مدمجة.",
    features: ["تشطيب مطفي راقٍ", "خزائن جانبية مدمجة", "مقبض برونزي"],
  },
  {
    id: "p8",
    name: "رف مكتبة جدارية",
    price: 95000,
    material: "بلوط فاتح + إضاءة LED",
    tag: "جديد",
    type: "decor",
    categories: ["decor"],
    desc: "مكتبة جدارية عصرية من خشب البلوط الفاتح مع إضاءة LED خافتة تبرز قطعك المفضلة.",
    features: ["بلوط فاتح طبيعي", "إضاءة LED خافتة", "تثبيت جداري متين"],
  },
];

export const PRODUCT_TYPE_ART: Record<string, (w: number, h: number) => string> = {};

export const STATS: { value: number; label: string; suffix?: string }[] = [
  { value: 17, label: "سنة من الخبرة", suffix: "+" },
  { value: 5200, label: "عميل راضٍ", suffix: "+" },
  { value: 234, label: "تصميم فريد", suffix: "+" },
  { value: 3, label: "فروع في العراق" },
];

export const PROMISES: { icon: string; title: string; desc: string }[] = [
  { icon: "shield", title: "جودة مضمونة", desc: "كل منتج مفحوص قبل التسليم" },
  { icon: "truck", title: "توصيل وتركيب", desc: "مجاني داخل بغداد خلال ٥ أيام" },
  { icon: "pen", title: "تصميم مخصص", desc: "نصنع ما يناسب ذوقك ومساحتك" },
  { icon: "badge", title: "ضمان ٥ سنوات", desc: "على جميع قطع الأثاث" },
];

export const TESTIMONIALS: {
  name: string;
  city: string;
  text: string;
  stars: number;
}[] = [
  {
    name: "أحمد الكاظمي",
    city: "بغداد — الكرادة",
    text: "طقم الصالة الذي اشتريته من رشاد هوم تجاوز توقعاتي بكثير. الجودة استثنائية والتوصيل كان في الموعد تماماً.",
    stars: 5,
  },
  {
    name: "سارة الموسوي",
    city: "بغداد — المنصور",
    text: "غرفة النوم التي صمموها لنا بالمقاسات الخاصة كانت رائعة. فريق محترف وخدمة ما بعد البيع ممتازة جداً.",
    stars: 5,
  },
  {
    name: "محمد العبيدي",
    city: "بصرة",
    text: "أفضل أثاث جربته في العراق. الخامات أصلية وكما وصفوها بالضبط. سأتعامل معهم مجدداً بدون تردد.",
    stars: 5,
  },
  {
    name: "نور الرفاعي",
    city: "أربيل",
    text: "الذوق الرفيع يظهر في كل تفصيلة. صمّموا مكتبي التنفيذي ليطابق شخصيتي وكانت النتيجة أفضل مما تخيلت.",
    stars: 5,
  },
  {
    name: "كريم الجبوري",
    city: "بغداد — زيونة",
    text: "تعاملت مع أكثر من معرض، لكن رشاد هوم وحدهم قدّموا عرض سعر شفاف والتزام كامل بالوقت والمواصفات.",
    stars: 5,
  },
];

export const CONTACT_INFO = {
  phone: "+964 770 123 4567",
  phoneHref: "tel:+9647701234567",
  whatsapp: "https://wa.me/9647701234567",
  email: "info@rashadhome.iq",
  address1: "بغداد — الكرادة",
  address2: "بغداد — المنصور",
  hours: "يومياً ٩ صباحاً — ١٠ مساءً",
};

export const FREE_DELIVERY_THRESHOLD = 300000;

export const FOOTER_LINKS: { title: string; links: { label: string; target: string }[] }[] = [
  {
    title: "تصفح",
    links: [
      { label: "الرئيسية", target: "home" },
      { label: "الكولكشن", target: "collection" },
      { label: "الغرف", target: "rooms" },
      { label: "العروض الخاصة", target: "collection" },
    ],
  },
  {
    title: "خدماتنا",
    links: [
      { label: "تصميم مخصص", target: "about" },
      { label: "التوصيل والتركيب", target: "about" },
      { label: "ضمان المنتجات", target: "about" },
      { label: "ما بعد البيع", target: "contact" },
    ],
  },
  {
    title: "تواصل معنا",
    links: [
      { label: "بغداد — الكرادة", target: "contact" },
      { label: "بغداد — المنصور", target: "contact" },
      { label: "+964 770 123 4567", target: "contact" },
      { label: "info@rashadhome.iq", target: "contact" },
    ],
  },
];