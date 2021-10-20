/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";

import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";
import Head from "next/head";

const About = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink="Technical Center">
        <main>
          <div className="main lyt-content">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              data-background-image="/assets/images/banner/vc-banner.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">
                  Vocational Center<span className="cm-line-break">About</span>
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
                    <a href="#" className="link">
                      Technical Center
                    </a>
                  </li>
                  <li className="item">About</li>
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
                            <h2 className="title">About Us</h2>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vocational-m.jpg"
                                alt="vocational-m"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                Since the foundation of the company, AMADA has
                                operated according to the motto of
                                &quot;creativity&quot;, incorporating it into
                                all of its products.
                              </p>
                              <p>
                                With 70 years of experience in the development
                                of metal working machinery, Amada is confident
                                that it will continuously maintain a spirit of
                                originality, guided with a viewpoint of the end
                                user.
                              </p>
                              <p>
                                AMADA MIDDLE EAST FZCO, with its office in
                                Dubai, United Arab Emirates and this is a
                                subsidiary of Amada Co. Ltd providing Sales and
                                after sales services to the customers in Gulf
                                and Middle East countries such as United Arab
                                Emirates, Kingdom of Saudi Arabia, Kuwait, Oman,
                                Bahrain, Jordan, Lebanon and Qatar.
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vocational-m.jpg"
                                alt="vocational-m"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <h2 className="title">Customer Details</h2>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/objective.jpg"
                                alt="objective"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                Our customers include the best and largest in
                                each industry. We attain great pleasure in
                                taking their reference. Following is a list of
                                few industry who are our customers.
                              </p>
                              <ul className="mod-list">
                                <li className="item">Dg Set Manufacturers</li>
                                <li className="item">Job-shop Manufacturers</li>
                                <li className="item">
                                  Medical Equipment Manufacturers
                                </li>
                                <li className="item">
                                  Control Panel & Switchgear Manufacturers
                                </li>
                                <li className="item">
                                  Air Conditioning & Refrigeration
                                </li>
                                <li className="item">
                                  Lighting Fixture Manufacturers
                                </li>
                                <li className="item">Elevator Manufacturers</li>
                                <li className="item">Machine Builders</li>
                                <li className="item">
                                  Furniture Manufacturers
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/objective.jpg"
                                alt="objective"
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

export default About;
