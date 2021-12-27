import lozad from "lozad";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";
import { BreadcrumbJsonLd } from 'next-seo';


const CustomerDetails = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <>
      <Head>
        <title>Customer Details</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>

      <Layout activeLink={"Company profile"}>
        <main>
          <div className="main lyt-content js-bg">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              // data-background-image="/assets/images/csr-banner.jpg"
              data-background-image="/assets/images/banner/company banner.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">
                  customer <span className="cm-line-break">details</span>
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
                      company profile
                    </a>
                  </li>
                  <li className="item">customer details</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <div className="sec-desc">
                      <p>
                        Our customers include the best and largest in each
                        industry. We attain great pleasure in taking their
                        reference. Following is a list of few industry who are
                        our customers
                      </p>
                    </div>
                    <div className="bs-client-card">
                      <ul className="list">
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/genset.jpg"
                                alt="genset"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                DG Set
                                <span className="cm-line-break">
                                  Manufacturers
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/tools.jpg"
                                alt="tool"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Jobshop
                                <span className="cm-line-break">
                                  Manufacturers
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/medical.jpg"
                                alt="medical"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Medical Equipment
                                <span className="cm-line-break">
                                  Manufacturers
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/electricity.jpg"
                                alt="electricity"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Control Panel
                                <span className="cm-line-break">
                                  & Switchgear
                                </span>{" "}
                                <span className="cm-line-break">
                                  Manufacturers
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/water-machine.jpg"
                                alt="water-machine"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Air Conditioning
                                <span className="cm-line-break">
                                  & Refrigeration
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/hotel.jpg"
                                alt="hotel"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Lighting Fixture
                                <span className="cm-line-break">
                                  Manufacturers
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/lift.jpg"
                                alt="lift"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Elevator
                                <span className="cm-line-break">
                                  Manufacturers
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/agriculture.jpg"
                                alt="agriculture"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Machine
                                <span className="cm-line-break">Builders</span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/machine.jpg"
                                alt="machine"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Furniture
                                <span className="cm-line-break">
                                  Manufacturers
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/construction.jpg"
                                alt="construction"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Construction &
                                <span className="cm-line-break">
                                  Agricultural Machinery
                                </span>
                                <span className="cm-line-break">
                                  & equipment
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/kitchen.jpg"
                                alt="kitchen"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Kitchen
                                <span className="cm-line-break">Equipment</span>
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="bs-prod-card">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/customer/airospace.jpg"
                                alt="airospace"
                              />
                            </div>
                            <div className="info-wrap">
                              <h3 className="title">
                                Aerospace
                                <span className="cm-line-break">Industry</span>
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
            name: 'company profile',
            item: `https://www.amada.ae/company-profile/customer-details`,
          },
          {
            position: 3,
            name: 'customer details',
            item: `https://www.amada.ae/company-profile/customer-details`,
          },
        ]}
      />
      </Layout>
    </>
  );
};

export default CustomerDetails;
