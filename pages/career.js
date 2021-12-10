/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import { useFormik } from "formik";
import lozad from "lozad";
import moment from "moment";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  default as getDay,
  default as ReactDatePicker,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "../components/Global/Layout";
import MessageAlert from "../components/Misc/MessageAlert";
const { REACT_APP_BASE_URL } = process.env;
import { BreadcrumbJsonLd } from 'next-seo';


function Career() {
  const [activeSuccess, setActiveSuccess] = useState(false);

  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      maritalStatus: "",
      city: "",
      mobileNumber: "",
      name: "",
      currentLocation: "",
      address: "",
      phoneNumber: "",
      educationDetails: "",
      dateOfBirth: "",
      workExperience: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "The Name is Required !";
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = "Phone Number is Required !";
      } else if (values.phoneNumber.length < 10) {
        errors.phoneNumber = " The Phone Number should be 10 digits !";
      } else if (values.phoneNumber.length > 10) {
        errors.phoneNumber = " The Phone Number should be 10 digits !";
      } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
        errors.phoneNumber = " The Phone Number should be Integers";
      }

      if (!values.address) {
        errors.address = "Address is Required !";
      }
      if (!values.city) {
        errors.city = "City is Required !";
      }
      if (!values.educationDetails) {
        errors.educationDetails = "Education details are Required !";
      }

      if (!values.email) {
        errors.email = "Email is Required !";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "The Email is Invalid !";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      let dob = moment(values.dateOfBirth).format("DD/MM/YYYY");
      let newForm = {
        email: values.email,
        maritalStatus: values.maritalStatus,
        city: values.city,
        mobileNumber: values.mobileNumber,
        name: values.name,
        currentLocation: values.currentLocation,
        address: values.address,
        phoneNumber: values.phoneNumber,
        educationDetails: values.educationDetails,
        dateOfBirth: dob,
        workExperience: values.workExperience,
      };
      fetch(`${REACT_APP_BASE_URL}/career-forms`, {
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
      <Layout activeLink={"Career"}>
        <div className="main lyt-content js-bg">
          <div
            className="bs-banner typ-sm lozad-background lozad"
            data-background-image="assets/images/banner/career-banner.jpg"
          >
            <div className="banner-title-wrap">
              <h2 className="banner-title">careers</h2>
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
                <li className="item">careers</li>
              </ul>
            </div>
          </div>
          <section>
            <div className="bs-section">
              <div className="container">
                <div className="sec-cont">
                  <ul className="bs-chain-info typ-img-lg">
                    <li className="item">
                      <div className="bs-img-desc">
                        <div className="left-side">
                          <h2 className="title">Work with US</h2>
                          <div className="img-wrap">
                            <img
                              className="lozad"
                              data-src="assets/images/career.jpg"
                            />
                          </div>
                          <div className="sec-desc">
                            <p>
                              AMADA MIDDLE EAST FZCO is a wholly owned
                              subsidiary of Amada Co. Ltd. Japan. We are one of
                              the leading supplier of metal working machinery in
                              UAE.
                            </p>
                            <p>
                              We are looking for bright & proactive engineers
                              for below roles.
                            </p>
                            <ul className="mod-list typ-main">
                              <li className="item">Sales Engineers</li>
                              <li className="item">Service Engineers</li>
                              <li className="item">
                                Customer Support Engineers – Software.
                              </li>
                            </ul>
                            <p>
                              Please submit your resume @{" "}
                              <a href="mailto:info@amada.ae">info@amada.ae</a>
                            </p>
                          </div>
                        </div>
                        <div className="right-side">
                          <div className="img-wrap">
                            <img
                              className="lozad"
                              data-src="assets/images/career.jpg"
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
                  <h2 className="sec-title">drop a resume</h2>
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
                                Name
                              </label>
                              <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
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
                                name="email"
                                type="email"
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
                            <div className="form-group">
                              <label className="field-label">
                                Date of Birth
                              </label>
                              <ReactDatePicker
                                name="dateOfBirth"
                                dateFormat="dd/MM/yyyy"
                                className="input form-control"
                                placeholderText="Select date"
                                minDate={subDays(new Date(), 36500)}
                                maxDate={addDays(new Date(), -6570)}
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                autoComplete="off"
                                selected={
                                  formik.values
                                    ? formik.values.dateOfBirth
                                    : null
                                }
                                onChange={(date) => {
                                  formik.setFieldValue("dateOfBirth", date);
                                }}
                                strictParsing
                              />
                            </div>
                          </li>
                          <li className="col-md-6 col-xs-12">
                            <div className="form-group">
                              <label className="field-label">
                                Marital Status
                              </label>
                              <div className="radio-wrap">
                                <div className="bs-radio">
                                  <input
                                    name="maritalStatus"
                                    type="radio"
                                    id="married"
                                    value="married"
                                    checked={
                                      formik.values.maritalStatus === "married"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="married">
                                    <span className="icon icon-radio-uncheck"></span>{" "}
                                    Married
                                  </label>
                                </div>
                                <div className="bs-radio">
                                  <input
                                    type="radio"
                                    name="maritalStatus"
                                    id="single"
                                    value="single"
                                    checked={
                                      formik.values.maritalStatus === "single"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor="single">
                                    <span className="icon icon-radio-uncheck"></span>{" "}
                                    Single
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="row">
                          <li className="col-md-12 col-xs-12">
                            <div
                              className={`${
                                formik.touched.address && formik.errors.address
                                  ? "form-group error"
                                  : "form-group"
                              }`}
                            >
                              <label className="field-label typ-req">
                                Address
                              </label>
                              <textarea
                                name="address"
                                className="form-control"
                                rows="4"
                                cols="50"
                                placeholder="Enter Address"
                                value={formik.values.address}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                              >
                                {formik.touched.address &&
                                formik.errors.address ? (
                                  <p className="error-text">
                                    {formik.errors.address}
                                  </p>
                                ) : null}
                              </textarea>
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
                                name="city"
                                type="text"
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
                            <div className="form-group">
                              <label className="field-label">
                                Current Location
                              </label>
                              <input
                                name="currentLocation"
                                type="text"
                                className="form-control"
                                placeholder="Enter Current Location"
                                value={formik.values.currentLocation}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </li>
                        </ul>
                        <ul className="row">
                          <li className="col-md-6 col-xs-12">
                            <div
                              className={`${
                                formik.touched.phoneNumber &&
                                formik.errors.phoneNumber
                                  ? "form-group error"
                                  : "form-group"
                              }`}
                            >
                              <label className="field-label typ-req">
                                Phone Number
                              </label>
                              <input
                                name="phoneNumber"
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone Number"
                                value={formik.values.phoneNumber}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                              />
                              {formik.touched.phoneNumber &&
                              formik.errors.phoneNumber ? (
                                <p className="error-text">
                                  {formik.errors.phoneNumber}
                                </p>
                              ) : null}
                            </div>
                          </li>
                          <li className="col-md-6 col-xs-12">
                            <div className="form-group">
                              <label className="field-label">
                                Mobile Number
                              </label>
                              <input
                                name="mobileNumber"
                                type="text"
                                className="form-control"
                                placeholder="Enter Mobile Number"
                                value={formik.values.mobileNumber}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </li>
                        </ul>
                        <ul className="row">
                          <li className="col-md-12 col-xs-12">
                            <div
                              className={`${
                                formik.touched.educationDetails &&
                                formik.errors.educationDetails
                                  ? "form-group error"
                                  : "form-group"
                              }`}
                            >
                              <label className="field-label">
                                Educational Details
                              </label>
                              <textarea
                                name="educationDetails"
                                className="form-control"
                                rows="4"
                                cols="50"
                                placeholder="Enter Educational Details"
                                value={formik.values.educationDetails}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                              ></textarea>
                              {formik.touched.educationDetails &&
                              formik.errors.educationDetails ? (
                                <p className="error-text">
                                  {formik.errors.educationDetails}
                                </p>
                              ) : null}
                            </div>
                          </li>
                          <li className="col-md-12 col-xs-12">
                            <div className="form-group">
                              <label className="field-label">
                                Work Experience
                              </label>
                              <textarea
                                name="workExperience"
                                className="form-control"
                                rows="4"
                                cols="50"
                                placeholder="Enter Work Experience"
                                value={formik.values.workExperience}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                              ></textarea>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="form-action">
                        <button className="bs-btn btn-default" type="submit">
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
      </Layout>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'amada',
            item: `https://www.amada.ae/`,
          },
          {
            position: 2,
            name: 'career',
            item: `https://www.amada.ae/career`,
          },
        ]}
      />
    </>
  );
}

export default Career;
