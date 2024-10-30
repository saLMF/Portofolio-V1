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
        className="object-cover w-full h-40 mb-4 rounded-md"
      />
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech: string, index: number) => (
          <span
            key={index}
            className="px-2 py-1 text-sm bg-gray-700 rounded-md"
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
    techStack: ["React", "Chakra", "TailwindCSS", "NextJS"],
    projectLink: "https://eredit.vercel.app/",
  },
  {
    title: "Web Class",
    description:
      "Website ini dibuat saat kelas 11, website ini khusus digunakan oleh siswa RPL3 agar bisa mengenang kegiatan dan melihat jadwal mata pelajaran atau piket.",
    imageUrl: "/Project2.jpg",
    techStack: ["React", "JavaScript", "TailwindCSS"],
    projectLink: "https://xii-rpl3.vercel.app/",
  },
  {
    title: "Smart Attendance",
    description:
      "Pada kelas 3 ini atau kelas 12, kita membuat aplikasi untuk absensi kepada perusahaan-perusahaan agar lebih efesiensi waktu.",
    imageUrl: "/Project3.jpg",
    techStack: ["React", "Typescript", "TailwindCSS"],
    projectLink: "https://smart-att.curaweda.com/",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="container p-4 mx-auto"
    >
      <h2 className="mb-4 text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
