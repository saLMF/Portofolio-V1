import React from "react";
import Typewriter from "../components/Typewriter";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-between h-screen overflow-hidden bg-[#89CFF0]"
    >
      {/* Gradient Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 w-full h-auto"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#homeGradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
          <defs>
            <linearGradient
              id="homeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#6B46C1"
              />{" "}
              {/* Grape */}
              <stop
                offset="50%"
                stopColor="#9F7AEA"
              />{" "}
              {/* Medium Purple */}
              <stop
                offset="100%"
                stopColor="#E9D5FF"
              />{" "}
              {/* Lavender */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full h-full px-6 md:px-10">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h5
            className="text-2xl text-white/90"
            data-aos="fade-up"
          >
            Hello There 👋
          </h5>
          <h1
            className="mb-2 text-4xl font-bold text-white md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I'm Faisal Maulud Fazry
          </h1>
          <p
            className="text-xl text-white/90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Typewriter texts={["Front-End Developer ", "Student "]} />
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          className="items-center justify-center flex-1 hidden md:flex"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src="/images/bg.png"
            alt="Coding Illustration"
            className="w-full max-w-sm drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
