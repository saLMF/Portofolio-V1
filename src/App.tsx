import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default App;
