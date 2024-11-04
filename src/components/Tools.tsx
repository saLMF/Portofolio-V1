import {useState} from "react";

interface ToolItem {
  name: string;
  icon: string;
  subtitle: string;
}

const DevTools = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toolItems: ToolItem[] = [
    {
      name: "GitHub",
      icon: "/images/Github.png",
      subtitle: "Code Repo",
    },
    {
      name: "XAMPP",
      icon: "/images/XAMPP.png",
      subtitle: "PHP Tools",
    },
    {
      name: "npm",
      icon: "/images/Npm.png",
      subtitle: "Package Manager",
    },
    {
      name: "Git",
      icon: "/images/Git.png",
      subtitle: "Version Control",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 px-4 mx-auto md:grid-cols-4 max-w-7xl">
      {toolItems.map((tool, index) => (
        <div
          key={index}
          className="p-4 transition-all duration-300 bg-black border rounded-lg cursor-pointer border-yellow-500/30 hover:border-yellow-500"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="flex items-center gap-4">
            <img
              src={tool.icon}
              alt={`${tool.name} icon`}
              className="object-contain w-10 h-10"
            />
            <div>
              <p className="text-lg font-medium text-white">{tool.name}</p>
              <div
                className={`transition-all duration-300
                  ${
                    hoveredItem === index
                      ? "max-h-8 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-sm text-yellow-500">{tool.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevTools;
