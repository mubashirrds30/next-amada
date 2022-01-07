/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import SwiperCore, {
  Autoplay, EffectFade, Navigation, Pagination
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useLozadImage from "../../hooks/useLozadImage";
import { VideoModal } from "./VideoModal";
SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination]);
const { REACT_APP_BASE_URL } = process.env;

const Banner = ({ data }) => {
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

  useLozadImage();
  return (
    <>
      <div className="lyt-content">
        <div className="bs-banner homeSwiper js-bg">
          <Swiper
            // spaceBetween={50}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 5000,
            }}
            navigation={true}
            pagination={{ clickable: true }}
          >
            {data.map((singleBanner, index) => {
              return (
                <>
                  {singleBanner.bannerVideo !== null ? (
                    <>
                      <SwiperSlide
                        key={index}
                        className="lozad-background hidden-xs js-video-slide typ-video"
                        data-background-image={`${REACT_APP_BASE_URL}${
                          singleBanner.bannerImage &&
                          singleBanner.bannerImage.url
                        }`}
                        data-swiper-autoplay="22000"
                      >
                        <video
                          width="100%"
                          height="100%"
                          autoPlay
                          loop
                          muted
                          className="lozad-picture"
                          data-poster={`${REACT_APP_BASE_URL}${
                            singleBanner.bannerImage &&
                            singleBanner.bannerImage.url
                          }`}
                        >
                          <source
                            src={`${REACT_APP_BASE_URL}${singleBanner.bannerVideo.url}`}
                            type="video/mp4"
                          />
                        </video>
                        {singleBanner.modalVideo !== null && (
                          <button
                            className="btn-play js-modal-btn"
                            data-target="videoModal"
                            onClick={() =>
                              playVideo(
                                singleBanner.modalVideo !== null &&
                                  singleBanner.modalVideo.url
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
                        key={index}
                        className={`slide-item ${
                          singleBanner.isProduct ? "typ-product" : ""
                        }`}
                      >
                        <div className="banner-title-wrap">
                          {!singleBanner.isProduct ? (
                            <h2 className="banner-title">
                              {singleBanner.bannerTitle}
                            </h2>
                          ) : (
                            <h2 className="banner-title">
                              {singleBanner.bannerTitle}
                            </h2>
                          )}

                          <p className="banner-sub-title">
                            {singleBanner.bannerSubTitle}
                          </p>
                          {singleBanner.isProduct ? (
                            <Link href={singleBanner.btnUrl}>
                              <a className="bs-btn btn-default">
                                click here for details
                              </a>
                            </Link>
                          ) : null}
                        </div>
                        <div className="banner-info mod-count-text">
                          {!singleBanner.isProduct ? (
                            <>
                              <div className="count">
                                0{singleBanner.counter}
                              </div>
                              <div className="text">
                                {singleBanner.counterText}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="count">
                                0{singleBanner.counter}
                              </div>
                              <div className="text">
                                {singleBanner.counterText}
                              </div>
                            </>
                          )}
                        </div>
                        <span className="corner-shape"></span>
                        <picture className="banner-image">
                          <source
                            srcSet={`${REACT_APP_BASE_URL}${singleBanner.bannerImage.url}`}
                            media={"(min-width: 1280px)"}
                          />
                          <source
                            srcSet={`${REACT_APP_BASE_URL}${singleBanner.bannerImage.url}`}
                            media={"(min-width: 980px)"}
                          />
                          <source
                            srcSet={`${REACT_APP_BASE_URL}${singleBanner.bannerMobileImage.url}`}
                            media={"(min-width: 320px)"}
                          />
                          <img
                            src={`${REACT_APP_BASE_URL}${singleBanner.bannerImage.url}`}
                            alt={singleBanner.bannerTitle}
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
            videoUrl={`${API_URL}${videoUrl}`}
            closeModal={closeModal}
            showModal={showModal}
            setState={setState}
            state={state}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
