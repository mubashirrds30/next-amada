/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SwiperCore, {
  Autoplay, EffectFade, Navigation, Pagination
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoModal from "./VideoModal";
const { REACT_APP_BASE_URL } = process.env;

SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination]);


function Banner({ banner }) {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const [state, setState] = useState({
    playing: false,
    played: 0,
    seeking: false,
  });

  const playVideo = (url) => {
    setShowModal(true);
    if (url) {
      setVideoUrl(url);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setState({ ...state, playing: false, played: 0 });
  };
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <div className="main lyt-content ">
      <div className="bs-banner homeSwiper js-bg ">
        <Swiper
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          pagination={{ clickable: true }}
          // navigation={true}
        >
          {banner.map((ele, index) => {
            return (
              <>
                {ele.video ? (
                  <>
                    <SwiperSlide
                      key={index}
                      className="lozad-background hidden-xs js-video-slide typ-video lozad"
                      data-background-image={`${REACT_APP_BASE_URL}${ele.desktopImage.url}`}
                      data-swiper-autoplay="22000"
                    >
                      <video
                        width="100%"
                        height="100%"
                        autoPlay
                        loop
                        muted
                        className="lozad-picture lozad"
                        data-poster={`${REACT_APP_BASE_URL}${ele.desktopImage.url}`}
                      >
                        <source
                          src={`${REACT_APP_BASE_URL}${ele.video?.url}`}
                          type="video/mp4"
                        />
                      </video>
                      {ele.modalVideo && (
                        <button
                          className="btn-play js-modal-btn"
                          data-target="videoModal"
                          onClick={() =>
                            playVideo(
                              ele.modalVideo !== null && ele.modalVideo?.url
                            )
                          }
                        >
                          <span className="icon icon-full"></span>
                          <span className="text">View full video</span>
                        </button>
                      )}

                      <span className="corner-shape"></span>
                    </SwiperSlide>
                  </>
                ) : (
                  <>
                    <SwiperSlide
                      className={`slide-item ${
                        ele.isProduct ? "typ-product" : ""
                      }`}
                      key={index}
                    >
                      <div className="banner-title-wrap">
                        {ele.isProduct ? (
                          <h2 className="banner-title">{ele.title}</h2>
                        ) : (
                          <h2 className="banner-title">{ele.title}</h2>
                        )}

                        {ele.isProduct ? (
                          <p className="banner-sub-title">{ele.subtitle}</p>
                        ) : (
                          <p className="banner-sub-title">{ele.subtitle}</p>
                        )}

                        {ele.isProduct && (
                          <Link href={ele.productURL}>
                            <a className="bs-btn btn-default">
                              click here for details
                            </a>
                          </Link>
                        )}
                      </div>

                      <div className="banner-info mod-count-text">
                        <div className="count">
                          {ele.step < 10 ? 0 : null}
                          {ele.step}
                        </div>
                        <div className="text">{`${ele.stepName}`}</div>
                      </div>
                      <span className="corner-shape"></span>
                      <picture className="banner-image">
                        <source
                          srcSet={`${REACT_APP_BASE_URL}${ele.desktopImage?.url}`}
                          media={"(min-width: 1280px)"}
                        />
                        <source
                          srcSet={`${REACT_APP_BASE_URL}${ele.desktopImage?.url}`}
                          media={"(min-width: 980px)"}
                        />
                        <source
                          srcSet={`${REACT_APP_BASE_URL}${ele.mobileImage?.url}`}
                          media={"(min-width: 320px)"}
                        />
                        <img
                          src={`${REACT_APP_BASE_URL}${ele.desktopImage?.url}`}
                          alt={ele.title}
                        />
                      </picture>
                    </SwiperSlide>
                  </>
                )}
              </>
            );
          })}
        </Swiper>
        <VideoModal
          videoUrl={`${REACT_APP_BASE_URL}${videoUrl}`}
          closeModal={closeModal}
          showModal={showModal}
          setState={setState}
          state={state}
        />
      </div>
    </div>
  );
}

export default Banner;
