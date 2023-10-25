const Exper = ({ exp }: any) => {
  return (
    <div
      className="bg-white shadow-xl rounded-md p-6 flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 duration-150"
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
};

export default Exper;
