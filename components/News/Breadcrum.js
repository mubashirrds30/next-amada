import React from "react";
import Link from "next/link";

function Breadcrum({ news }) {
  return (
    <div className="bs-breadcrum">
      <div className="container">
        <ul className="list">
          <li className="item">
            <Link href="/">
              <a className="link">amada</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/news-events">
              <a className="link">News & Events</a>
            </Link>
          </li>
          <li className="item">{news.title}</li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrum;
