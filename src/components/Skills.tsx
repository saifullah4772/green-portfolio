import { Icons } from "../helpers/helpers";
const Skills = () => {
  return (
    <section className="pt-12 pb-28" id="skills">
      <div className="container">
        <h2 className="text_shadow text-green-600 text-center pb-8 font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-widest">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between content-center gap-10">
          {Icons.map((skill, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in"
                className="text-center cursor-pointer duration-300 hover:scale-110"
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-36 h-36 p-4 rounded-full object-cover grayscale hover:grayscale-0 bg-neutral-200 shadow-lg shadow-neutral-300"
                    src={skill.src}
                    alt={skill.alt}
                  />
                </div>
                <p className="pt-4">{skill?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
