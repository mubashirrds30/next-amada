/* eslint-disable @next/next/link-passhref */
import lozad from "lozad";
import Link from "next/link";
import React, { useEffect } from "react";
const { REACT_APP_BASE_URL } = process.env;

function Category({ category }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <div className="bs-section sec-first">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-title">our products</h2>
        </div>
        <div className="sec-cont">
          <div className="bs-product-grid">
            <ul className="list">
              {category?.product_categories?.map((ele, ind) => {
                return (
                  <>
                    <li className="item" key={ind}>
                      <div className="bs-prod-card">
                        <Link href={`/${ele.slug}`}>
                          <a className="prod-link"></a>
                        </Link>
                        <div
                          className="img-wrap lozad-background lozad"
                          data-background-image={`${REACT_APP_BASE_URL}${ele.smallImage.url}`}
                        ></div>
                        <div className="info-wrap">
                          {ele.title.length > 1 ? (
                            <h3 className="title">{ele.title}</h3>
                          ) : (
                            <h3 className="title">
                              <span className="cm-line-break">{ele.title}</span>
                            </h3>
                          )}
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
