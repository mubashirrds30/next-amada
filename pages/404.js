/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../components/Global/Layout";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error 404</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"404"}>
        <main>
          <div className="main lyt-content">
            <div className="bs-404">
              <div className="content-wrap">
                <div className="icon-wrap">
                  <img
                    src="../assets/images/404.svg"
                    alt="Error 404 Image"
                    title="Error 404 Image"
                  />
                </div>
                <div className="info-wrap">
                  <h3 className="info-title">Error 404</h3>
                  <p className="info-desc">
                    Oops! Some unexpected error has occured.{" "}
                    <span className="cm-line-break">
                      Please try again later
                    </span>
                  </p>
                  <Link href="/">
                    <a className="bs-btn btn-default">Home</a>
                  </Link>
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
