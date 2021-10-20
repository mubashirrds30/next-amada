/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
const { REACT_APP_BASE_URL } = process.env;

function ProductSubFeature({ product }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <div>
      {product?.subFeatures?.length > 0 && (
        <>
          <div className="pd-head">
            <ul className="bs-chain-info">
              {product?.subFeatures?.map((ele, ind) => (
                <>
                  {ele.subFeaturesPoint?.map((el, i) => {
                    return (
                      <>
                        <li className="item" key={i}>
                          <div className="bs-img-desc">
                            <div className="left-side">
                              <div className="img-wrap">
                                {el.image?.url && (
                                  <img
                                    className="lozad"
                                    alt={product.name}
                                    data-src={`${REACT_APP_BASE_URL}${el.image.url}`}
                                  />
                                )}
                              </div>
                              <div className="sec-desc">
                                <h2 className="sub-title">{ele.title}</h2>

                                <p>
                                  <ReactMarkdown className="rich-text">
                                    {el.description}
                                  </ReactMarkdown>
                                </p>
                              </div>
                            </div>
                            <div className="right-side">
                              <div className="img-wrap">
                                {el.image?.url && (
                                  <img
                                    className="lozad"
                                    alt={product.name}
                                    data-src={`${REACT_APP_BASE_URL}${el.image.url}`}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductSubFeature;
