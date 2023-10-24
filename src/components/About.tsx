export const About = () => {
  return (
    <section className="pt-12 pb-20 bg-neutral-200" id="about">
      <div className="container">
        <h2 className="text_shadow text-green-600 text-center pb-8 font-bold text-5xl uppercase tracking-widest">
          About
        </h2>
        <div
          data-aos="fade-up"
          className="overflow-hidden w-4/5 mx-auto p-4 flex flex-col md:flex-row shadow-xl shadow-neutral-400 justify-center items-center about-radius bg-neutral-100"
        >
          <div className="md:w-1/2 justify-start items-center h-full">
            <div className="w-full h-full md:rounded-bl-[64px] rounded-tl-[64px] md:rounded-tl-none overflow-hidden">
              <img src="/about.jpg" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="md:w-1/2 h-full p-8 flex flex-col gap-4 justify-center items-start">
            <h2 className="text-3xl font-bold text-green-600">About me</h2>
            <p className="lg:tracking-[0.2em]">
              My name is Saif Ullah. I'm a web developer with 2 year of
              experience of frontend and backend development, working on React
              JS, Next JS, MongoDB, Node JS and Express JS. I have worked on
              E-commerce, blog and portfolio projects. Creates mobile friendly
              and attractive UI design for your website.
            </p>
            <a
              href="#contact"
              className="bg-green-600 p-4 px-6 duration-300 hover:bg-green-700 shadow-md shadow-neutral-400 rounded-md text-neutral-50"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
