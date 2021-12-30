/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../../../components/Global/Layout";
import Banner from "../../../components/News/Banner";
import Breadcrum from "../../../components/News/Breadcrum";
import Gallery from "../../../components/News/Gallery";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { NewsArticleJsonLd } from 'next-seo';
import Button from "../../../components/News/Button";


export const getServerSideProps = async (context) => {
  const id = context.params.newsDetail;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/news-and-events?slug=${id}`
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

function NewsDetail(data) {
  const news = data.data[0];
  // console.log(news)

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
          {news.pdfFile && news.pdfFile.url && <Button news={news}/>}
          <Gallery news={news} />
        </div>
      </Layout>
      <NewsArticleJsonLd
        url={`https://www.amada.ae/news-events/${news.slug}`}
        title={news.title}
        images={[
          `${process.env.REACT_APP_BASE_URL}${news?.gallery[0]?.image.url}`,
          `${process.env.REACT_APP_BASE_URL}${news?.gallery[1]?.image.url}`,
          `${process.env.REACT_APP_BASE_URL}${news?.gallery[2]?.image.url}`,
        ]}
        section="technology"
        datePublished={news.published_at}
        dateModified={news.updated_at}
        authorName="Amada"
        publisherName="Amada Bureau"
        publisherLogo="https://www.amada.ae/assets/images/logo.png"
        body={news.subtitle}
      />
    </>
  );
}

export default NewsDetail;
