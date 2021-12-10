import React from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from 'next-seo';


function Breadcrum({ news }) {
  // console.log(news)
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
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'amada',
            item: `https://www.amada.ae`,
          },
          {
            position: 2,
            name: 'News & Events',
            item: `https://www.amada.ae/news-events`,
          },
          {
            position: 3,
            name: news.title,
            item: `https://www.amada.ae/news-events/${news.slug}`,
          },
        ]}
      />
    </div>
  );
}

export default Breadcrum;
