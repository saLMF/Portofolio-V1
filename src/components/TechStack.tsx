const TechStack = () => {
  const techStackItems = [
    {name: "HTML", icon: "/public/html.png"},
    {name: "CSS", icon: "/public/css.png"},
    {name: "JavaScript", icon: "/public/js.png"},
    {name: "Tailwind CSS", icon: "/public/TailwindCSS.png"},
    {name: "ReactTS", icon: "/public/react.png"},
    {name: "Python", icon: "/public/Python.png"},
    {name: "Bootstrap", icon: "/public/bootstrap.png"},
    {name: "Vite", icon: "/public/Vite.js.png  "},
    {name: "Vercel", icon: "/public/Vercel.png"},
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
