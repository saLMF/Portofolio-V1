import {useState} from "react";

interface TechStackItem {
  name: string;
  icon: string;
  subtitle: string;
}

const TechStack = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const techStackItems: TechStackItem[] = [
    {
      name: "HTML",
      icon: "/images/html.png",
      subtitle: "Intermediate",
    },
    {
      name: "CSS",
      icon: "/images/css.png",
      subtitle: "Intermediate",
    },
    {
      name: "PHP",
      icon: "/images/Php.png",
      subtitle: "Beginner",
    },
    {
      name: "Javascript",
      icon: "/images/JS.png",
      subtitle: "Beginner",
    },
    {
      name: "Python",
      icon: "/images/Python.png",
      subtitle: "Beginner",
    },
    {
      name: "Tailwind",
      icon: "/images/TailwindCSS.png",
      subtitle: "Beginner",
    },
    {
      name: "Bootstrap",
      icon: "/images/bootstrap.png",
      subtitle: "Beginner",
    },
    {
      name: "React",
      icon: "/images/React.png",
      subtitle: "Beginner",
    },
    {
      name: "Node Js",
      icon: "/images/Node.png",
      subtitle: "Beginner",
    },
    {
      name: "Vue",
      icon: "/images/Vue.png",
      subtitle: "Beginner",
    },
    {
      name: "MySql",
      icon: "/images/Mysql.png",
      subtitle: "Beginner",
    },
  ];

  return (
    <div>
      <div className="grid max-w-5xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
        {techStackItems.map((tech, index) => (
          <div
            key={index}
            className="p-4 transition-all duration-300 bg-black border rounded-lg cursor-pointer border-yellow-500/30 hover:border-yellow-500"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-4">
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="object-contain w-10 h-10"
              />
              <div>
                <p className="text-lg font-medium text-white">{tech.name}</p>
                <div
                  className={`transition-all duration-300
                    ${
                      hoveredItem === index
                        ? "max-h-8 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-sm text-yellow-500">{tech.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
