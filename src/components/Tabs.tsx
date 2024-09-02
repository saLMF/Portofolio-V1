import {useState} from "react";
import Projects from "../pages/Projects";
import TechStack from "./TechStack";

const TabsNavigation = () => {
  const [activeTab, setActiveTab] = useState("Project");

  return (
    <div>
      <div
        id="projects"
        className="flex justify-center space-x-4 text-white mt-5"
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
      </div>

      <div className="mt-8">
        {activeTab === "Project" && <Projects />}
        {activeTab === "Tech Stack" && <TechStack />}
      </div>
    </div>
  );
};

export default TabsNavigation;
