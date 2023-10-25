import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Icons } from "../helpers/helpers";
import Project from "./SubComponents/Project";

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
        <h2 className="text_shadow text-green-600 text-center pb-12 font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-widest">
          Projects
        </h2>

        <Swiper
          style={{ padding: 50 }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSlideChange={() => {
            return;
          }}
        >
          {projs.map((proj, index) => {
            const projects = Icons.filter((project) => {
              return proj.techs.includes(project.id);
            });
            return (
              <SwiperSlide key={index}>
                <Project projects={projects} proj={proj} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
