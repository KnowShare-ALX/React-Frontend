import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import CardTestimonial from "../Atoms/CardTestimonial";

const Testimonial = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-bold text-2xl">
        <span>Testimonials</span>
      </div>
      <div className="max-w-[60rem] mx-auto py-8 hidden md:block px-4 bg-[#0f7173] md:my-8 my-4">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="flex items-center justify-between p-2 gap-2">
              <CardTestimonial
                image="assets/images/avatar1.jpg"
                label="Digital Marketing"
              />
              <CardTestimonial
                image="assets/images/avatar2.jpg"
                label="Digital Marketing"
              />

              <CardTestimonial
                image="assets/images/avatar3.jpg"
                label="Digital Marketing"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between p-2">
              <CardTestimonial
                image="assets/images/avatar4.jpg"
                label="Digital Marketing"
              />
              <CardTestimonial
                image="assets/images/avatar5.jpg"
                label="Digital Marketing"
              />

              <CardTestimonial
                image="assets/images/avatar6.jpg"
                label="Digital Marketing"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between p-2">
              <CardTestimonial
                image="assets/images/avatar7.jpg"
                label="Digital Marketing"
              />
              <CardTestimonial
                image="assets/images/avatar1.jpg"
                label="Digital Marketing"
              />

              <CardTestimonial
                image="assets/images/avatar2.jpg"
                label="Digital Marketing"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-center py-8 justify-center px-4 md:hidden bg-[#0f7173]">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <CardTestimonial
                image="assets/images/avatar1.jpg"
                label="Digital Marketing"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <CardTestimonial
                image="assets/images/avatar2.jpg"
                label="Digital Marketing"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <CardTestimonial
                image="assets/images/avatar3.jpg"
                label="Digital Marketing"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
