const Experience = () => {
  const exper = [
    {
      img: "/experience/hello.jpg",
      company_name: "Hello World Technologies",
      description:
        "Hello World Technologies is a software company and has an institude for development courses.",

      link: "https://helloworldtech.com/",
    },
  ];
  return (
    <section className="pt-12 pb-20 md:px-14 bg-neutral-200" id="experience">
      <div className="container">
        <h2 className="text_shadow text-green-600 text-center pb-8 font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-widest">
          Experience
        </h2>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-16">
          {exper.map((exp, index) => {
            return (
              <div
                className="bg-white shadow-xl rounded-md p-6 flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 duration-150"
                key={index}
                data-aos="flip-left"
              >
                <img
                  src={exp.img}
                  className="h-52 object-cover w-full"
                  alt={exp.company_name}
                />
                <div>
                  <h4 className="text-md md:text-2xl font-bold capitalize text-green-600">
                    {exp.company_name}
                  </h4>
                  <p className="text-sm md:text-md">{exp.description}</p>
                </div>
                <a
                  href={exp.link}
                  target="_blank"
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
