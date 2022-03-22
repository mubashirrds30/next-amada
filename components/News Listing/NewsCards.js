/* eslint-disable @next/next/link-passhref */
import lozad from "lozad";
import Link from "next/link";
import React, { useEffect } from "react";
const { REACT_APP_BASE_URL } = process.env;

function NewsCards({ event }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  var newSort = event.newsSection.news_events.sort(
    (a, b) => (a.date < b.date && 1) || -1
  );
  var linkedin = newSort.filter((el) => el.isLinkedin);
  var notLinkedin = newSort.filter((el) => !el.isLinkedin);

  return (
    <div>
      <section>
        <div className="bs-section">
          <div className="container">
            <div className="sec-cont">
              <div className="bs-event-card">
                <ul className="list">
                  {event?.newsSection?.isActive &&
                    linkedin?.map((ele, index) => {
                      return (
                        <>
                          {ele.isLinkedin  && ele.url && ele.smallImage?.url && ele.title && 
                          <li className="item" key={index}>
                            <div className="bs-img-overlay">
                              <div
                                className="img-wrap bs-news lozad-background lozad"
                                data-background-image={`${REACT_APP_BASE_URL}${ele.smallImage?.url}`}
                              >
                                <Link href={ele.url}>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    className="news-link"
                                  ></a>
                                </Link>
                                <span className="icon icon-linkedin"></span>
                                <div className="news-info">
                                  {ele.url && ele.date && 
                                  <time className="date">
                                    {" "}
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
                                  </time>}
                                  <p className="desc">{ele.title}</p>
                                </div>
                              </div>
                            </div>
                          </li>}
                        </>
                      );
                    })}
                  {event?.newsSection?.isActive &&
                    notLinkedin?.map((ele, index) => {
                      return (
                        <>
                          {!ele.isLinkedin && ele.smallImage?.url && ele.title &&<li className="item" key={index}>
                            <div className="bs-img-overlay">
                              <div
                                className="img-wrap bs-news lozad-background lozad"
                                data-background-image={`${REACT_APP_BASE_URL}${ele.smallImage?.url}`}
                              >{
                                ele.gallery.length === 0 && ele.pdfFile && ele.pdfFile.url  ? 
                                  <a href={`${REACT_APP_BASE_URL}${ele.pdfFile.url}`} 
                                  target="_blank"
                                  rel="noreferrer" 
                                  className="news-link">
                                  </a>
                                : 
                                <Link href={`/news-events/${ele.slug}`} key={index}>
                                    <a className="news-link"></a>
                                  </Link>
                              }
                                <div className="news-info">
                                  <p className="desc">{ele.title}</p>
                                </div>
                              </div>
                            </div>
                          </li>}
                        </>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsCards;
