import lozad from "lozad";
import React, { useEffect, useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Thumbs
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Navigation, Thumbs, Pagination]);
const { REACT_APP_BASE_URL } = process.env;


function Gallery({ news }) {
  // console.log(news)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <div>
      <section>
        <div className="bs-section">
          <div className="container">
            {news?.gallery?.length === 0 ? null : (
              <div className="bs-blog-detail">
                <div className="bd-head">
                  <h2 className="bd-title">Gallery</h2>
                </div>
                <div className="bd-body">
                  <div className="bs-gallery">
                    <div className="gallery-head">
                      <Swiper
                        pagination={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="mySwiper2Gallery"
                      >
                        {news?.gallery?.map((ele, ind) => {
                          return (
                            <>
                              <SwiperSlide
                                key={ind}
                                className="lozad-background lozad"
                                data-background-image={`${REACT_APP_BASE_URL}${ele?.image?.url}`}
                              >
                                <div className="gallery-slide-info">
                                  <p className="text">{ele.title}</p>
                                </div>
                              </SwiperSlide>
                            </>
                          );
                        })}
                      </Swiper>
                    </div>
                    <div className="gallery-footer">
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={6}
                        freeMode={true}
                        watchSlidesProgress={true}
                        className="mySwiperGallery"
                      >
                        {news?.gallery?.map((ele, ind) => {
                          return (
                            <>
                              <SwiperSlide
                                key={ind}
                                className="lozad-background lozad"
                                data-background-image={`${REACT_APP_BASE_URL}${ele?.image?.url}`}
                              ></SwiperSlide>
                            </>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
