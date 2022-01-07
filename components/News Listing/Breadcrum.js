import { BreadcrumbJsonLd } from 'next-seo';
import Link from "next/link";
import React from "react";


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
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'amada',
            item: `https://www.amada.ae`,
          },
          {
            position: 2,
            name: event?.bannerTitle,
            item: `https://www.amada.ae/news-events`,
          },
        ]}
      />
    </div>
  );
}

export default Breadcrum;
