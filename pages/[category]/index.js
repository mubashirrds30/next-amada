/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import { NextSeo, ProductJsonLd } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../../components/Global/Layout";
import Banner from "../../components/Product Listing/Banner";
import Breadcrum from "../../components/Product Listing/Breadcrum";
import Products from "../../components/Product Listing/Products";


export const getServerSideProps = async (context) => {
  const id = context.params.category;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/product-categories?slug=${id}`
  );
  const json = await res.json();

  if(json.length > 0){
    return {
      props: { data: json, slug: id },
    }
  }else{
    return {
      notFound : true
    }
  }
};

function Category({ data, slug }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  const nextRouter = useRouter();

  // if (data.length > 0) {
  // } else {
  //   if (nextRouter != undefined) {
  //     typeof window !== "undefined" && nextRouter.push("/404");
  //   }
  //   return false;
  // }
  const product = data[0];

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

  return (
    <>
      <main>
        <Head>
          <title>{product.title}</title>
          <link rel="icon" href="../static/favicon.ico" />
        </Head>
        <Layout activeLink={"Products"}>
          <div className="main lyt-content js-bg">
            <Banner product={product} />
            <Breadcrum product={product} slug={slug} />
            <Products product={product} slug={slug} />
          </div>
          {product.seo !== null && (
            <NextSeo
              title={product.seo.metaTitle}
              description={product.seo.metaDescription}
              keyword={product.seo.metaKeyword}
              noindex={product.seo.noIndex}
              nofollow={product.seo.noFollow}
            />
          )}
        </Layout>
        {product.productSection?.products?.map((ele, i)=>{
          // console.log('product=====', product)
          return(
            <>
                <ProductJsonLd
                keyOverride={i}
                productName={ele.name}
                images={[
                  `${process.env.REACT_APP_BASE_URL}${ele.smallImage.url}`
                ]}
                description={ele.description}
                brand="Amada"
                manufacturerName="AMADA MIDDLE EAST FZCO"
                manufacturerLogo="https://www.amada.ae/assets/images/logo.png"
                releaseDate={ele.published_at}
                aggregateRating={{
                  ratingValue: '4.5',
                  reviewCount: '10'
                }}
                reviews={[
                  {
                    author: {
                      type: 'Organization',
                    name: 'Amada Middle East FZCO',
                    },
                    datePublished: ele.published_at,
                    reviewBody: ele.description,
                    name: ele.name,
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
                offers={[
                  {
                    // priceCurrency: 'INR',
                    url: `https://www.amada.ae/${slug}/${ele.slug}`,
                    availability: 'InStock',
                    seller: {
                            name: 'Amada Middle East FZCO',
                          },
                    priceValidUntil: formatDate(result)
                  },]}
                  mpn={ele.name}
                  sku='Amada Middle East FZCO'


              />
            </>
          )
        })}
      </main>
      
    </>
  );
}

export default Category;
