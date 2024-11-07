import React, {useEffect} from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.9,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="text-white bg-black">
      <Navbar />
      <Home />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
