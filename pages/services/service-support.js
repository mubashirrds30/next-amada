/* eslint-disable @next/next/no-img-element */
// import Head from "next/head";
import lozad from "lozad";
import { BreadcrumbJsonLd } from 'next-seo';
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";


const ServiceSupport = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <>
      <Head>
        <title>Service Support</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink="Services">
        <main>
          <div className="main lyt-content js-bg">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              data-background-image="/assets/images/banner/Traning course - Bending.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">Service Support</h2>
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
                  <li className="item">Service Support</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-head">
                    <h2 className="sec-title">AMADA MIDDLE EAST FZCO</h2>
                  </div>
                  <div className="sec-cont">
                    <ul className="bs-chain-info sec-first">
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">
                              Engineering Service Supports
                            </p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service 1.jpg"
                                alt="service-engg-support"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                The necessary functions, operating techniques,
                                and processing method are different for each
                                customer, even for the same machine. Amada will
                                make all efforts to support customer to ensure
                                machines give optimum performance, right from
                                the machine is purchased. What services
                                customers need the most? We analyze and offer
                                solutions. We always stand besides customers.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service 1.jpg"
                                alt="service-engg-support"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">Operation Support</p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service 2.jpg"
                                alt="service-operation-support"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                Our support starts before machine installation
                                and continues after that. We offer optimum ramp
                                up before machine installation, with machine and
                                operation training best suited for each
                                customer. We propose the cutting edge
                                application techniques and know-how for your
                                best products and components.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service 2.jpg"
                                alt="service-operation-support"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">Machine Support</p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service 3.jpg"
                                alt="service-machine-support"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                We provide expeditious service through our
                                nationwide service centers in order to keep your
                                machines in most productive conditions. We also
                                offer and propose various programs of periodic
                                maintenance and “Before service” in order to
                                minimize your machines down time and to maximize
                                your machine LIFE.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service 3.jpg"
                                alt="service-machine-support"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">Tooling and Consumables</p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service-tooling-support.jpg"
                                alt="service-tooling-support"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                We provide high quality tooling, spare parts and
                                other consumables for your machines to keep high
                                productivity.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/service-tooling-support.jpg"
                                alt="service-tooling-support"
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

            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <div className="bs-event-card">
                      <ul className="list">
                        <li className="item">
                          <div className="bs-prod-card">
                            <Link href="/services/service-extended-warranty">
                              <a className="prod-link"></a>
                            </Link>
                            <div
                              className="img-wrap lozad-background lozad"
                              data-background-image="/assets/images/services/service6.jpg"
                            ></div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Extended
                                <span className="cm-line-break">Warranty</span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <Link href="/services/service-adss">
                              <a
                                href="service-adss.shtml"
                                className="prod-link"
                              ></a>
                            </Link>
                            <div
                              className="img-wrap lozad-background lozad"
                              data-background-image="/assets/images/services/service7.jpg"
                            ></div>
                            <div className="info-wrap">
                              <h3 className="title">
                                ADSS{" "}
                                <span className="cm-line-break">Services</span>
                              </h3>
                            </div>
                          </div>
                        </li>
                      </ul>
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
            name: 'services',
            item: `https://www.amada.ae/services/service-support`,
          },
          {
            position: 3,
            name: 'service support',
            item: `https://www.amada.ae/services/service-support`,
          },
        ]}
      />
      </Layout>
    </>
  );
};

export default ServiceSupport;
