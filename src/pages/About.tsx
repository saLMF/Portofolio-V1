import React from "react";
import TabsNavigation from "../components/Tabs";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-10 px-10"
    >
      {/* Desktop View */}
      <div className="hidden md:flex items-start justify-between">
        {/* Bagian Kiri: Teks "About Me" dan Gambar Profil */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-6xl font-bold mb-6 text-center">ABOUT ME</h2>
          <div className="mb-6 max-w-md">
            <img
              src="/Photo.png"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bagian Kanan: Deskripsi, Tombol, dan Kartu */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Deskripsi */}
          <p className="text-xl leading-relaxed mb-16">
            Saya adalah Faisal Maulud Fajri, seorang siswa yang menekuni bidang
            Rekayasa Perangkat Lunak dengan fokus pada pengembangan front-end
            web. Saya memiliki tekad yang kuat untuk terus belajar dan mengasah
            keterampilan saya demi mencapai kesempurnaan. Selalu berusaha untuk
            menemukan solusi terbaik dalam setiap proyek yang saya kerjakan dan
            memiliki minat besar di bidang front-end web.
          </p>

          {/* Tombol Download CV */}
          <button className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 text-lg mb-16">
            Download CV <i className="fas fa-download"></i>
          </button>

          {/* Kartu Experience dan Project */}
          <div className="flex flex-row space-x-4 w-full max-w-lg">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center flex-1">
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center flex-1">
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-xl">Project Created</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center md:hidden">
        <h2 className="text-4xl font-bold mb-6 text-center">ABOUT ME</h2>
        <div className="mb-6 max-w-md">
          <img
            src="/Photo.png"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center">
          <p className="text-lg leading-relaxed mb-8">
            Saya adalah Faisal Maulud Fajri, seorang siswa yang menekuni bidang
            Rekayasa Perangkat Lunak dengan fokus pada pengembangan front-end
            web. Saya memiliki tekad yang kuat untuk terus belajar dan mengasah
            keterampilan saya demi mencapai kesempurnaan. Selalu berusaha untuk
            menemukan solusi terbaik dalam setiap proyek yang saya kerjakan dan
            memiliki minat besar di bidang front-end web.
          </p>
          <button className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 text-lg mb-8">
            Download CV <i className="fas fa-download"></i>
          </button>
        </div>
        <div className="w-full flex flex-col space-y-4">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-xl">Years of Experience</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-xl">Project Created</p>
          </div>
        </div>
      </div>

      {/* Add the TabsNavigation component here */}
      <div className="w-full mt-10">
        <TabsNavigation />
      </div>
    </section>
  );
};

export default AboutMe;
