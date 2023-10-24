import { Icons } from "../helpers/helpers";

const Projects = () => {
  const projs = [
    {
      title: "Code Glitch",
      img: "/projects/codeglitch.jpg",
      desc: "Code Glitch is a multipage portfolio and blog website for blog posting.",
      techs: ["html", "react", "nextjs", "mongodb", "tailwind"],
      link: "https://www.codesglitch.com/",
    },
    {
      title: "Today Electricians",
      img: "/projects/todayelectricians.jpg",
      desc: "Today Electricians is online website that provides electricians for home services.",
      techs: ["html", "css", "javascript", "bootstrap", "astro"],
      link: "https://todayelectricians.com/",
    },
    {
      title: "Green Portfolio",
      img: "/projects/green.jpg",
      desc: "Green Portfolio is a developers personal portfolio to showcase it's experience and projects.",
      techs: ["html", "css", "react", "tailwind"],
      link: "https://green-portfolio.pages.dev/",
    },
  ];

  return (
    <section className="md:px-14 pt-12 pb-28">
      <div className="container" id="projects">
        <h2 className="text_shadow text-green-600 text-center pb-12 font-bold text-5xl uppercase tracking-widest">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projs.map((proj, index) => {
            const projects = Icons.filter((project) => {
              return proj.techs.includes(project.id);
            });
            return (
              <a
                href={proj.link}
                className="overflow-hidden cursor-pointer duration-300 hover:scale-105 rounded-lg shadow-xl shadow-neutral-400 bg-neutral-100"
                key={index}
                target="_blank"
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
