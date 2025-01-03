// src/components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-lightGray">
    <img className="w-full" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-wine font-bold hover:underline"
      >
        View Project
      </a>
    </div>
  </div>
);

export default ProjectCard;
