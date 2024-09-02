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
      "Ini merupakan website yang terinspirasi dari reddit, dengan versi yang bisa diakses.",
    imageUrl: "/public/Project1.jpg",
    techStack: ["React", "Chakra", "TailwindCSS"],
    projectLink: "https://eredit.vercel.app/",
  },
  {
    title: "Web Class",
    description:
      "Website ini dibuat khusus untuk anak kelas XII-RPL-3 agar bisa mengenang kegiatannya atau untuk melihat jadwal.",
    imageUrl: "/public/Project2.jpg",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    projectLink: "https://xii-rpl3.vercel.app/",
  },
];

// Komponen Utama Projects
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
