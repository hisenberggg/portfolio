// components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, techStack, url }) => {
  return (
    <a href={url} target='_blank'>
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
