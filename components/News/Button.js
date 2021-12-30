import React from 'react'
const { REACT_APP_BASE_URL } = process.env;


function Button({news}) {
    console.log(news)
    return (
        // <div className="bs-section">
            <div style={{marginTop: '25px'}} className="container">
                <div className="sec-cont bs-img-desc typ-vertical">
                    <div className="action-wrap">
                        <a
                            href={`${REACT_APP_BASE_URL}${news.pdfFile.url}`}
                            className="bs-btn btn-default download-btn"
                            target="_blank"
                            rel="noreferrer">
                            <span className="icon icon-download"></span>{news.pdfText}
                        </a>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Button
