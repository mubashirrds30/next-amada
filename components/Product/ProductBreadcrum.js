import React from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from 'next-seo';


function ProductBreadcrum({ product }) {
  // console.log(product)
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
              products
            </a>
          </li>
          <li className="item">
            <Link href={`/${product.product_category.slug}`}>
              <a className="link">{product?.product_category?.title}</a>
            </Link>
          </li>
          <li className="item">{product?.name}</li>
        </ul>
      </div>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'amada',
            item: `https://www.amada.ae/`,
          },
          {
            position: 2,
            name: 'products',
            item: `https://www.amada.ae/${product.product_category.slug}`,
          },
          {
            position: 3,
            name: product?.product_category?.title,
            item: `https://www.amada.ae/${product.product_category.slug}`,
          },
          {
            position: 4,
            name: product?.name,
            item: `https://www.amada.ae/${product.product_category.slug}/${product?.slug}`,
          },
        ]}
      />
    </div>
  );
}

export default ProductBreadcrum;
