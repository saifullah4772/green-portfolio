const Experience = () => {
  const exper = [
    {
      img: "/hero-image.jpg",
      company_name: "Google",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",

      link: "#",
    },
    {
      img: "/hero-image.jpg",
      company_name: "Google",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",

      link: "#",
    },
    {
      img: "/hero-image.jpg",
      company_name: "Google",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",

      link: "#",
    },
  ];
  return (
    <section className="py-28 px-14 bg-neutral-100" id="experience">
      <div className="container">
        <h2 className="text-green-700 font-bold text-2xl pb-4 uppercase tracking-[0.2em]">
          Experience
        </h2>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-16">
          {exper.map((exp, index) => {
            return (
              <div
                className="bg-white shadow-xl rounded-md p-6 flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 duration-300"
                key={index}
              >
                <img
                  src={exp.img}
                  className="h-52 object-cover w-full"
                  alt={exp.company_name}
                />
                <div>
                  <h4 className="text-2xl font-bold capitalize text-green-600">
                    {exp.company_name}
                  </h4>
                  <p>{exp.description}</p>
                </div>
                <a
                  href={exp.link}
                  className="bg-green-600 py-3 px-4 hover:bg-green-700 rounded-md text-neutral-50"
                >
                  Visit Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
