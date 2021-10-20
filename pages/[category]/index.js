/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import React, { useEffect } from "react";
import Banner from "../../components/Product Listing/Banner";
import Breadcrum from "../../components/Product Listing/Breadcrum";
import Products from "../../components/Product Listing/Products";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Layout from "../../components/Global/Layout";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const id = context.params.category;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/product-categories?slug=${id}`
  );
  const json = await res.json();

  return {
    props: { data: json, slug: id },
  };
};

function Category({ data, slug }) {
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
      </main>
    </>
  );
}

export default Category;
