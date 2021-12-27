/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import React, { useEffect } from "react";
const { REACT_APP_BASE_URL } = process.env;
import Link from "next/link";
import ReactMarkdown from "react-markdown";

function About({ info }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  // console.log(info);
  return (
    <section>
      <div className="bs-section">
        <div className="container">
          <div className="sec-cont">
            <ul className="bs-chain-info typ-img-lg">
              {info.info.map((ele, i) => {
                return (
                  <>
                    <li key={i} className="item">
                      <div className="bs-img-desc">
                        <div className="left-side">
                          <h2 className="title">{ele.title}</h2>
                          <div className="img-wrap">
                            <img
                              className="lozad"
                              alt={ele.title}
                              data-src={`${REACT_APP_BASE_URL}${ele.image.url}`}
                            />
                          </div>
                          <div className="sec-desc">
                            <p>
                              <ReactMarkdown className="rich-text">
                                {ele.description}
                              </ReactMarkdown>
                            </p>
                          </div>
                          <div className="action-wrap">
                            <Link href={ele.buttonUrl}>
                              <a className="bs-btn btn-default">
                                {ele.buttonText}
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="right-side">
                          <div className="img-wrap">
                            <img
                              className="lozad"
                              alt={ele.title}
                              data-src={`${REACT_APP_BASE_URL}${ele.image.url}`}
                            />
                          </div>
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
    </section>
  );
}

export default About;
