import { useFormik } from "formik";
import lozad from "lozad";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MessageAlert from "../../components/Misc/MessageAlert";
const { REACT_APP_BASE_URL } = process.env;
import Layout from "../../components/Global/Layout";
import Head from "next/head";
import { BreadcrumbJsonLd } from 'next-seo';


const Enquiry = () => {
  const [activeSuccess, setActiveSuccess] = useState(false);

  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      companyName: "",
      city: "",
      state: "",
      machineOfInterest: "",
      materialThickness: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "The Customer Name is Required !";
      }

      if (!values.email) {
        errors.email = "Email is Required !";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "The Email is Invalid !";
      }

      if (!values.contactNumber) {
        errors.contactNumber = "Contact Number is Required !";
      } else if (values.contactNumber.length > 10) {
        errors.contactNumber = "The Contact Number should be 10 digits only!";
      } else if (values.contactNumber.length < 10) {
        errors.contactNumber = "The Contact Number should be 10 digits only!";
      }

      if (!values.companyName) {
        errors.companyName = "Company Name is Required !";
      }

      if (!values.city) {
        errors.city = "City is Required !";
      }

      if (!values.state) {
        errors.state = "State is Required !";
      }

      if (!values.materialThickness) {
        errors.materialThickness = "Material Thickness is Required !";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      values.machineOfInterest = values.machineOfInterest.join();
      // alert(JSON.stringify(values, null, 2));
      fetch(`${REACT_APP_BASE_URL}/enquiry-forms`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
        redirect: "follow",
      })
        .then((response) => response.text())
        .then((result) => {
          if (result) {
            setActiveSuccess(true);
            resetForm();
            setTimeout(() => {
              setActiveSuccess(false);
            }, 3000);
          }
        })
        .catch((error) => console.log("error", error));
    },
  });

  return (
    <>
      <Head>
        <title>Enquiry</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"Contact"}>
        <main>
          <div className="main lyt-content js-bg">
            <div
              className="bs-banner typ-sm lozad-background lozad"
              data-background-image="/assets/images/csr-banner.jpg"
            >
              <div className="banner-title-wrap">
                <h2 className="banner-title">contact us</h2>
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
                      contact us
                    </a>
                  </li>
                  <li className="item">enquiry</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-head">
                    <h2 className="sec-title">Enquiry</h2>
                  </div>
                  <div className="sec-cont">
                    <form className="lyt-form" onSubmit={formik.handleSubmit}>
                      <div className="bs-form">
                        <div className="form-wrap">
                          <ul className="row">
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.name && formik.errors.name
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  Customer Name
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Enter Customer Name"
                                  value={formik.values.name}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                  <p className="error-text">
                                    {formik.errors.name}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.email && formik.errors.email
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  Email
                                </label>
                                <input
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  placeholder="Enter Email"
                                  value={formik.values.email}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                  <p className="error-text">
                                    {formik.errors.email}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                          </ul>
                          <ul className="row">
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.contactNumber &&
                                  formik.errors.contactNumber
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  Contact Number
                                </label>
                                <input
                                  type="tel"
                                  maxLength="10"
                                  name="contactNumber"
                                  className="form-control"
                                  placeholder="Enter Contact Number"
                                  value={formik.values.contactNumber}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.contactNumber &&
                                formik.errors.contactNumber ? (
                                  <p className="error-text">
                                    {formik.errors.contactNumber}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.companyName &&
                                  formik.errors.companyName
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  name="companyName"
                                  className="form-control"
                                  placeholder="Enter Company Name"
                                  value={formik.values.companyName}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.companyName &&
                                formik.errors.companyName ? (
                                  <p className="error-text">
                                    {formik.errors.companyName}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                          </ul>
                          <ul className="row">
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.city && formik.errors.city
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  City
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  className="form-control"
                                  placeholder="Enter City"
                                  value={formik.values.city}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.city && formik.errors.city ? (
                                  <p className="error-text">
                                    {formik.errors.city}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.state && formik.errors.state
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  State
                                </label>
                                <input
                                  type="text"
                                  name="state"
                                  className="form-control"
                                  placeholder="Enter State"
                                  value={formik.values.state}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.state && formik.errors.state ? (
                                  <p className="error-text">
                                    {formik.errors.state}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                          </ul>
                          <ul className="row">
                            <li className="col-md-6 col-xs-12">
                              <div className="form-group">
                                <label className="field-label">
                                  Machine of Interest
                                </label>
                                <div className="radio-wrap">
                                  <div className="bs-check">
                                    <input
                                      type="checkbox"
                                      value="punching"
                                      name="machineOfInterest"
                                      id="punching"
                                      onChange={formik.handleChange}
                                    />
                                    <label htmlFor="punching">
                                      <span className="icon icon-uncheck"></span>
                                      Punching
                                    </label>
                                  </div>
                                  <div className="bs-check">
                                    <input
                                      type="checkbox"
                                      value="bending"
                                      name="machineOfInterest"
                                      id="bending"
                                      onChange={formik.handleChange}
                                    />
                                    <label htmlFor="bending">
                                      <span className="icon icon-uncheck"></span>
                                      Bending
                                    </label>
                                  </div>
                                  <div className="bs-check">
                                    <input
                                      type="checkbox"
                                      value="laser"
                                      name="machineOfInterest"
                                      id="laser"
                                      onChange={formik.handleChange}
                                    />
                                    <label htmlFor="laser">
                                      <span className="icon icon-uncheck"></span>
                                      Laser
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.materialThickness &&
                                  formik.errors.materialThickness
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  Material Thickness
                                </label>
                                <input
                                  type="text"
                                  name="materialThickness"
                                  className="form-control"
                                  placeholder="Enter Material Thickness"
                                  value={formik.values.materialThickness}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.materialThickness &&
                                formik.errors.materialThickness ? (
                                  <p className="error-text">
                                    {formik.errors.materialThickness}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="form-action">
                          <button type="submit" className="bs-btn btn-default">
                            submit
                          </button>
                          <button
                            type="reset"
                            className="bs-btn btn-icon-link"
                            onClick={formik.resetForm}
                          >
                            reset
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <MessageAlert activeSuccess={activeSuccess} />;
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
            name: 'contact us',
            item: `https://www.amada.ae/contact/enquiry`,
          },
          {
            position: 3,
            name: '>enquiry',
            item: `https://www.amada.ae/contact/enquiry`,
          },
        ]}
      />
      </Layout>
    </>
  );
};

export default Enquiry;
