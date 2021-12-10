import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Global/Layout";
import { BreadcrumbJsonLd } from 'next-seo';


const CorporateVideo = () => {
  return (
    <>
      <Head>
        <title>Corporate Video</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"Company profile"}>
        <main>
          <div className="main lyt-content">
            <div className="bs-breadcrum">
              <div className="container">
                <ul className="list">
                  <li className="item">
                    <Link href="/">
                      <a className="link">amada</a>
                    </Link>
                  </li>
                  <li className="item">
                    <a href="javascript:void(0)" className="link">
                      company profile
                    </a>
                  </li>
                  <li className="item">corporate video</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section bs-video">
                <div className="container">
                  <div className="sec-cont">
                    <div className="video-wrap">
                      <video
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        controls
                        className="lozad-picture"
                        data-poster="assets/images/poster-image.jpg"
                      >
                        <source
                          src="/assets/video/video.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="/assets/video/video.ogg"
                          type="video/ogg"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'amada',
            item: `https://www.amada.ae/`,
          },
          {
            position: 2,
            name: 'company profile',
            item: `https://www.amada.ae/company-profile/introduction`,
          },
          {
            position: 3,
            name: 'corporate video',
            item: `https://www.amada.ae/company-profile/corporate-video`,
          },
        ]}
      />
      </Layout>
    </>
  );
};

export default CorporateVideo;
