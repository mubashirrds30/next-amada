/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../../../components/Global/Layout";
import ProductBreadcrum from "../../../components/Product/ProductBreadcrum";
import ProductInfo from "../../../components/Product/ProductInfo";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const slug = context.params.product;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/products?slug=${slug}`
  );
  const json = await res.json();

  return {
    props: { data: json },
  };
};

function Product({ data }) {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  const nextRouter = useRouter();

  if (data.length > 0) {
  } else {
    if (nextRouter != undefined) {
      typeof window !== "undefined" && nextRouter.push("/404");
    }
    return false;
  }
  const product = data[0];

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
      </Layout>
    </>
  );
}

export default Product;
