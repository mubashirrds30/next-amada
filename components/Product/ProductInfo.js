/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import VideoModal from "../Home/VideoModal";
import Specs from "../Table/Specs";
import ProductFeatures from "./ProductFeatures";
import ProductSubFeature from "./ProductSubFeature";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const { REACT_APP_BASE_URL } = process.env;

function ProductInfo({ product }) {
  // console.log("info====>", product);
  const { setIsModalOpen, setDownloadBrochureUrl, setProduct } = useGlobalContext();

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
    <div>
      <section>
        <VideoModal
          videoUrl={
            product.oembed !== null &&
            product.oembed &&
            JSON?.parse(product?.oembed)?.url
          }
          closeModal={closeModal}
          showModal={showModal}
          setState={setState}
          state={state}
          product
          controls
        />
        <div className="bs-section">
          <div className="container">
            <div className="sec-head">
              <h2 className="sec-title">{product?.name}</h2>
            </div>
            <div className="sec-cont bs-img-desc typ-vertical">
              <div className="img-wrap">
                <img
                  className="lozad"
                  alt={product.name}
                  data-src={`${REACT_APP_BASE_URL}${product.largeImage.url}`}
                />
              </div>
              <p className="sub-title">{product?.title}</p>
              {product?.description && (
                <div className="sec-desc">
                  <p>
                    <ReactMarkdown className="rich-text">
                      {product?.description}
                    </ReactMarkdown>
                  </p>
                </div>
              )}
              <div className="action-wrap">
                {product.brochure && product.brochure !== null && (
                  <a
                    // href={`${REACT_APP_BASE_URL}${product.brochure.url}`}
                    onClick={() => {
                      setIsModalOpen(true);
                      setDownloadBrochureUrl(`${REACT_APP_BASE_URL}${product.brochure.url}`);
                      setProduct(product.name);
                    }}
                    className="bs-btn btn-default download-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon icon-download"></span>download
                    brochure
                  </a>
                )}
                {product.ebookLink && product.ebookLink !== null && (
                  <a
                    href={`${product.ebookLink}`}
                    className="bs-btn btn-default download-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon icon-download"></span>download E-book
                  </a>
                )}
                {product.oembed && product.oembed !== null && (
                  <button
                    className="bs-btn btn-icon-link btn-play js-modal-btn"
                    data-target="videoModal"
                    onClick={() =>
                      playVideo(product.oembed !== null && product.oembed)
                    }
                  >
                    <span className="icon icon-full"></span>
                    <span className="text">Watch Product Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bs-section typ-product-intro">
          <div className="container">
            <div className="bs-product-detail">
              <div className="pd-head">
                <ProductFeatures product={product} />
                <ProductSubFeature product={product} />
              </div>
              <div className="pd-body">
                {product?.specifications?.map((pro, i) => (
                  <div key={i} className="bs-table">
                    <h3 className="title">{pro.heading}</h3>
                    <Specs product={pro.table} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductInfo;
