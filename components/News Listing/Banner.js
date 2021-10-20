import React from "react";
const { REACT_APP_BASE_URL } = process.env;


function Banner({ event }) {
  return (
    <div
      className="bs-banner typ-sm lozad-background lozad"
      data-background-image={`${REACT_APP_BASE_URL}${event?.bannerImage?.url}`}
    >
      <div className="banner-title-wrap">
        <h2 className="banner-title">{event?.bannerTitle}</h2>
      </div>
      <span className="corner-shape"></span>
    </div>
  );
}

export default Banner;
