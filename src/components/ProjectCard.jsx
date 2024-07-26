const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="__blank"
      className="border-[1px] border-white rounded-lg p-5 w-full flex flex-col items-center gap-3 hover:bg-slate-900"
    >
      <img src={project.thumbnail} alt="" className="rounded-lg h-52 w-96" />
      <p className=" text-xl">{project.name}</p>
    </a>
  );
};

export default ProjectCard;
