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
                offers={[
                  {
                    priceCurrency: 'INR',
                    url: `https://www.amada.ae/${slug}/${ele.slug}`,
                  },]}
              />
            </>
          )
        })}
      </main>
      
    </>
  );
}

export default Category;
