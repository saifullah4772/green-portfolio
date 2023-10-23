export const About = () => {
  return (
    <section className="py-28 bg-neutral-100" id="about">
      <div className="container">
        <h2 className="text-green-700 font-bold text-2xl pb-4 uppercase tracking-[0.2em]">
          About
        </h2>
        <div className="overflow-hidden p-4 flex flex-col md:flex-row shadow-xl shadow-neutral-400 justify-center items-center about-radius bg-neutral-200">
          <div className="md:w-1/2 justify-start items-center h-full">
            <div className="w-full h-full md:rounded-bl-[64px] rounded-tl-[64px] md:rounded-tl-none overflow-hidden">
              <img
                src="/hero-image.jpg"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 h-full p-8 flex flex-col gap-4 justify-center items-start">
            <h2 className="text-3xl font-bold text-green-600">About me</h2>
            <p className="xl:tracking-widest">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias cumque in perspiciatis exercitationem provident modi,
              error repudiandae dolore molestiae quis sit cupiditate voluptate
              assumenda ab illum qui impedit asperiores veniam perferendis rerum
              aliquid dolorem voluptatem voluptas quisquam. Nostrum, molestias
              quisquam. Lorem ipsum.
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
