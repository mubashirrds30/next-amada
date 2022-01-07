/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import { NextSeo, ProductJsonLd } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../../../components/Global/Layout";
import ProductBreadcrum from "../../../components/Product/ProductBreadcrum";
import ProductInfo from "../../../components/Product/ProductInfo";


export const getServerSideProps = async (context) => {
  const slug = context.params.product;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/products?slug=${slug}`
  );
  const json = await res.json();

  if(json.length > 0){
    return {
      props: { data: json },
    }
  }else{
    return {
      notFound : true
    }
  }

};

function Product({ data }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  const nextRouter = useRouter();

  
  const product = data[0];
  // console.log(product, 'prooo')

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"Products"}>
        <main>
          <div className="main lyt-content js-bg">
            <ProductBreadcrum product={product} />
            <ProductInfo product={product} />
          </div>
          {product.seo !== null && (
            <NextSeo
              title={product.seo.metaTitle}
              description={product.seo.metaDescription}
              keyword={product.seo.metaKeyword}
              noindex={product.seo.noIndex}
              nofollow={product.seo.noFollow}
              key={product.seo.metaTitle}
            />
          )}
        </main>
        <ProductJsonLd
          productName={product.name}
          images={[
            `${process.env.REACT_APP_BASE_URL}${product.smallImage.url}`
          ]}
          description={product.description}
          brand="Amada"
          manufacturerName="AMADA MIDDLE EAST FZCO"
          manufacturerLogo="https://www.amada.ae/assets/images/logo.png"
          releaseDate={product.published_at}
          offers={[
            {
              priceCurrency: 'INR',
              url: `https://www.amada.ae/${product.product_category.slug}/${product.slug}`,
            },]}
        />
      </Layout>
    </>
  );
}

export default Product;
