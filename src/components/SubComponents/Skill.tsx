const Skill = ({ skill }: any) => {
  return (
    <div
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
};

export default Skill;
