/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import { BreadcrumbJsonLd } from 'next-seo';
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "../../components/Global/Layout";


function Introduction() {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <>
      <Head>
        <title>Introduction</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"Company profile"}>
        <main>
          <div className="main lyt-content js-bg">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              // data-background-image="/assets/images/banner/company-profile-banner.jpg"
              data-background-image="/assets/images/banner/company banner.jpg">
              <div className="banner-title-wrap">
                <h2 className="banner-title">
                  company <span className="cm-line-break">overview</span>
                </h2>
              </div>
              <span className="corner-shape"></span>
            </div>
            <div className="bs-breadcrum">
              <div className="container">
                <ul className="list">
                  <li className="item">
                    <Link href="/">
                      <a className="link">amada</a>
                    </Link>
                  </li>
                  <li className="item">
                    <a className="link">COMPANY PROFILE</a>
                  </li>
                  <li className="item">Introduction</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section sec-first">
                <div className="container">
                  <div className="sec-cont">
                    <ul className="bs-chain-info typ-img-lg">
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <h2 className="title">AMADA MIDDLE EAST FZCO</h2>
                            <div className="img-wrap">
                              <figure className="mod-figure">
                                <img
                                  className="lozad"
                                  // data-src="/assets/images/amada-india-m.jpg"
                                  data-src="/assets/images/building.JPG"
                                  alt="amada-india-m"
                                />
                                <figcaption className="sub-title">
                                  {/* Bangalore Technical Center */}
                                </figcaption>
                              </figure>
                            </div>
                            <div className="sec-desc">
                              <p>
                                <strong>
                                  Comprehensive manufacturer of metalworking
                                  machinery
                                </strong>
                              </p>
                              <p>
                                Since the foundation of the company, AMADA has
                                operated according to the motto of
                                &quot;Creativity&quot;, incorporating it into
                                all of its products.
                              </p>
                              <p>
                                With more than 75 years of experience in the
                                development of metal working machinery, Amada is
                                confident that it will continuously maintain a
                                spirit of originality, guided with a viewpoint
                                of the end user.
                              </p>
                              <p>
                                AMADA MIDDLE EAST FZCO, with its office in Dubai
                                United Arab Emirates, is a subsidiary of Amada
                                Co. Ltd providing Sales and after sales services
                                to the customers in Gulf and Middle East
                                countries such as <strong>United Arab Emirates, Kingdom
                                  of Saudi Arabia, Kuwait, Oman, Bahrain, Jordan,
                                  Lebanon and Qatar</strong>.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <figure className="mod-figure">
                                <img
                                  className="lozad"
                                  // data-src="/assets/images/amada-india-m.jpg"
                                  data-src="/assets/images/building.JPG"
                                  alt="amada-india-m"
                                />
                                <figcaption className="sub-title">
                                  {/* Bangalore Technical Center */}
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <div className="img-wrap">
                              <figure className="mod-figure">
                                <img
                                  className="lozad"
                                  data-src="/assets/images/co/co2.jpg"
                                  alt="co2"
                                />
                                <figcaption className="sub-title">
                                  //  North Satellite Technical Center, Faridabad 
                                </figcaption>
                              </figure>
                            </div>
                            <div className="sec-desc">
                              <p>
                                AMADA MIDDLE EAST FZCO, with its office in Dubai
                                United Arab Emirates, is a subsidiary of Amada
                                Co. Ltd providing Sales and after sales services
                                to the customers in Gulf and Middle East
                                countries such as United Arab Emirates, Kingdom
                                of Saudi Arabia, Kuwait, Oman, Bahrain, Jordan,
                                Lebanon and Qatar.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <figure className="mod-figure">
                                <img
                                  className="lozad"
                                  data-src="/assets/images/co/co2.jpg"
                                  alt="co2"
                                />
                                <figcaption className="sub-title">
                                  //  North Satellite Technical Center, Faridabad 
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </li> */}
                    </ul>
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
              name: 'introduction',
              item: `https://www.amada.ae/company-profile/introduction`,
            },
          ]}
        />
      </Layout>
    </>
  );
}

export default Introduction;
