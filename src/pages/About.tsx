import React, {useEffect} from "react";
import TabsNavigation from "../components/Tabs";
import {Download} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  const handleDownload = (): void => {
    const fileUrl =
      "https://drive.google.com/file/d/1Cp2pUMJX5KEt9r9pdRgkQwjPQkojg96V/view?usp=drive_link";
    window.open(fileUrl, "_blank");
  };

  const DownloadButton: React.FC = () => (
    <button
      onClick={handleDownload}
      className="flex items-center justify-center gap-2 px-6 py-3 mb-16 text-lg text-white transition-colors duration-200 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-600 active:bg-gray-900 touch-manipulation"
      data-aos="fade-up"
    >
      <span>Download CV</span>
      <Download className="w-5 h-5" />
    </button>
  );

  return (
    <section
      id="about"
      className="relative px-10 py-10 text-white bg-black"
    >
      {/* Top Wave Connection */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-full h-[150px]"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#aboutGradient)"
            fillOpacity="1"
            d="M0,128L40,154.7C80,181,160,235,240,234.7C320,235,400,181,480,181.3C560,181,640,235,720,213.3C800,192,880,96,960,85.3C1040,75,1120,149,1200,160C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,128L40,154.7C80,181,160,235,240,234.7C320,235,400,181,480,181.3C560,181,640,235,720,213.3C800,192,880,96,960,85.3C1040,75,1120,149,1200,160C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z;
                M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,144C560,171,640,213,720,213.3C800,213,880,171,960,176C1040,181,1120,235,1200,234.7C1280,235,1360,181,1400,154.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z;
                M0,128L40,154.7C80,181,160,235,240,234.7C320,235,400,181,480,181.3C560,181,640,235,720,213.3C800,192,880,96,960,85.3C1040,75,1120,149,1200,160C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            />
          </path>
          <defs>
            <linearGradient
              id="aboutGradient"
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

      {/* Rest of the AboutMe content remains the same */}
      <div
        className="items-start justify-between hidden md:flex"
        data-aos="fade-up"
      >
        {/* Left Side Content */}
        <div className="flex flex-col items-center flex-1">
          <h2 className="mb-6 text-6xl font-bold text-center">ABOUT ME</h2>
          <div className="max-w-sm mb-6">
            <img
              src="/images/Photo.png"
              alt="Profile"
              className="rounded-lg shadow-lg"
              data-aos="fade-up"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div
          className="flex-col items-center flex-1 md:items-start"
          data-aos="fade-up"
        >
          <p className="mt-20 mb-16 text-xl leading-relaxed">
            Nama saya adalah Faisal Maulud Fajri, seorang siswa SMKN 4 Bandung
            dari kelas industri yang menekuni bidang Rekayasa Perangkat Lunak
            dengan fokus pada pengembangan front-end web. Saya memiliki tekad
            yang kuat untuk terus belajar dan mengasah keterampilan saya demi
            mencapai kesempurnaan. Selalu berusaha untuk menemukan solusi
            terbaik dalam setiap proyek yang saya kerjakan dan memiliki minat
            besar di bidang front-end web.
          </p>
          <DownloadButton />
          <div className="flex flex-row w-full max-w-lg space-x-4">
            <div
              className="flex-1 p-6 text-center text-white rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-sm"
              data-aos="fade-up"
            >
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div
              className="flex-1 p-6 text-center text-white rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-sm"
              data-aos="fade-up"
            >
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-xl">Project Created</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center md:hidden">
        {/* Mobile content remains the same */}
        <h2
          className="mb-6 text-2xl font-bold text-center"
          data-aos="fade-up"
        >
          ABOUT ME
        </h2>
        <div className="max-w-md mb-6">
          <img
            src="/images/Photo.png"
            alt="Profile"
            className="rounded-lg shadow-lg"
            data-aos="fade-up"
          />
        </div>
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <p className="mb-8 text-lg leading-relaxed">
            Nama saya adalah Faisal Maulud Fajri, seorang siswa SMKN 4 Bandung
            dari kelas industri yang menekuni bidang Rekayasa Perangkat Lunak
            dengan fokus pada pengembangan front-end web. Saya memiliki tekad
            yang kuat untuk terus belajar dan mengasah keterampilan saya demi
            mencapai kesempurnaan. Selalu berusaha untuk menemukan solusi
            terbaik dalam setiap proyek yang saya kerjakan dan memiliki minat
            besar di bidang front-end web.
          </p>

          {/* Download CV Button for Mobile */}
          <button
            onClick={handleDownload}
            className="flex items-center justify-center w-full gap-2 px-6 py-3 mb-8 text-lg text-white transition-colors duration-200 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-600 active:bg-gray-900 touch-manipulation"
            data-aos="fade-up"
          >
            <span>Download CV</span>
            <Download className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col w-full space-y-4">
          <div
            className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-xl">Years of Experience</p>
          </div>
          <div
            className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-xl">Project Created</p>
          </div>
        </div>
      </div>
      <div
        className="w-full mt-10"
        data-aos="fade-up"
      >
        <TabsNavigation />
      </div>
    </section>
  );
};

export default AboutMe;
