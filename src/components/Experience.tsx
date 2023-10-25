import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Exper from "./SubComponents/Exper";

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
        <Swiper
          // install Swiper modules
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
          {exper.map((exp, index) => {
            return (
              <SwiperSlide key={index}>
                <Exper exp={exp} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Experience;
