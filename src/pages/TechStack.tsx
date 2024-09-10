import {useState} from "react";

// Definisikan tipe untuk item di tech stack
interface TechStackItem {
  name: string;
  icon: string;
  description: string;
}

const TechStack = () => {
  const techStackItems: TechStackItem[] = [
    {
      name: "HTML",
      icon: "/html.png",
      description:
        "Saya cukup memahami code-code nya karna ini bahasa dasar dari pembelajaran pemrograman.",
    },
    {
      name: "CSS",
      icon: "/css.png",
      description:
        "Sama seperti HTML, CSS merupakan dasar dengan perbedaan digunakan dalam desain.",
    },
    {
      name: "JavaScript",
      icon: "/js.png",
      description:
        "Saya cukup memahami javascript untuk pengaplikasian bagian backend.",
    },
    {
      name: "Tailwind CSS",
      icon: "/TailwindCSS.png",
      description:
        "Tailwind memiliki kesamaan seperti CSS yang bisa dilihat dari namanya dan framework ini cukup dimengerti oleh saya.",
    },
    {
      name: "ReactTS",
      icon: "/react.png",
      description:
        "React cukup saya pahami karena kebanyakan project yang saya kerjakan menggunakan frameweok terbaru ini.",
    },
    {
      name: "Python",
      icon: "/Python.png",
      description:
        "Python merupakan bahasa pemrograman yang pertama kali saya pelajari dan ini cukup mudah untuk pemula karena bahasanya yang simpel.",
    },
    // {
    //   name: "Bootstrap",
    //   icon: "/bootstrap.png",
    //   description:
    //     "Bootstrap adalah framework CSS yang dirancang untuk memudahkan pembuatan tampilan website yang responsif dan menarik. Dengan komponen siap pakai seperti tombol, form, dan navbar, Bootstrap sangat membantu pemula untuk membuat desain yang bagus tanpa perlu menulis banyak kode CSS kustom.",
    // },
    // {
    //   name: "Vite",
    //   icon: "/Vite.js.png",
    //   description:
    //     "Vite adalah alat build yang sangat cepat untuk pengembangan aplikasi frontend. Dengan Vite, pemula bisa dengan mudah mengatur lingkungan pengembangan proyek JavaScript atau framework frontend seperti React dan Vue, serta mendukung pengembangan yang lebih cepat.",
    // },
    // {
    //   name: "Vercel",
    //   icon: "/Vercel.png",
    //   description:
    //     "Vercel adalah platform yang memudahkan proses deployment situs web, terutama untuk framework frontend dan situs statis. Bagi pemula, Vercel sangat berguna karena memungkinkan Anda meng-host proyek web dengan cepat dan gratis, serta mendukung integrasi dengan berbagai layanan seperti GitHub.",
    // },
  ];

  // Tentukan bahwa state selectedTech adalah TechStackItem atau null
  const [selectedTech, setSelectedTech] = useState<TechStackItem | null>(null);

  const handleTechClick = (tech: TechStackItem) => {
    setSelectedTech(tech);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {techStackItems.map((tech, index) => (
          <div
            key={index}
            onClick={() => handleTechClick(tech)}
            className="bg-[#1e1e1e] p-4 rounded-lg flex flex-col items-center text-center text-white shadow-lg cursor-pointer"
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
      {selectedTech && (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{selectedTech.name}</h2>
          <p>{selectedTech.description}</p>
        </div>
      )}
    </div>
  );
};

export default TechStack;
