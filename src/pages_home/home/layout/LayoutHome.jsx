import React from "react";
import css from "./home.module.scss";
import wall01 from "../../../assets/carrousel/wall.jpg";
import wall02 from "../../../assets/carrousel/wall01.jpg";
import wall03 from "../../../assets/carrousel/wall02.jpg";
import wall04 from "../../../assets/carrousel/wall03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, History, Autoplay } from "swiper/modules";
import PromocionesAll from "../promociones_all/PromocionesAll";
import PromocionesId from "../promociones_id/PromocionesId";

const arrayImg = [
  { id: 1, img: wall01 },
  { id: 2, img: wall02 },
  { id: 3, img: wall03 },
  { id: 4, img: wall04 },
];

export default function LayoutHome() {
  return (
    <section className={css.home}>

      
      <article className={css.content_img}>
        <Swiper
          className={css.div_img}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination, History]}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {arrayImg.map((li, index) => {
            return (
              <SwiperSlide  key={index} className={css.item_img}>
                <div style={{ backgroundImage: `url(${li.img})`}} className={css.img_cover}  ></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </article>
 
      <PromocionesAll/>
      <PromocionesId/>
    </section>
  );
}
