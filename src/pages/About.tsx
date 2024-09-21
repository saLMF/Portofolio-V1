import React from "react";
import TabsNavigation from "../components/Tabs";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="px-10 py-10 text-white bg-black"
    >
      {/* Desktop View */}
      <div className="items-start justify-between hidden md:flex">
        {/* Bagian Kiri: Teks "About Me" dan Gambar Profil */}
        <div className="flex flex-col items-center flex-1">
          <h2 className="mb-6 text-6xl font-bold text-center">ABOUT ME</h2>
          <div className="max-w-sm mb-6">
            <img
              src="/Photo.png"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bagian Kanan: Deskripsi, Tombol, dan Kartu */}
        <div className="flex-col items-center flex-1 md:items-start">
          {/* Deskripsi */}
          <p className="mt-20 mb-16 text-xl leading-relaxed">
            Nama saya adalah Faisal Maulud Fajri, seorang siswa SMKN 4 Bandung
            dari kelas industri yang menekuni bidang Rekayasa Perangkat Lunak
            dengan fokus pada pengembangan front-end web. Saya memiliki tekad
            yang kuat untuk terus belajar dan mengasah keterampilan saya demi
            mencapai kesempurnaan. Selalu berusaha untuk menemukan solusi
            terbaik dalam setiap proyek yang saya kerjakan dan memiliki minat
            besar di bidang front-end web.
          </p>

          {/* Tombol Download CV */}
          <a
            href="https://drive.google.com/file/d/1up0nvp0jsV2gakHn57tQf9on3GJZGxwR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 mb-16 text-lg text-white bg-gray-800 rounded-lg shadow-lg hover:bg-gray-600">
              Download CV <i className="fas fa-download"></i>
            </button>
          </a>

          {/* Kartu Experience dan Project */}
          <div className="flex flex-row w-full max-w-lg space-x-4">
            <div className="flex-1 p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="flex-1 p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-xl">Project Created</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center md:hidden">
        <h2 className="mb-6 text-2xl font-bold text-center">ABOUT ME</h2>
        <div className="max-w-md mb-6">
          <img
            src="/Photo.png"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center">
          <p className="mb-8 text-lg leading-relaxed">
            Nama saya adalah Faisal Maulud Fajri, seorang siswa SMKN 4 Bandung
            dari kelas industri yang menekuni bidang Rekayasa Perangkat Lunak
            dengan fokus pada pengembangan front-end web. Saya memiliki tekad
            yang kuat untuk terus belajar dan mengasah keterampilan saya demi
            mencapai kesempurnaan. Selalu berusaha untuk menemukan solusi
            terbaik dalam setiap proyek yang saya kerjakan dan memiliki minat
            besar di bidang front-end web.
          </p>
          <button className="px-6 py-3 mb-8 text-lg text-white bg-gray-800 rounded-lg shadow-lg hover:bg-gray-600">
            Download CV <i className="fas fa-download"></i>
          </button>
        </div>
        <div className="flex flex-col w-full space-y-4">
          <div className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-xl">Years of Experience</p>
          </div>
          <div className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
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
