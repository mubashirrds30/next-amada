/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";
import Head from "next/head";

const Contactus = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <>
      <Head>
        <title>Contact us</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"Contact"}>
        <main>
          <div className="main lyt-content js-bg">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              data-background-image="/assets/images/banner/contact-banner-1.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">Contact Us</h2>
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
                    <a className="link">Contact</a>
                  </li>
                  <li className="item">Contact Us</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section sec-first">
                <div className="container">
                  <div className="sec-cont">
                    <ul className="bs-chain-info typ-img-lg typ-reverse typ-address">
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <h2 className="title">AMADA MIDDLE EAST FZCO</h2>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/contact/contact1.jpg"
                                alt="contact1"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                <strong></strong>
                                <span className="cm-line-break"></span>
                                <span className="cm-line-break">
                                  P.O no 18735,
                                </span>
                                <span className="cm-line-break">
                                  Jebel Ali Free Zone,
                                </span>
                                <span className="cm-line-break">
                                  Dubai, UAE.
                                </span>
                                <span className="cm-line-break">
                                  Telephone:{" "}
                                  <a href="tel:+971 4 883 3744">
                                    +971 4 883 3744
                                  </a>
                                </span>
                                <span className="cm-line-break">
                                  Fax:{" "}
                                  <a href="tel:+971 4 883 3740">
                                    +971 4 883 3740
                                  </a>
                                </span>
                                <span className="cm-line-break">
                                  Web:{" "}
                                  <a href=" https://amada.ae">
                                    https://amada.ae
                                  </a>
                                </span>
                                <span className="cm-line-break">
                                  Email:{" "}
                                  <a href="mailto:info@amada.ae">
                                    info@amada.ae
                                  </a>
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/contact/contact1.jpg"
                                alt="contact1"
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

            {/* <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <div className="bs-add-card">
                      <ul className="list">
                        <li className="item">
                          <div className="mod-add">
                            <div className="info-wrap">
                              <h3 className="title">
                                North Satellite
                                <span className="cm-line-break">
                                  Technical Center
                                </span>
                              </h3>
                              <div className="sec-desc">
                                <p>
                                  North Satellite Center
                                  <span className="cm-line-break">
                                    Faridabad Plot No. 38,
                                  </span>
                                  <span className="cm-line-break">
                                    Sector 27A, Mathura Road,
                                  </span>
                                  <span className="cm-line-break">
                                    Faridabad – 121 003 (Haryana)
                                  </span>
                                  <span className="cm-line-break">
                                    Ph: <a href="tel:9350679547">9350679547</a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="mod-add">
                            <div className="info-wrap">
                              <h3 className="title">Bangalore SC</h3>
                              <div className="sec-desc">
                                <p>
                                  No. 8/13, Ground Floor,
                                  <span className="cm-line-break">
                                    G. N. Lakshmikanth Complex,
                                  </span>
                                  <span className="cm-line-break">
                                    1st Cross, 1st Block,
                                  </span>
                                  <span className="cm-line-break">
                                    Nandhini Layout,
                                  </span>
                                  <span className="cm-line-break">
                                    Bangalore - 560 096.
                                  </span>
                                  <span className="cm-line-break">
                                    Ph:{" "}
                                    <a href="tel:8023379255">
                                      080 – 233 792 55
                                    </a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="mod-add">
                            <div className="info-wrap">
                              <h3 className="title">Hyderabad SC</h3>
                              <div className="sec-desc">
                                <p>
                                  No.1-7-96, 2nd Floor,
                                  <span className="cm-line-break">
                                    KMR Plaza, Kamala Nagar
                                  </span>
                                  <span className="cm-line-break">
                                    Main Road, CIL Post,
                                  </span>
                                  <span className="cm-line-break">
                                    Hyderabad - 500 062.
                                  </span>
                                  <span className="cm-line-break">
                                    Ph: <a href="tel:8886426624">8886426624</a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="mod-add">
                            <div className="info-wrap">
                              <h3 className="title">Chennai SC</h3>
                              <div className="sec-desc">
                                <p>
                                  103/1,1st Floor,
                                  <span className="cm-line-break">
                                    Poonamalee High Road,
                                  </span>
                                  <span className="cm-line-break">
                                    Goparasanallur, Kattupakkam,
                                  </span>
                                  <span className="cm-line-break">
                                    Chennai – 600 056.
                                  </span>
                                  <span className="cm-line-break">
                                    Direct:{" "}
                                    <a href="tel:4426792856">044-26792856</a>
                                  </span>
                                  <span className="cm-line-break">
                                    LM: Above Kovai Pazhamudhir
                                  </span>
                                  <span className="cm-line-break">
                                    Nilayam/next to Baba temple
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="mod-add">
                            <div className="info-wrap">
                              <h3 className="title">Mumbai SC</h3>
                              <div className="sec-desc">
                                <p>
                                  Office No.208, 2nd Floor,
                                  <span className="cm-line-break">
                                    Puranik Capitol Puranik City,
                                  </span>
                                  <span className="cm-line-break">
                                    Opp-Hypercity, Vadavli
                                  </span>
                                  <span className="cm-line-break">
                                    Ghodbunder Road,
                                  </span>
                                  <span className="cm-line-break">
                                    Thane (W) – 400 615
                                  </span>
                                  <span className="cm-line-break">
                                    Tel No:{" "}
                                    <a href="tel:2225973467">022 25973467</a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="mod-add">
                            <div className="info-wrap">
                              <h3 className="title">Pune SC</h3>
                              <div className="sec-desc">
                                <p>
                                  Office No. 405, 4th Floor,
                                  <span className="cm-line-break">
                                    TRANSBAY Building.
                                  </span>
                                  <span className="cm-line-break">
                                    Survey No. 3, Balewadi Phata,
                                  </span>
                                  <span className="cm-line-break">
                                    Baner, Village Balewadi,
                                  </span>
                                  <span className="cm-line-break">
                                    District Pune – 411 045,
                                  </span>
                                  <span className="cm-line-break">
                                    Maharashtra
                                  </span>
                                  <span className="cm-line-break">
                                    Cell.No:
                                    <a href="tel:7875556334">07875556334</a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="mod-add">
                            <div className="info-wrap">
                              <h3 className="title">Vadodara SC</h3>
                              <div className="sec-desc">
                                <p>
                                  Baroda Service Center
                                  <span className="cm-line-break">
                                    Plot No.2,Ajitanagar-1,
                                  </span>
                                  <span className="cm-line-break">
                                    Beside BRG Heights,
                                  </span>
                                  <span className="cm-line-break">
                                    Nr.Amit Nagar Circle,
                                  </span>
                                  <span className="cm-line-break">
                                    Sama Savli Road,
                                  </span>
                                  <span className="cm-line-break">
                                    Vadodara - 390 018
                                  </span>
                                  <span className="cm-line-break">
                                    Cell:{" "}
                                    <a href="tel:8238040120">82380 40120</a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <ul className="bs-map">
                      <li className="item">
                        <div className="iframe">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.078835403265!2d55.06412351500485!3d24.963432284005513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0dd17682aa2b%3A0x8bd2a7ddfba8d1ab!2sAmada%20Middle%20East%20FZCO!5e0!3m2!1sen!2sin!4v1634363271853!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
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

export default Contactus;
