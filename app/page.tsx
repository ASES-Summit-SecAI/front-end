import Navbar from "./components/Navbar";
import HeroGraph from "./components/HeroGraph";
import Solution from "./components/Solution";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F5F5F7] text-black min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <Navbar />
      <HeroGraph />
      <CTA />
      <Solution />
      <Footer />
    </main>
  );
}
