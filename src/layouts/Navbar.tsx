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
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">FMF</h1>
        <nav>
          <div className="flex space-x-4">
            <div>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:underline text-white"
              >
                Home
              </button>
            </div>
            <div>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:underline text-white"
              >
                About
              </button>
            </div>
            <div>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:underline text-white"
              >
                Projects
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
