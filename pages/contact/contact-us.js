/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";
import Head from "next/head";
import { BreadcrumbJsonLd } from 'next-seo';


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
        <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'amada',
            item: `https://www.amada.ae/`,
          },
          {
            position: 2,
            name: 'contact',
            item: `https://www.amada.ae/contact/contact-us`,
          },
          {
            position: 3,
            name: 'contact us',
            item: `https://www.amada.ae/contact/contact-us`,
          },
        ]}
      />
      </Layout>
    </>
  );
};

export default Contactus;
