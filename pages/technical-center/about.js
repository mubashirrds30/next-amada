/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import { BreadcrumbJsonLd } from 'next-seo';
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";
import Gallery from "../../components/News/Gallery";

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${process.env.REACT_APP_BASE_URL}/technical-center`
//   );
//   const json = await res?.json();

//   return {
//     props: {
//       gallery: json,
//     },
//   };
// }


const About = ({}) => {
// console.log('gallery', gallery);

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
              data-background-image="/assets/images/banner/training.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">
                  Technical Center<span className="cm-line-break">About</span>
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
                      Technical Centre
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
                                data-src="/assets/images/amada training.jpg"
                                alt="technical-m"
                              />
                            </div>
                            <div className="sec-desc">
                            <p>With our Management Philosophy “Grow with our Customers”, The AMADA Technical Center is opened for customers to provide hands-on access to AMADA’s engineering and technical expertise by showcasing leading-edge technologies, production-enhancing software, precision tooling and the latest generation of AMADA equipment. Representing the most recent addition to AMADA’s growing network of customer-centered sites, the Technical Center provides the ideal setting for training, technical seminars, machine demonstrations and verification process. Regular in-house exhibitions and events take place here, where technical know-how is shared and the latest machine innovations are demonstrated in live operation</p>
                            <p>The overall concept of the Technical Center is to consistently and optimally support AMADA customers in being innovative, competitive and efficient today and in the future. The focus is, in addition to the exhibition of technologies, a solution-spanning offer of analysis and consulting. In the Technical Center, each customer is individually and comprehensively informed about the latest developments in sheet metal processing.</p>
                            <p>The AMADA Technical Center is also committed to work with customers and their employees in the Sheet Metal Industry with a view of imparting knowledge to the operators related to Safety, Machine Operation and Maintenance to make them completely competent. In order to overcome the shortage of skilled workers, we want to work together with our customers and their employees and give them the ability to constantly live up to the ever-greater technical requirements in the field of Sheet Metal Industry.</p> 
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/amada training.jpg"
                                alt="technical-m"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <li className="item">
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
                      </li> */}
                    </ul>
                  </div>
                </div>
              {/* <Gallery news={gallery} /> */}
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
              name: 'Technical Center',
              item: `https://www.amada.ae/technical-center/about`,
            },
            {
              position: 3,
              name: 'About',
              item: `https://www.amada.ae/technical-center/about`,
            },
          ]}
        />
      </Layout>
    </>
  );
};

export default About;
