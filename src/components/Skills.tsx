import { Icons } from "../helpers/helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Skill from "./SubComponents/Skill";
const Skills = () => {
  return (
    <section className="pt-12 pb-28" id="skills">
      <div className="container select-none">
        <h2 className="text_shadow text-green-600 text-center pb-8 font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-widest">
          Skills
        </h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          onSlideChange={() => {
            return;
          }}
        >
          {Icons.map((skill, index) => {
            return (
              <SwiperSlide key={index}>
                <Skill skill={skill} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
