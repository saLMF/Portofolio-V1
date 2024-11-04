import {useState} from "react";
import Projects from "./Projects";
import TechStack from "./TechStack";
import DevTools from "./Tools";

const TabsNavigation = () => {
  const [activeTab, setActiveTab] = useState("Project");

  return (
    <div>
      <div
        id="projects"
        className="flex justify-center mt-5 space-x-4 text-white"
      >
        <button
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            activeTab === "Project"
              ? "bg-purple-700 text-white shadow-lg transform scale-105"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("Project")}
        >
          PROJECT
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            activeTab === "Tech Stack"
              ? "bg-purple-700 text-white shadow-lg transform scale-105"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("Tech Stack")}
        >
          TECH STACK
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            activeTab === "Tools"
              ? "bg-purple-700 text-white shadow-lg transform scale-105"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("Tools")}
        >
          TOOLS
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "Project" && <Projects />}
        {activeTab === "Tech Stack" && <TechStack />}
        {activeTab === "Tools" && <DevTools />}
      </div>
    </div>
  );
};

export default TabsNavigation;
