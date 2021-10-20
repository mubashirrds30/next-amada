/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import lozad from "lozad";
import { useFormik } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MessageAlert from "../../components/Misc/MessageAlert";
const { REACT_APP_BASE_URL } = process.env;
import Head from "next/head";
import Layout from "../../components/Global/Layout";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import moment from "moment";

const Contact = () => {
  const [activeSuccess, setActiveSuccess] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);

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
      trainingCourseCode: "",
      preferredDate: "",
      numberOfParticipants: "",
      clientType: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "The Name is Required !";
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
      } else if (values.contactNumber.length < 10) {
        errors.contactNumber = "The Contact Number should be 10 digits only!!";
      } else if (values.contactNumber.length > 10) {
        errors.contactNumber = "The Contact Number should be 10 digits only!!";
      }
      if (!values.companyName) {
        errors.companyName = "The Company Name is Required !";
      }

      if (!values.city) {
        errors.city = "City is Required !";
      }

      if (!values.preferredDate) {
        errors.preferredDate = "Preferred date is Required!";
      }
      if (!values.numberOfParticipants) {
        errors.numberOfParticipants = "Number of Participants is Required !";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      let pDate = moment(values.preferredDate).format("DD/MM/YYYY");
      let newForm = {
        name: values.name,
        email: values.email,
        contactNumber: values.contactNumber,
        companyName: values.companyName,
        city: values.city,
        trainingCourseCode: values.trainingCourseCode,
        preferredDate: pDate,
        numberOfParticipants: values.numberOfParticipants,
        clientType: values.clientType,
      };
      fetch(`${REACT_APP_BASE_URL}/technical-center-contact-forms`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(newForm, null, 2),
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
        <title>Contact</title>
        <link rel="icon" href="../static/favicon.ico" />
      </Head>
      <Layout activeLink={"Technical Center"}>
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
                    <a href="#" className="link">
                      Technical centre
                    </a>
                  </li>
                  <li className="item">Contact</li>
                </ul>
              </div>
            </div>
            <section>
              <div className="bs-section">
                <div className="container">
                  <div className="sec-cont">
                    <ul className="bs-chain-info typ-img-lg typ-address">
                      <li className="item">
                        <div className="bs-img-desc">
                          <div className="left-side">
                            <h2 className="title">AMADA MIDDLE EAST FZCO</h2>
                            <div className="img-wrap">
                              <img
                                className="lozad"
                                src="/assets/images/amada-india-m.jpg"
                                alt="amada-india-m"
                              />
                            </div>
                            <div className="sec-desc">
                              <p>
                                P.O no 18735,
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
                                  <a href="https://amada.ae">
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
                                src="/assets/images/amada-india-m.jpg"
                                alt="amada-india-m"
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
                  <div className="sec-head">
                    <h2 className="sec-title">
                      For booking
                      <span className="cm-line-break">Training Course</span>
                    </h2>
                  </div>
                  <div className="sec-cont">
                    <form className="lyt-form" onSubmit={formik.handleSubmit}>
                      <div className="bs-form">
                        <div className="form-wrap">
                          <ul className="row">
                            <li className="col-md-12 col-xs-12">
                              <div className="form-group">
                                <div className="radio-wrap">
                                  <div className="bs-radio">
                                    <input
                                      type="radio"
                                      value="customer"
                                      name="clientType"
                                      id="customer"
                                      checked={
                                        formik.values.clientType === "customer"
                                      }
                                      onChange={formik.handleChange}
                                    />
                                    <label htmlFor="customer">
                                      <span className="icon icon-radio-uncheck"></span>
                                      Customer
                                    </label>
                                  </div>
                                  <div className="bs-radio">
                                    <input
                                      type="radio"
                                      value="individual"
                                      name="clientType"
                                      id="individual"
                                      checked={
                                        formik.values.clientType ===
                                        "individual"
                                      }
                                      onChange={formik.handleChange}
                                    />
                                    <label htmlFor="individual">
                                      <span className="icon icon-radio-uncheck"></span>
                                      Individual
                                    </label>
                                  </div>
                                  <div className="bs-radio">
                                    <input
                                      type="radio"
                                      value="student"
                                      name="clientType"
                                      id="student"
                                      checked={
                                        formik.values.clientType === "student"
                                      }
                                      onChange={formik.handleChange}
                                    />
                                    <label htmlFor="student">
                                      <span className="icon icon-radio-uncheck"></span>
                                      Student
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
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
                                  name="name"
                                  type="text"
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
                                  type="email"
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
                                  placeholder="Enter City Name"
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
                                  formik.touched.trainingCourseCode &&
                                  formik.errors.trainingCourseCode
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label">
                                  Training Course Code
                                </label>

                                <div className="bs-select">
                                  <select
                                    id="selectField"
                                    name="trainingCourseCode"
                                    className="form-control"
                                    placeholder="Enter Training Course Code"
                                    value={formik.values.trainingCourseCode}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                  >
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                  {formik.touched.trainingCourseCode &&
                                  formik.errors.trainingCourseCode ? (
                                    <p className="error-text">
                                      {formik.errors.trainingCourseCode}
                                    </p>
                                  ) : null}
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul className="row">
                            <li className="col-md-6 col-xs-12">
                              <div className="form-group">
                                <label className="field-label typ-req">
                                  Preferred Date
                                </label>

                                <ReactDatePicker
                                  name="preferredDate"
                                  className="input form-control"
                                  placeholderText="Select date"
                                  autoComplete="off"
                                  dateFormat="dd/MM/yyyy"
                                  minDate={subDays(new Date(), -1)}
                                  maxDate={addDays(new Date(), 365)}
                                  onChange={(date) => {
                                    formik.setFieldValue("preferredDate", date);
                                  }}
                                  selected={formik.values.preferredDate}
                                  strictParsing
                                />
                              </div>
                            </li>
                            <li className="col-md-6 col-xs-12">
                              <div
                                className={`${
                                  formik.touched.numberOfParticipants &&
                                  formik.errors.numberOfParticipants
                                    ? "form-group error"
                                    : "form-group"
                                }`}
                              >
                                <label className="field-label typ-req">
                                  Number of Participants
                                </label>
                                <input
                                  name="numberOfParticipants"
                                  className="form-control"
                                  placeholder="Enter Number of Participants"
                                  value={formik.values.numberOfParticipants}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.numberOfParticipants &&
                                formik.errors.numberOfParticipants ? (
                                  <p className="error-text">
                                    {formik.errors.numberOfParticipants}
                                  </p>
                                ) : null}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="form-action">
                          <button className="bs-btn btn-default" type="submit">
                            submit
                          </button>
                          <button
                            className="bs-btn btn-icon-link"
                            type="reset"
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
      </Layout>
    </>
  );
};

export default Contact;
