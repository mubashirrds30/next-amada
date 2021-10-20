import React from "react";
import Link from "next/link";

function Breadcrum({ product, slug }) {
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
    </div>
  );
}

export default Breadcrum;
