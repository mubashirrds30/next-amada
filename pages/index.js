import Category from "../components/Home/Category";
import News from "../components/Home/News";
import Banner from "../components/Home/Banner";
import Head from "next/head";
import Layout from "../components/Global/Layout";
import { NextSeo } from "next-seo";
import About from "../components/Home/About";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/home-page`);
  const json = await res.json();

  return {
    props: {
      banner: json.banner,
      category: json.productCategorySection,
      event: json.whatsNewSection,
      seo: json.seo,
      info: json.infoSection,
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
        <Banner banner={banner} />
        {category.isActive && <Category category={category} />}
        {info.isActive && <About info={info} />}
        {event.isActive && event.news_events.length > 0 && <News event={event} />}
      </Layout>
      {seo !== null && (
        <NextSeo
          title={seo.metaTitle}
          description={seo.metaDescription}
          keyword={seo.metaKeyword}
          noindex={seo.noIndex}
          nofollow={seo.noFollow}
          key={seo.metaTitle}
        />
      )}
    </>
  );
}
