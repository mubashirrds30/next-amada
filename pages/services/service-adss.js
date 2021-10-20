/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import Head from "next/head";

import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";

const ServiceAdss = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <>
      <Head>
        <title>Service adss</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink="Services">
        <main>
          <div className="main lyt-content js-bg">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              data-background-image="/assets/images/banner/service-banner.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">Service ADSS</h2>
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
                  <li className="item">Service ADSS</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-head">
                    <h2 className="sec-title">ADSS Services</h2>
                  </div>
                  <div className="sec-cont">
                    <ul className="bs-chain-info">
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">Remote Checkup</p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/remote-checkup.jpg"
                                alt="remote-checkup"
                              />
                            </div>
                            <div className="sec-desc">
                              <ul className="mod-list">
                                <li className="item">
                                  Remote checkup to test your machine health.
                                </li>
                                <li className="item">
                                  Based on monthly checkup report, we advice
                                  maintenance to keep your machine working at
                                  peak performance.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/remote-checkup.jpg"
                                alt="remote-checkup"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">Remote Analysis</p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/remote-analysis.jpg"
                                alt="remote-analysis"
                              />
                            </div>
                            <div className="sec-desc">
                              <ul className="mod-list">
                                <li className="item">
                                  Remote analysis helps quick recovery from the
                                  failure condition.
                                </li>
                                <li className="item">
                                  Amada analysis team determines the cause of a
                                  failure by analyzing your machine operation
                                  logs.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/remote-analysis.jpg"
                                alt="remote-analysis"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">Alarm Monitoring</p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/alarm-monitoring.jpg"
                                alt="alarm-monitoring"
                              />
                            </div>
                            <div className="sec-desc">
                              <ul className="mod-list">
                                <li className="item">
                                  Alarm monitoring allows us to detect problems
                                  beforhand
                                </li>
                                <li className="item">
                                  This helps prevent more serious problems and
                                  machine stop that require unplanned
                                  maintenance.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/alarm-monitoring.jpg"
                                alt="alarm-monitoring"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <p className="sub-title">Operation Status Report</p>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/opertaion-status-reports.jpg"
                                alt="opertaion-status-reports"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                Operation report provides overview of your
                                machine operation in the previous month based on
                                remotely collected data.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/services/opertaion-status-reports.jpg"
                                alt="opertaion-status-reports"
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
      </Layout>
    </>
  );
};

export default ServiceAdss;
