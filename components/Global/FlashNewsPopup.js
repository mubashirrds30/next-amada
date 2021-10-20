import React, { useState } from "react";
import SingleFlashNews from "./SingleFlashNews";

const FlashNewsPopup = ({ flashNewsList }) => {
  const [showPopup, setShowPopop] = useState(false);
  return (
    <div className={`bs-news-fly ${showPopup ? "active" : ""}`}>
      <div className="nf-head">
        <h3 className="nf-title">{flashNewsList?.sectionTitle}</h3>
      </div>
      <div className="nf-body">
        <ul className="list">
          {flashNewsList &&
            flashNewsList.flashNewsList &&
            flashNewsList.flashNewsList.map((news, index) => {
              return (
                <li key={index} className="item">
                  <SingleFlashNews
                    date={news.date}
                    monthYear={news.monthYear}
                    flashNewsDetail={news.flashNewsDetail}
                    url={news.url}
                  />
                  ;
                </li>
              );
            })}
        </ul>
      </div>
      <button
        className="nf-trigger js-news-fly-trigger"
        type="button"
        onClick={() => setShowPopop(!showPopup)}
      >
        <span className="icon icon-file"></span>
      </button>
    </div>
  );
};

export default FlashNewsPopup;
