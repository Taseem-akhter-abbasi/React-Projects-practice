import React from "react";
import login from '../assets/loginModel.mp4';
import responsive from  '../assets/dosra.mp4';
import shopping from '../assets/shopping.mp4';

const projects = [
  {
    id: 1,
    name: "Login Model",
    technologies: "React js",
    image: login,
    github: "https://github.com/Taseem-akhter-abbasi/jugnoo.git",
  },
  {
    id: 2,
    name: "WsCube website",
    technologies: "React js",
    image: responsive,
    github: "https://github.com/Taseem-akhter-abbasi/jugnoo.git",
  },
  {
    id: 3,
    name: "Shopping Cart",
    technologies: "React js",
    image: shopping,
    github: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  return (
    <div id="projec" className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <video 
              src={project.image} 
              className="rounded-lg mb-4 w-full h-48 object-cover" 
              controls 
              autoPlay
              muted
              ></video>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;