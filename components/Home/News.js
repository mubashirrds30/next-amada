/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import Link from "next/dist/client/link";
import React, { useEffect } from "react";
const { REACT_APP_BASE_URL } = process.env;
import { NewsArticleJsonLd } from 'next-seo';


function News({ event }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  var newSort = event?.news_events?.sort(
    (a, b) => (a.date < b.date && 1) || -1
  );
  var linkedin = newSort.filter((el) => el.isLinkedin);
  var notLinkedin = newSort.filter((el) => !el.isLinkedin);

  return (
    <div className="bs-section">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-title">what&apos;s new</h2>
        </div>

        <div className="sec-cont">
          <div className="lyt-news">
            <ul className="list">
              {linkedin?.slice(0, 3).map((ele, index) => {
                return (
                  <>
                    {ele.isLinkedin && (
                      <>
                        {/* <Link href={ele.url} key={index}> */}
                        <li className="item" key={index}>
                          <div className="bs-img-overlay">
                            <div
                              className="img-wrap bs-news lozad-background lozad"
                              data-background-image={`${REACT_APP_BASE_URL}${ele.smallImage?.url}`}
                            >
                              <Link href={ele.url} key={index}>
                                <a className="news-link" target="_blank"></a>
                              </Link>
                              {ele.url && (
                                <span className="icon icon-linkedin"></span>
                              )}
                              <div className="news-info">
                                {ele.url && (
                                  <time dateTime="2020-08" className="date">
                                    {`${new Date(ele.date).toLocaleString(
                                      "default",
                                      {
                                        month: "long",
                                      }
                                    )} 
                                    ${new Date(ele.date).toLocaleString(
                                      "default",
                                      { year: "numeric" }
                                    )}`}
                                  </time>
                                )}

                                <p className="desc">{ele.title}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* </Link> */}
                      </>
                    )}
                  </>
                );
              })}
              {notLinkedin?.slice(0, 2).map((ele, index) => {
                return (
                  <>
                    {!ele.isLinkedin && (
                      <li className="item" key={index}>
                        <div className="bs-img-overlay">
                          <div
                            className="img-wrap bs-news lozad-background lozad"
                            data-background-image={`${REACT_APP_BASE_URL}${ele.smallImage?.url}`}
                          >
                            <Link href={`/news-events/${ele.slug}`} key={index}>
                              <a className="news-link"></a>
                            </Link>
                            {ele.url && (
                              <span className="icon icon-linkedin"></span>
                            )}
                            <div className="news-info">
                              <p className="desc">{ele.title}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    )}
                  </>
                );
              })}
              {
                <li className="item">
                  <Link href="/news-events">
                    <button className="bs-btn btn-tile">
                      <span className="text">more in news</span>
                    </button>
                  </Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
      {event?.news_events?.map((ele, i)=>{
          return (
            <>
            <NewsArticleJsonLd
              keyOverride={i}
              url={ele.isLinkedin ? ele.url : `https://www.amada.ae/news-events/${ele.slug}`}
              title={ele.title}
              images={[
                `${REACT_APP_BASE_URL}${ele.smallImage.url}`
              ]}
              section="technology"
              datePublished={ele.date}
              authorName="Amada"
              publisherName="Amada Bureau"
              body={ele.title}
              publisherLogo="https://www.amada.ae/assets/images/logo.png"
            />
            </>
          )
         })}
    </div>
  );
}

export default News;
