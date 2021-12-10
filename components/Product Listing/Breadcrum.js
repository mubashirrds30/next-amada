import React from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from 'next-seo';


function Breadcrum({ product, slug }) {
  // console.log(product, slug)
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
            <a href={"javascript:void(0)"} className="link">
              Products
            </a>
          </li>
          <li className="item">{product?.title}</li>
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
            name: 'products',
            item: `https://www.amada.ae/${slug}`,
          },
          {
            position: 3,
            name: product?.title,
            item: `https://www.amada.ae/${slug}`,
          },
        ]}
      />
    </div>
  );
}

export default Breadcrum;
