const Project = ({ proj, projects }: any) => {
  return (
    <div
      className="overflow-hidden cursor-pointer duration-300 hover:scale-105 rounded-lg shadow-xl shadow-neutral-400 bg-neutral-200"
      data-aos="flip-right"
    >
      <a href={proj.link} target="_blank">
        <img
          src={proj.img}
          alt="web image"
          className="h-52 w-full object-cover object-center"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{proj.title}</h3>
          <h4>{proj.desc}</h4>
        </div>
        <hr className="border-neutral-300 border-b-2 block" />
        <div className="flex justify-start gap-2 items-center p-4">
          {projects.map((project: any, index: number) => {
            return (
              <img
                src={project?.src}
                alt={project.id}
                key={index}
                className="w-8 cursor-pointer"
                title={project.title}
              />
            );
          })}
        </div>
      </a>
    </div>
  );
};

export default Project;
