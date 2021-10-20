import React from "react";
import Link from "next/link";

function Breadcrum({ event }) {
  return (
    <div className="bs-breadcrum">
      <div className="container">
        <ul className="list">
          <li className="item">
            <Link href="/">
              <a className="link">amada</a>
            </Link>
          </li>
          <li className="item">{event?.bannerTitle}</li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrum;
