import React, { useState } from 'react'

import { useForm } from "react-hook-form"
import { send } from 'emailjs-com';
import { useGlobalContext } from '../../../hooks/useGlobalContext';

function DownloadBrochureForm(props) {
    const [formData, setFormData] = useState({});
    const [isEmailSent, setIsEmailSent] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { isModalOpen, setIsModalOpen, downloadBrochureUrl, setDownloadBrochureUrl, product, setProduct } = useGlobalContext();
    const onSubmit = (data) => {
        console.log(data)
        console.log('====================================');
        console.log(data, 'check data');
        console.log('====================================');
        let emailForm = {
            customerName: data.fullName,
            email: data.email,
            contactNumber: data.contactNumber,
            companyName: data.companyName,
            city: "",
            state: "",
            address: data.addressType + '-' + data.address,
            machineOfInterest: data.interestedProduct,
            materialThickness: "",
            country: data.country,
            comment: `This data was submitted while downloading ${product} brochure`
        };
        send(
            'service_k14m1og',
            'template_rdx2plt',
            emailForm,
            'M1SwwAw4RFwXXLZL3'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                if (response.status == 200) {
                    if (downloadBrochureUrl) {
                        window.open(downloadBrochureUrl, { target: '_blank' })
                        // setIsEmailSent(true)
                        setFormData({});
                        reset()
                        setDownloadBrochureUrl(null)
                        setIsModalOpen(false)
                        setProduct(null)
                    }
                }
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setIsModalOpen(false)
            });
    }

    return (
        <>
            {
                isModalOpen ?
                    <div className='popup-overlay' style={{
                        background: "rgba(0,0,0,0.6)",
                        position: "fixed",
                        inset: 0,
                        zIndex: 21
                    }}>
                        <div className='popup-card'>
                            <div>
                                {/* <button onClick={() => setIsModalOpen(false)}>Close</button> */}
                                <div className="main js-bg">
                                    {
                                        !isEmailSent ?
                                            <section>
                                                <div className="container content" style={{ width: "100%" }}>
                                                    <h2 style={{ fontSize: "18px", marginBottom: 15, fontWeight: 500 }}>Fill Your Details</h2>
                                                    <div className="sec-cont">
                                                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                                                            <div className="bs-form">
                                                                <div className="form-wrap">
                                                                    <ul className="row">
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <div
                                                                                className={`form-group `}
                                                                            >
                                                                                <label className="field-label typ-req">
                                                                                    Full Name
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="fullName"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Full Name"
                                                                                    onChange={(e) =>
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            fullName: e.target.value,
                                                                                        })
                                                                                    }
                                                                                    value={formData.fullName}
                                                                                    {...register("fullName", {
                                                                                        required: true,
                                                                                    })}
                                                                                />
                                                                                {errors && errors.fullName && (
                                                                                    <div>
                                                                                        {errors.fullName &&
                                                                                            errors.fullName.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Full name is Required !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <div
                                                                                className={`form-group`}
                                                                            >
                                                                                <label className="field-label typ-req">
                                                                                    Company Name
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="company"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Company Name"
                                                                                    value={formData.companyName}
                                                                                    onChange={(e) =>
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            companyName: e.target.value,
                                                                                        })
                                                                                    }
                                                                                    {...register("companyName", {
                                                                                        required: true,
                                                                                    })}
                                                                                />
                                                                                {errors && errors.companyName && (
                                                                                    <div>
                                                                                        {errors.companyName &&
                                                                                            errors.companyName.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Company name is Required !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <label className="field-label typ-req">Select Address type</label>
                                                                            <div
                                                                                className={`form-group radio-wrap`}
                                                                            >
                                                                                <div className="bs-radio">

                                                                                    <input
                                                                                        type="radio"
                                                                                        id='addressType1'
                                                                                        maxLength="10"
                                                                                        name="home"
                                                                                        defaultChecked={true}
                                                                                        value="home"
                                                                                        onChange={(e) =>
                                                                                            // setFormData({
                                                                                            //   ...formData,
                                                                                            //   addressType: e.target.value,
                                                                                            // })
                                                                                            console.log(e.target.value)
                                                                                        }
                                                                                        {...register("addressType", {
                                                                                            required: true,
                                                                                        })}
                                                                                    />
                                                                                    <label htmlFor="addressType1">
                                                                                        <span className="icon icon-radio-uncheck"></span>{" "}
                                                                                        Home
                                                                                    </label>
                                                                                </div>
                                                                                <div className="bs-radio">

                                                                                    <input
                                                                                        type="radio"
                                                                                        id='addressType2'
                                                                                        maxLength="10"
                                                                                        name="company"
                                                                                        value="company"
                                                                                        onChange={(e) =>
                                                                                            setFormData({
                                                                                                ...formData,
                                                                                                addressType: e.target.value,
                                                                                            })
                                                                                        }
                                                                                        {...register("addressType", {
                                                                                            required: true,
                                                                                        })}
                                                                                    />
                                                                                    <label htmlFor="addressType2">
                                                                                        <span className="icon icon-radio-uncheck"></span>{" "}
                                                                                        Company
                                                                                    </label>
                                                                                </div>
                                                                                {errors && errors.addressType && (
                                                                                    <div>
                                                                                        {errors.addressType &&
                                                                                            errors.addressType.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Address type is Required !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}

                                                                            </div>
                                                                        </li>
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <div
                                                                                className={`form-group`}
                                                                            >
                                                                                <label className="field-label typ-req">
                                                                                    Address
                                                                                </label>
                                                                                <input
                                                                                    type="tel"
                                                                                    maxLength="10"
                                                                                    name="address"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Address"
                                                                                    value={formData.address}
                                                                                    onChange={(e) =>
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            address: e.target.value,
                                                                                        })
                                                                                    }
                                                                                    {...register("address", {
                                                                                        required: true,
                                                                                    })}
                                                                                />
                                                                                {errors && errors.address && (
                                                                                    <div>
                                                                                        {errors.address &&
                                                                                            errors.address.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Address is Required !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <div className="form-group">
                                                                                <label className="field-label typ-req">
                                                                                    Country
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="country"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Country"
                                                                                    value={formData.country}
                                                                                    onChange={(e) =>
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            country: e.target.value,
                                                                                        })
                                                                                    }
                                                                                    {...register("country", {
                                                                                        required: true,
                                                                                    })}
                                                                                />
                                                                                {errors && errors.country && (
                                                                                    <div>
                                                                                        {errors.country &&
                                                                                            errors.country.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Country is Required !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <div
                                                                                className={`form-group`}
                                                                            >
                                                                                <label className="field-label typ-req">
                                                                                    Phone Number
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="phone"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Phone Number"
                                                                                    value={formData.contactNumber}
                                                                                    onChange={(e) =>
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            contactNumber: e.target.value,
                                                                                        })
                                                                                    }
                                                                                    {...register("contactNumber", {
                                                                                        required: true,
                                                                                        pattern: /^\d{10}$/,
                                                                                        maxLength: 10,
                                                                                        minLength: 10,
                                                                                    })}
                                                                                />
                                                                                {errors && errors.contactNumber && (
                                                                                    <div>
                                                                                        {errors.contactNumber &&
                                                                                            errors.contactNumber.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Phone Number is Required !
                                                                                                </p>
                                                                                            )}
                                                                                        {errors.contactNumber &&
                                                                                            errors.contactNumber.type ===
                                                                                            "maxLength" && (
                                                                                                <p className="error-text">
                                                                                                    The Phone Number should be 10 digits
                                                                                                    only !
                                                                                                </p>
                                                                                            )}
                                                                                        {errors.contactNumber &&
                                                                                            errors.contactNumber.type ===
                                                                                            "minLength" && (
                                                                                                <p className="error-text">
                                                                                                    The Phone Number should be 10 digits !
                                                                                                </p>
                                                                                            )}
                                                                                        {errors.contactNumber &&
                                                                                            errors.contactNumber.type === "pattern" && (
                                                                                                <p className="error-text">
                                                                                                    The Phone Number should be Integers !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <div
                                                                                className={`form-group`}
                                                                            >
                                                                                <label className="field-label typ-req">
                                                                                    Email
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="email"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Email"
                                                                                    value={formData.email}
                                                                                    onChange={(e) =>
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            email: e.target.value,
                                                                                        })
                                                                                    }
                                                                                    {...register("email", {
                                                                                        required: true,
                                                                                        pattern:
                                                                                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                                                    })}
                                                                                />
                                                                                {errors && errors.email && (
                                                                                    <div>
                                                                                        {errors.email &&
                                                                                            errors.email.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Email is Required !
                                                                                                </p>
                                                                                            )}
                                                                                        {errors.email &&
                                                                                            errors.email.type === "pattern" && (
                                                                                                <p className="error-text">
                                                                                                    The Email is Invalid !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                        <li className="col-md-6 col-xs-12">
                                                                            <div
                                                                                className={`form-group`}
                                                                            >
                                                                                <label className="field-label typ-req">
                                                                                    Interested Product
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="interestedProduct"
                                                                                    className="form-control"
                                                                                    placeholder="Enter Interested Product"
                                                                                    value={formData.interestedProduct}
                                                                                    onChange={(e) =>
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            interestedProduct: e.target.value,
                                                                                        })
                                                                                    }
                                                                                    {...register("interestedProduct", {
                                                                                        required: true,
                                                                                    })}
                                                                                />
                                                                                {errors && errors.interestedProduct && (
                                                                                    <div>
                                                                                        {errors.interestedProduct &&
                                                                                            errors.interestedProduct.type === "required" && (
                                                                                                <p className="error-text">
                                                                                                    Please enter your interested product !
                                                                                                </p>
                                                                                            )}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="form-action">
                                                                    <button type="submit" className="bs-btn btn-default">submit</button>
                                                                    <button type="reset" onClick={() => { setIsModalOpen(false); setProduct(null); setDownloadBrochureUrl(null) }} className="bs-btn btn-icon-link">cancel</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </section>
                                            :
                                            <section>
                                                <div className="container content" style={{ width: "100%" }}>
                                                    <h4 style={{ fontSize: "18px", marginBottom: 60, marginTop: 60, fontWeight: 500, textAlign: "center" }}>Brochure download url is sent to the given email id</h4>
                                                    <div className="sec-cont" style={{ textAlign: "center" }}>
                                                        <div className="form-action">
                                                            <button type="submit" onClick={() => { setIsModalOpen(false); setIsEmailSent(false) }} className="bs-btn btn-default">OK</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default DownloadBrochureForm