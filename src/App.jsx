import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlight";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
