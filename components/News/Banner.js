import lozad from "lozad";
import React, { useEffect } from "react";
const { REACT_APP_BASE_URL } = process.env;


function Banner({ news }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <div
      className="bs-banner typ-sm lozad-background lozad"
      data-background-image={`${REACT_APP_BASE_URL}${news?.largeImage?.url}`}
    >
      <div className="banner-title-wrap">
        <h2 className="banner-title">{news?.title}</h2>
        <p className="banner-sub-title">{news?.subtitle}</p>
      </div>
      <span className="corner-shape"></span>
    </div>
  );
}

export default Banner;
