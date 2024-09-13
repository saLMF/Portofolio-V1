import React from "react";

// Definisikan tipe data untuk Project
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  projectLink: string;
}

// Komponen Card untuk Project
const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageUrl,
  techStack,
  projectLink,
}) => {
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg text-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech: string, index: number) => (
          <span
            key={index}
            className="bg-gray-700 text-sm px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={projectLink}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

// Data Projects
const projects: Project[] = [
  {
    title: "Eredit",
    description:
      "Ini merupakan project website yang dibuat saat kelas 11 dan terinspirasi dari reddit dengan versi yang bisa diakses oleh orang indonesia.",
    imageUrl: "/Project1.jpg",
    techStack: ["React", "Chakra", "TailwindCSS"],
    projectLink: "https://eredit.vercel.app/",
  },
  {
    title: "Web Class",
    description:
      "Website ini dibuat saat kelas 11, website ini khusus digunakan oleh siswa RPL3 agar bisa mengenang kegiatan dan melihat jadwal mata pelajaran atau piket.",
    imageUrl: "/Project2.jpg",
    techStack: ["React", "JavaScript", "Tailwind", "CSS"],
    projectLink: "https://xii-rpl3.vercel.app/",
  },
  {
    title: "Smart Attendance",
    description:
      "Project ini masih dalam tahap pengembangan dan kita akan update lagi bila sudah selesai.",
    imageUrl: "/Project3.jpg",
    techStack: ["React", "Typescript", "Tailwind", "CSS"],
    projectLink: "",
  },
  {
    title: "Movie List",
    description:
      "Ini project pertama saat kelas 10 yang diberikan oleh LearningX menggunakan Python untuk membuat list favorit movie dan list Imdb dengan realtime.",
    imageUrl: "/Project5.jpg",
    techStack: ["HTML", "CSS", "Python"],
    projectLink: "",
  },
  {
    title: "Land Mars",
    description:
      "Project kedua LearningX yang mengajarkan MongoDB untuk BackEnd agar saat membeli tanah di mars kita bisa melihat siapa saja orang yang sudah membelinya.",
    imageUrl: "/Project6.jpg",
    techStack: ["HTML", "CSS", "Python"],
    projectLink: "",
  },
  {
    title: "FanBook",
    description:
      "Memberikan support kepada idol yang dikagumi dan ini bisa memperlihatkan temperatur suhu panas atau dinginnya cuaca secara realtime.",
    imageUrl: "/Project7.jpg",
    techStack: ["HTML", "CSS", "Python"],
    projectLink: "",
  },
  {
    title: "Personal Diary",
    description:
      "Pengganti diary yang biasa dari notebook berpindah ke gadget (website) agar lebih up-to-date.",
    imageUrl: "/Project8.jpg",
    techStack: ["HTML", "CSS", "Python"],
    projectLink: "",
  },
  {
    title: "Bucket List",
    description:
      "Project ini dibuat untuk kebutuhan list yang diinginkan seperti barang ataupun liburan.",
    imageUrl: "/Project9.jpg",
    techStack: ["HTML", "CSS", "Python"],
    projectLink: "",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="container mx-auto p-4"
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
