const TechStack = () => {
  const techStackItems = [
    {name: "HTML", icon: "/html.png"},
    {name: "CSS", icon: "/css.png"},
    {name: "JavaScript", icon: "/js.png"},
    {name: "Tailwind CSS", icon: "/TailwindCSS.png"},
    {name: "ReactTS", icon: "/react.png"},
    {name: "Python", icon: "/Python.png"},
    {name: "Bootstrap", icon: "/bootstrap.png"},
    {name: "Vite", icon: "/Vite.js.png  "},
    {name: "Vercel", icon: "/Vercel.png"},
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {techStackItems.map((tech, index) => (
        <div
          key={index}
          className="bg-[#1e1e1e] p-4 rounded-lg flex flex-col items-center text-center text-white shadow-lg"
        >
          <img
            src={tech.icon}
            alt={`${tech.name} icon`}
            className="w-16 h-16 mb-2"
          />
          <p className="text-lg font-semibold">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
