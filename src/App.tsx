import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./components/ContactForm";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
