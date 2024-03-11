import { NextSeo } from "next-seo";
import Head from "next/head";
import Layout from "../components/Global/Layout";
import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import News from "../components/Home/News";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/home-page`);
  const json = await res.json();
  // console.log('home page data', json)

  return {
    props: {
      banner: json?.banner,
      category: json?.productCategorySection,
      event: json?.whatsNewSection,
      seo: json?.seo,
      info: json?.infoSection,
    },
  };
}

export default function Home({ banner, category, event, seo, info }) {
  return (
    <>
      <Layout activeLink={"Home"}>
        <Head>
          <title>AMADA MIDDLE EAST FZCO</title>
          <link rel="icon" href="../static/favicon.ico" />
        </Head>
        <Banner banner={banner} />
        {category?.isActive && <Category category={category} />}
        {info?.isActive && <About info={info} />}
        {event?.isActive && event?.news_events.length > 0 && <News event={event} />}
      </Layout>
      {seo !== null && (
        <NextSeo
          title={seo?.metaTitle}
          description={seo?.metaDescription}
          keyword={seo?.metaKeyword}
          noindex={seo?.noIndex}
          nofollow={seo?.noFollow}
          key={seo?.metaTitle}
        />
      )}
    </>
  );
}
