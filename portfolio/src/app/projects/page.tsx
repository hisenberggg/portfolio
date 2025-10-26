import ProjectCard from "./components/card";

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import Link from 'next/link';

interface Proj {
  slug: string;
  title: string;
  techStack: string[];
  description: string;
  imagepath:string;
}

const getProjs = (): Proj[] => {
  const postsDirectory = path.join(process.cwd(), 'src/app/projects/projs');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(/\.mdx?$/, ''),
    } as Proj;
  });
};


const ProjectsPage = () => {
  const projects = getProjs();

  return (
    <div className="container mx-auto p-4 pt-24">
       <h1 className="text-3xl font-bold text-[var(--text)] mb-8">Projects</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
         {projects.map((project, index) => (
           <ProjectCard
             key={index}
             image={project.imagepath}
             title={project.title}
             description={project.description}
             techStack={project.techStack}
             url={project.slug}
           />
         ))}
      </div>
      <p className="text-[var(--text-muted)]">Data migration in progress...</p>
    </div>
  );
};

export default ProjectsPage;

// const Projects = () => {
//   const projects = [
//     {
//       image: 'images/smartdoorlock.png', 
//       title: 'Smart Door Lock system',
//       description: "Developed a door lock system enabled with facial recognition and live voice assistant support.",
//       techStack: ['Python', 'OpenCV', 'NLTK'],
//       url: '/projects/sdl',
//     },
//     {
//       image: 'images/innovex.png', 
//       title: 'Innovex - Project exhibition',
//       description: "Developed an online project exhibition platform for showcasing final year projects at DBIT during the covid times. view site: innovex.dbit.in",
//       techStack: ['Django', 'OAuth', 'AWS EC2'],
//       url: '/projects/innovex'
//     },
//     {
//       image: 'images/kartme.png', 
//       title: 'Kartme - Ecommerce website',
//       description: "Developed a easy setup template for building ecommerce apps.",
//       techStack: ['Django', 'Bootstrap', 'Database modelling'],
//       url: '/projects/kartme'
//     },
//     // {
//     //   image: 'images/kartme.png', 
//     //   title: 'Kartme - Ecommerce website',
//     //   description: "Developed a easy setup template for building ecommerce apps.",
//     //   techStack: ['Django', 'Bootstrap', 'Database modelling'],
//     //   url: '/projects/kartme'
//     // },

//     // Add more projects here
//   ];
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             image={project.image}
//             title={project.title}
//             description={project.description}
//             techStack={project.techStack}
//             url={project.url}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Projects;
