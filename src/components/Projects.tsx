import { Icons } from "../helpers/helpers";

const Projects = () => {
  const projs = [
    {
      title: "Code Glitch",
      img: "/hero-image.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat, animi.",
      techs: ["html", "css", "javascript", "react", "nodejs", "mongodb"],
    },
    {
      title: "Today Electricians",
      img: "/hero-image.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat, animi.",
      techs: ["html", "css", "javascript", "react", "tailwind"],
    },
    {
      title: "Today Electricians",
      img: "/hero-image.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat, animi.",
      techs: ["html", "css", "javascript", "react", "tailwind"],
    },
    {
      title: "Today Electricians",
      img: "/hero-image.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat, animi.",
      techs: ["html", "css", "javascript", "react", "tailwind"],
    },
    {
      title: "Today Electricians",
      img: "/hero-image.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat, animi.",
      techs: ["html", "css", "javascript", "react", "tailwind"],
    },
  ];

  return (
    <section>
      <div className="container px-14 py-28" id="projects">
        <h2 className="text-green-700 font-bold text-2xl pb-4 uppercase tracking-[0.2em]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projs.map((proj, index) => {
            const projects = Icons.filter((project) => {
              return proj.techs.includes(project.id);
            });
            return (
              <div
                className="overflow-hidden cursor-pointer duration-300 hover:scale-105 rounded-lg shadow-xl shadow-neutral-400 bg-neutral-100"
                key={index}
                data-aos="flip-right"
              >
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
                  {projects.map((project, index) => {
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
