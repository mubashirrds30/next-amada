/* eslint-disable @next/next/link-passhref */
import lozad from "lozad";
import { ProductJsonLd } from 'next-seo';
import Link from "next/link";
import React, { useEffect } from "react";
const { REACT_APP_BASE_URL } = process.env;


function Category({ category }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  // console.log(category, 'catttt')


  var someDate = new Date();
var numberOfDaysToAdd = 30;
var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
// console.log(new Date(result))


function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

// console.log(formatDate(result));

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
      {category?.product_categories?.map((ele, i)=>{
        
        // console.log('category=>>>> ', category )
          return(
            <>
                <ProductJsonLd
                keyOverride={i}
                productName={ele.title}
                description={ele.title}
                images={[
                  `${REACT_APP_BASE_URL}${ele.smallImage.url}`
                ]}
                brand="Amada"
                manufacturerName="Amada"
                manufacturerLogo="https://www.amada.ae/assets/images/logo.png"
                releaseDate={ele.published_at}
                reviews={[
                  {
                    author: {
                      type: 'Organization',
                    name: 'Amada Middle East FZCO',
                    },
                    datePublished: ele.published_at,
                    reviewBody: ele.title,
                    name: ele.title,
                    reviewRating: {
                      bestRating: '5',
                      ratingValue: '5',
                      worstRating: '1',
                    },
                    publisher: {
                      type: 'Organization',
                    name: 'Amada Middle East FZCO',
                    },
                  },
                ]}
                aggregateRating={{
                  ratingValue: '4.5',
                  reviewCount: '10'
                }}
                offers={[
                  {
                    url: `https://www.amada.ae/${ele.slug}`,
                    availability: 'InStock',
                    seller: {
                            name: 'Amada Middle East FZCO',
                          },
                    priceValidUntil: formatDate(result)
                  },]}
                  mpn={ele.title}
                  sku='Amada Middle East FZCO'
              />
            </>
          )
        })}
    </div>
  );
}

export default Category;
