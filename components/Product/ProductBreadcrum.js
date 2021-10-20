import React from "react";
import Link from "next/link";

function ProductBreadcrum({ product }) {
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
    </div>
  );
}

export default ProductBreadcrum;
