import React from "react";

function ProductFeatures({ product }) {
  return (
    <div className="bs-features">
      <div className="lyt-features">
        <div className="">
          {product.features?.heading && (
            <h2 className="title">{product.features?.heading}</h2>
          )}

          {product?.features?.featuresSection?.length > 0 && (
            <div className="sec-desc">
              {product?.features?.featuresSection?.map((ele, index) => (
                <div key={index}>
                  <h3 className="sub-title">{ele.subTitle}</h3>
                  <ul className="mod-list">
                    {ele?.point?.map((ele, i) => (
                      <>
                        <li className="item" key={i}>
                          {ele.point}
                          {ele.subPoint && (
                            <>
                              <ul className="inside-list">
                                {ele.subPoint?.map((el, inn) => {
                                  return <li key={inn}>{el.subPoint}</li>;
                                })}
                              </ul>
                            </>
                          )}
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductFeatures;
