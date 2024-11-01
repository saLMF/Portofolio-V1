import React, {useState, useEffect} from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    setIsScrolled(currentScrollPos > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-lg text-white shadow-lg"
          : "bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Container dengan padding yang berbeda untuk mobile dan desktop */}
      <div className="container px-6 mx-auto sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">FMF</h1>
          <nav className="px-2">
            {/* Desktop Menu */}
            <div className="hidden md:flex md:space-x-8">
              <NavButton
                label="Home"
                onClick={() => scrollToSection("home")}
              />
              <NavButton
                label="About"
                onClick={() => scrollToSection("about")}
              />
              <NavButton
                label="Contact"
                onClick={() => scrollToSection("contact")}
              />
            </div>
            {/* Mobile Menu */}
            <div className="flex md:hidden">
              <NavButton
                label="Home"
                onClick={() => scrollToSection("home")}
              />
              <NavButton
                label="About"
                onClick={() => scrollToSection("about")}
              />
              <NavButton
                label="Contact"
                onClick={() => scrollToSection("contact")}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Komponen Button yang dapat digunakan kembali
const NavButton: React.FC<{label: string; onClick: () => void}> = ({
  label,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="px-2 py-1 text-sm text-white transition-all duration-200 rounded-lg md:text-base hover:bg-white/10 hover:underline"
  >
    {label}
  </button>
);

export default Navbar;
