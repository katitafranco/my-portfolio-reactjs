import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  link,
}) => {
  return (
    <div className="relative group w-80 h-56 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
      {/* Imagen de fondo */}
      <img
        src={image}
        alt={`${title} preview`}
        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center text-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
