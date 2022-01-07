/* eslint-disable @next/next/link-passhref */
import React, { useEffect } from "react";
import Banner from "../../components/News Listing/Banner";
import Breadcrum from "../../components/News Listing/Breadcrum";
import NewsCards from "../../components/News Listing/NewsCards";
import Layout from "../../components/Global/Layout";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { NewsArticleJsonLd } from 'next-seo';


export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/news-and-events-page`
  );
  const json = await res.json();

  return {
    props: {
      event: json,
    },
  };
}

function NewsEvents({ event }) {
  // console.log(event, 'news')

  return (
    <>
      {event.seo !== null && (
        <NextSeo
          title={event.seo.metaTitle}
          description={event.seo.metaDescription}
          keyword={event.seo.metaKeyword}
          noindex={event.seo.noIndex}
          nofollow={event.seo.noFollow}
        />
      )}
      <Head>
        <title>NEWS &amp; EVENTS</title>
        <link rel="icon" href="../static/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQ7F7XCH9J"></script>
          <script
          dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-NQ7F7XCH9J');
          `,
            }}
            />
      </Head>
      <Layout activeLink={"News & Events"}>
        <main>
          <div className="main lyt-content js-bg">
            <Banner event={event} />
            <Breadcrum event={event} />
            {event.newsSection.news_events.length > 0 && event.newsSection.isActive ? <NewsCards event={event} /> : <div className="mod-greeting"><h1 className="title">Coming soon</h1></div>}
          </div>
        </main>
        {event?.newsSection?.news_events?.map((ele, i)=>{
          return (
            <>
            <NewsArticleJsonLd
              keyOverride={i}
              url={`https://www.amada.ae/news-events`}
              title={ele.title}
              images={[
                `${process.env.REACT_APP_BASE_URL}${ele.smallImage.url}`
              ]}
              section="technology"
              datePublished={ele.published_at}
              dateModified={ele.updated_at}
              authorName="Amada"
              publisherName="Amada Bureau"
              publisherLogo="https://www.amada.ae/assets/images/logo.png"
              body={ele.subtitle}
            />
            </>
          )
         })}
      </Layout>
    </>
  );
}

export default NewsEvents;
