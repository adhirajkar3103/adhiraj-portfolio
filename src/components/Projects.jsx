import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <div className="w-full h-full text-white py-20 flex flex-col justify-center">
      <h1 className="text-center text-5xl font-semibold">PROJECTS</h1>
      <div className="grid grid-cols-3 py-10 gap-5 px-10">
        {projects.map((project) => {
          return (
            <div
              className="md:col-span-1 col-span-3 flex justify-center"
              key={project.link}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}

        {/* <div className="md:col-span-1 col-span-3 flex justify-center">
          <ProjectCard />
        </div>
        <div className="md:col-span-1 col-span-3 flex justify-center">
          <ProjectCard />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
