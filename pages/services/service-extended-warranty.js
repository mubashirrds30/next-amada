/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";

import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";
import Head from "next/head";
import { BreadcrumbJsonLd } from 'next-seo';


const SEW = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <>
      <Head>
        <title>Service Extended Warranty</title>
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
      <Layout activeLink="Services">
        <main>
          <div className="main lyt-content">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              data-background-image="/assets/images/banner/Traning course - Bending.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">
                  Service Extended{" "}
                  <span className="cm-line-break">Warranty</span>
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
                    <a href="javascript:void(0)" className="link">
                      Services
                    </a>
                  </li>
                  <li className="item">Service Extended Warranty</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <ul className="bs-chain-info">
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <h2 className="title">Extended Warranty</h2>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service4.jpg"
                                alt="service4"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                Extended Warranty now offers up tp five years
                                warranty on all fiber laser engine. With this
                                new offer Customers benefitfrom en even higher
                                degree of security for their fiber laser cutting
                                machine.
                              </p>
                              <p>
                                <strong>Benefits</strong>
                              </p>
                              <ul className="mod-list">
                                <li className="item">
                                  Insures machine operation at peak performance.
                                </li>
                                <li className="item">
                                  Covers cost for the machine parts.
                                </li>
                                <li className="item">
                                  Provides minimum machine downtime and
                                  production delays.
                                </li>
                                <li className="item">
                                  Machine operation report
                                </li>
                              </ul>
                              <p>
                                In the event of claim under extended warranty,
                                Amada offers the oarts and component of the
                                fiber laser engine free of charge.
                              </p>
                              <p>
                                As an integral part of this program, the
                                comprehensive machine inspection, including
                                preventive maintenance, is performed at the 11th
                                month of plan agreement. Service histories of
                                all maintenance performed are then recorded for
                                future reference.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service4.jpg"
                                alt="service4"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
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
              name: 'services',
              item: `https://www.amada.ae/services/service-extended-warranty`,
            },
            {
              position: 3,
              name: 'Service Extended Warranty',
              item: `https://www.amada.ae/services/service-extended-warranty`,
            },
          ]}
        />
      </Layout>
    </>
  );
};

export default SEW;
