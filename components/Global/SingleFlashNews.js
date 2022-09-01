import React from "react";

const SingleFlashNews = ({ date, monthYear, flashNewsDetail, url }) => {
  return (
    <div className="nf-item">
      {url == "" || url == "#" ? (
        <a href={"javascript:void(0)"} className="nf-link"></a>
      ) : (
        <a
          href={url}
          target={"_blank"}
          className="nf-link"
          rel="noreferrer"
        ></a>
      )}

      <span className="nf-shape"></span>
      <div className="nf-bullet">
        {!date ?
          <span className="nf-link-icon"></span>
          :
          <time className="date" dateTime="2021-07-20">
            <span className="text-lg">{date}</span>
            <span className="cm-line-break">{monthYear?.split(" ")[0]}</span>
            <span className="cm-line-break">{monthYear?.split(" ")[1]}</span>
          </time>}
      </div>
      <p className="nf-text">{flashNewsDetail}</p>
    </div>
  );
};

export default SingleFlashNews;
