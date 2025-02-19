/* eslint-disable @next/next/no-img-element */
import lozad from "lozad";
import { BreadcrumbJsonLd } from 'next-seo';
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Global/Layout";


const TraningCourses = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <>
      <Head>
        <title>Training Courses</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"Technical Center"}>
        <main>
          <div className="main lyt-content">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              data-background-image="/assets/images/banner/training.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">
                  Training{" "}
                  <span className="cm-line-break">Courses Offered</span>
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
                    <Link href="javascript:void(0)">
                      <a className="link">Technical center</a>
                    </Link>
                  </li>
                  <li className="item">Training Courses Offered</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <div className="sec-desc">
                      <p>
                        Comprehensive Vocational Center Training Courses,
                        ensures the Machine Operator’s Knowledge/Ability to
                        achieve the maximum Efficiency from the Machine & Tools.
                        AMADA Vocational Center framed the Training Courses
                        based on the Customer suited form to ensure the Company
                        to get profit from correct, safe and productive use of
                        AMADA machines. AMADA offers a range of operator
                        training courses. Certificates are issued on the
                        successful completion of the course.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <ul className="bs-chain-info typ-img-lg">
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/Training course - Punching.jpg"
                                alt="training-2"
                              />
                            </div>
                            <h3 className="title">
                              Punching Machine Operational Training
                            </h3>
                            <div className="bs-table">
                              <div className="table-wrap">
                                <table
                                  className="table"
                                  cellPadding="0"
                                  cellSpacing="0"
                                >
                                  <thead>
                                    <tr>
                                      <th
                                        style={{ width: "50%" }}
                                        className="t-title"
                                      >
                                        Course Details
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        Course Code &amp; Content
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        No. of Days
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="t-desc">
                                        NCT Operation Training- AE/EM + AMNC-F Controller
                                      </td>
                                      <td className="t-desc">
                                        MCNCT-AE &amp; EM
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/MCNCT-AEANDEM.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        NCT Operation Training EM M2 Series + 3i
                                        Controller
                                      </td>
                                      <td className="t-desc">
                                        MCNCT-EM M2
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/'MCNCT-EM M2.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/Training course - Punching.jpg"
                                alt="training-2"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/Training course - Laser.jpg"
                                alt="training-1"
                              />
                            </div>
                            <h3 className="title">
                              LASER Machine Operational Training
                            </h3>
                            <div className="bs-table">
                              <div className="table-wrap">
                                <table
                                  className="table"
                                  cellPadding="0"
                                  cellSpacing="0"
                                >
                                  <thead>
                                    <tr>
                                      <th
                                        style={{ width: "50%" }}
                                        className="t-title"
                                      >
                                        Course Details
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        Course Code &amp; Content
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        No. of Days
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="t-desc">
                                        Fiber Laser Operation Training - LCG-AJ/ENSIS AJ/VENTIS AJ
                                      </td>
                                      <td className="t-desc">
                                        MCLAS-AJ
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/MCLAS-AJ.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Laser Operation Training LCG/FO M2 –CO2
                                        series
                                      </td>
                                      <td className="t-desc">
                                        MCLAS-CO2
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/FOM2.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/Training course - Laser.jpg"
                                alt="training-1"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/Training course - Bending.jpg"
                                alt="about"
                              />
                            </div>
                            <h3 className="title">
                              Bending Machine Operational Training
                            </h3>
                            <div className="bs-table">
                              <div className="table-wrap">
                                <table
                                  className="table"
                                  cellPadding="0"
                                  cellSpacing="0"
                                >
                                  <thead>
                                    <tr>
                                      <th
                                        style={{ width: "50%" }}
                                        className="t-title"
                                      >
                                        Course Details
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        Course Code &amp; Content
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        No. of Days
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="t-desc">
                                        Press Brake Operation Training (RGM2
                                        series)
                                      </td>
                                      <td className="t-desc">
                                        MCPBE-RG
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/MCPBE-RG.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">2</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Press Brake Operation Training (HM / HDS
                                        series)
                                      </td>
                                      <td className="t-desc">
                                        MCPBE-HM &amp; HDS
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/MCPBE-HMANDHDS.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">3</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Press brake Operation Training HRB &amp; HG Series
                                      </td>
                                      <td className="t-desc">
                                        MCPBE-HRB &amp; HG
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/MCPBE-HRBANDHG.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">3</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/Training course - Bending.jpg"
                                alt="about"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/about.jpg"
                                alt="about"
                              />
                            </div>
                            <h3 className="title">
                              Software Technology Training
                            </h3>
                            <div className="bs-table">
                              <div className="table-wrap">
                                <table
                                  className="table"
                                  cellPadding="0"
                                  cellSpacing="0"
                                >
                                  <thead>
                                    <tr>
                                      <th
                                        style={{ width: "50%" }}
                                        className="t-title"
                                      >
                                        Course Details
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        Course Code &amp; Content
                                      </th>
                                      <th
                                        style={{ width: "25%" }}
                                        className="t-title"
                                      >
                                        No. of Days
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training AP100 CAD / Punch CAM
                                      </td>
                                      <td className="t-desc">
                                        SWAP100P
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/AP100-Punch_CAM.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training AP100 CAD / Laser CAM
                                      </td>
                                      <td className="t-desc">
                                        SWAP100L
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/AP100-Laser_CAM.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training Dr. ABE Blank CAM –
                                        Laser
                                      </td>
                                      <td className="t-desc">
                                        SWDABE-L
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/Dr_ABE_Blank_Laser.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">3</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training SheetWorks for Unfold
                                      </td>
                                      <td className="t-desc">
                                        SWSHTW-U
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/Sheetworks for Unfold.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training SheetWorks for Tube
                                      </td>
                                      <td className="t-desc">SWSHTW-T</td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training VPSS 3i PD + Blank Plus
                                        _ Punch
                                      </td>
                                      <td className="t-desc">
                                        SWVP3I-P
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/VPSS3i_PD_Blank-Punch.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training VPSS 3i PD + Blank Plus
                                        _ Laser
                                      </td>
                                      <td className="t-desc">
                                        SWVP3I-L
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/VPSS3i_PD_Blank-Laser.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                    <tr>
                                      <td className="t-desc">
                                        Software Training VPSS 3i PD + Bend Plus
                                      </td>
                                      <td className="t-desc">
                                        SWVP3I-B
                                        <div className="action-wrap">
                                          <Link href="/assets/doc/schedules/VPSS3i_PD_BendPlus.pdf">
                                            <a
                                              target="_blank"
                                              className="icon icon-pdf"
                                            ></a>
                                          </Link>
                                        </div>
                                      </td>
                                      <td className="t-desc">4</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                data-src="/assets/images/vc/about.jpg"
                                alt="about"
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
              name: 'Technical center',
              item: `https://www.amada.ae/technical-center/training-courses`,
            },
            {
              position: 3,
              name: 'Training Courses Offered',
              item: `https://www.amada.ae/technical-center/training-courses`,
            },
          ]}
        />
      </Layout>
    </>
  );
};

export default TraningCourses;
