/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import Link from "next/link";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useGlobalContext } from "../../hooks/useGlobalContext";
const { REACT_APP_BASE_URL } = process.env;

function Products({ product, slug }) {
  const { setIsModalOpen, setDownloadBrochureUrl, setProduct } = useGlobalContext();
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  const { REACT_APP_BASE_URL } = process.env;
  return (
    <div>
      <section>
        <div className="bs-section sec-first">
          <div className="container">
            <div className="sec-cont">
              <ul className="bs-chain-info typ-listing">
                {product?.productSection?.products?.map((ele, index) => (
                  <li className="item" key={index}>
                    <div className="bs-img-desc">
                      <div className="left-side">
                        <h2 className="title">{ele.name}</h2>
                        <div className="img-wrap">
                          <img
                            className="lozad"
                            alt={ele.name}
                            data-src={`${REACT_APP_BASE_URL}${ele.smallImage?.url}`}
                          />
                        </div>
                        <div className="sec-desc">
                          <ReactMarkdown className="rich-text">
                            {ele.intro}
                          </ReactMarkdown>
                        </div>
                        <div className="action-wrap">
                          {/* <Link href={`/${slug}/${ele.slug}`}> */}
                          <a onClick={() => {


                            setIsModalOpen(true);
                            setDownloadBrochureUrl(`${REACT_APP_BASE_URL}${ele.brochure.url}`);
                            setProduct(ele.name);


                            // setIsModalOpen(true); setDownloadBrochureUrl(`${API_URL}${item.brochurePDF.url}`); setProduct(item.productName)
                          }} className="bs-btn btn-default">know more</a>
                          {/* </Link> */}
                          {ele.brochure && product.brochure !== null && (
                            <a
                              onClick={() => {
                                setIsModalOpen(true);
                                setDownloadBrochureUrl(`${REACT_APP_BASE_URL}${ele.brochure.url}`);
                                setProduct(ele.name);
                                // console.log(ele.brochure.url, 'check ele.brochure.url')
                              }
                              }


                              // href={`${REACT_APP_BASE_URL}${ele.brochure.url}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="bs-btn btn-icon-link download-btn">
                                <span className="icon icon-download"></span>
                                download brochure
                              </button>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="right-side">
                        <div
                          className="img-wrap lozad-background lozad"
                          data-background-image={`${REACT_APP_BASE_URL}${ele.smallImage?.url}`}
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
