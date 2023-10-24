const Hero = () => {
  return (
    <header
      className="hero relative h-[90vh] overflow-hidden flex justify-center items-center"
      id="home"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex-1" data-aos="fade-right">
            <div className="md:w-4/5 flex flex-col justify-center items-center md:items-start">
              <h6 className="md:text-neutral-400 text-2xl font-bold">Hi</h6>
              <h1 className="text-6xl font-bold py-3 text-neutral-900">
                I'm{" "}
                <span className="md:text-green-500 brand-logo">Saif Ullah</span>
              </h1>
              <p className="text-2xl md:text-neutral-400">
                I'm a Full Stack Developer
              </p>
              <p className="pt-4 text-xl text-neutral-700 tracking-widest text-center md:text-left">
                I'm a professional web developer for more than 2 years
                experience.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4 pt-4">
              <a
                href="#"
                className="bg-neutral-300 md:bg-green-600 p-4 px-8 duration-300 hover:bg-green-700 shadow-md shadow-neutral-400 rounded-full md:text-neutral-50"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="bg-neutral-300 p-4 px-8 duration-300 hover:bg-neutral-400 shadow-md shadow-neutral-400 rounded-full text-neutral-800"
              >
                Portfolio
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex-1 hidden md:flex justify-end items-center"
          >
            <div className="w-60 lg:w-96 h-60 lg:h-96 scale-105 rounded-full shadow-xl shadow-neutral-600 overflow-hidden">
              <img
                src="/hero-image.jpg"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
