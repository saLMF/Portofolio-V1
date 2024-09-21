import React from "react";
import Typewriter from "../components/Typewriter";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-between h-screen px-10 overflow-hidden text-white bg-black"
    >
      <div className="flex-1 text-center">
        <h5 className="text-[#a6adba] text-2xl">Hello There 👋</h5>
        <h1 className="md:text-6xl text-4xl text-[#ced4d7] font-bold mb-2 pr-[1%]">
          I’m Faisal Maulud Fazry
        </h1>
        <p className="text-[#a6adba] text-xl">
          <Typewriter texts={["Front-End Developer ", "Student "]} />
        </p>
      </div>
      <div className="flex justify-center flex-1">
        <img
          src="/icon.png"
          alt="Coding Illustration"
          className="w-full max-w-sm"
        />
      </div>
    </section>
  );
};

export default Home;
