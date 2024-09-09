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
        "HTML (HyperText Markup Language) adalah bahasa markup standar yang digunakan untuk membuat struktur dasar sebuah halaman web. HTML menentukan elemen-elemen seperti teks, gambar, tautan, dan lainnya. Bagi pemula, HTML adalah fondasi utama dalam pembuatan website, dan cukup mudah dipelajari karena sintaksnya sederhana.",
    },
    {
      name: "CSS",
      icon: "/css.png",
      description:
        "CSS (Cascading Style Sheets) digunakan untuk mengatur tata letak dan tampilan halaman web, seperti warna, font, ukuran, dan posisi elemen. CSS membantu memisahkan konten dari presentasi, sehingga membuat tampilan website lebih menarik. Pemula perlu belajar CSS untuk memahami bagaimana tampilan visual diatur di halaman web.",
    },
    {
      name: "JavaScript",
      icon: "/js.png",
      description:
        "JavaScript adalah bahasa pemrograman yang berfungsi untuk menambahkan interaktivitas pada halaman web, seperti membuat tombol berfungsi, menampilkan animasi, atau melakukan validasi form. JavaScript penting bagi pemula yang ingin membuat website dinamis dan interaktif. JavaScript sering digunakan bersama HTML dan CSS.",
    },
    {
      name: "Tailwind CSS",
      icon: "/TailwindCSS.png",
      description:
        "Tailwind CSS adalah framework CSS berbasis utilitas yang memungkinkan Anda membuat desain tanpa harus menulis CSS dari awal. Tailwind menyediakan kelas-kelas siap pakai untuk mengatur layout, warna, dan tipografi. Untuk pemula, Tailwind CSS memudahkan dalam membuat desain yang fleksibel dan efisien, tanpa harus paham CSS mendalam.",
    },
    {
      name: "ReactTS",
      icon: "/react.png",
      description:
        "ReactTS adalah pustaka JavaScript untuk membangun antarmuka pengguna, namun menggunakan TypeScript sebagai bahasa dasarnya. TypeScript menambahkan tipe data yang lebih aman di atas JavaScript. Pemula yang sudah familiar dengan JavaScript dapat mulai mempelajari React dan TypeScript untuk membangun aplikasi web modern yang lebih terstruktur.",
    },
    {
      name: "Python",
      icon: "/Python.png",
      description:
        "Python adalah bahasa pemrograman yang sangat populer karena sintaksnya yang sederhana dan mudah dipahami. Python digunakan untuk berbagai keperluan seperti pengembangan web, analisis data, kecerdasan buatan, dan banyak lagi. Bagi pemula, Python adalah pilihan yang bagus untuk belajar pemrograman pertama kali karena mudah dipelajari dan digunakan.",
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
