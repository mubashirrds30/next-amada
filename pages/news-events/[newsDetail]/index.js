/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../../../components/Global/Layout";
import Banner from "../../../components/News/Banner";
import Breadcrum from "../../../components/News/Breadcrum";
import Gallery from "../../../components/News/Gallery";
import Head from "next/head";
import { NextSeo } from "next-seo";

export const getServerSideProps = async (context) => {
  const id = context.params.newsDetail;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/news-and-events?slug=${id}`
  );
  const json = await res.json();

  return {
    props: { data: json, slug: id },
  };
};

function NewsDetail(data) {
  const news = data.data[0];

  return (
    <>
      {news.seo !== null && (
        <NextSeo
          title={news.seo.metaTitle}
          description={news.seo.metaDescription}
          keyword={news.seo.metaKeyword}
          noindex={news.seo.noIndex}
          nofollow={news.seo.noFollow}
        />
      )}
      <Head>
        <title>{news.title}</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"News & Events"}>
        <div className="main lyt-content js-bg">
          <Banner news={news} />
          <Breadcrum news={news} />
          <Gallery news={news} />
        </div>
      </Layout>
    </>
  );
}

export default NewsDetail;
