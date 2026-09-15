import { AppProvider } from "@/context";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Categories } from "@/components/Categories";
import { Rooms } from "@/components/Rooms";
import { Collection } from "@/components/Collection";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductModal } from "@/components/ProductModal";
import { Toasts } from "@/components/Toasts";
import { Floats } from "@/components/Floats";

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(720px circle at 15% -10%, rgba(214,192,150,0.16) 0%, rgba(214,192,150,0) 60%), radial-gradient(620px circle at 105% 12%, rgba(173,129,71,0.12) 0%, rgba(173,129,71,0) 55%), radial-gradient(700px circle at 0% 105%, rgba(214,192,150,0.1) 0%, rgba(214,192,150,0) 55%)",
        }}
      />
    </div>
  );
}

function Shell() {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen overflow-x-clip text-ink-900"
    >
      <Background />

      <Navbar />
      <CartDrawer />
      <ProductModal />
      <Toasts />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Categories />
        <Rooms />
        <Collection />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Floats />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}