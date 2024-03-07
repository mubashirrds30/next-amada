/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../components/Global/Layout";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Site Maintenance</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"500"}>
        <main>
          <div className="main lyt-content">
            <div className="bs-404">
              <div className="content-wrap">
                <div className="icon-wrap">
                  {/* <img
                    src="../assets/images/404.svg"
                    alt="Error 404 Image"
                    title="Error 404 Image"
                  /> */}
                </div>
                <div className="info-wrap">
                  <h3 className="info-title">We&rsquo;ll be back soon!</h3>
                  <p className="info-desc">
                  Website is under maintenance and will come back soon. please check our Global website <a href="https://www.amada.co.jp">https://www.amada.co.jp</a> for more information about our products
                    <span className="cm-line-break">
                    Please reach us at <a href="mailto:info@amada.ae">info@amada.ae</a> & <a href="tel:+97148833744">+97148833744</a>
                    </span>
                  </p>
                  {/* <p className="info-desc">
                  Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:#">contact us</a>, otherwise we&rsquo;ll be back online shortly!
                    <span className="cm-line-break">
                      Please try again later
                    </span>
                  </p> */}
                  {/* <Link href="/">
                    <a className="bs-btn btn-default">Home</a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ErrorPage;
