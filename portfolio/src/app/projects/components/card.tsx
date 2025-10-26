// components/ProjectCard.tsx
import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, techStack, url }) => {
  return (
    <Link href={`/projects/${url}`} >
    <div className="bg-[var(--surface)] rounded-lg shadow-md overflow-hidden border border-gray-300 hover:border-[var(--accent)] transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[var(--text)] mb-2">{title}</h3>
        <p className="text-[var(--text-muted)] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-[var(--bg)] text-[var(--text)] text-xs font-medium px-2 py-1 rounded border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
