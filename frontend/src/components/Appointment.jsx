import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast from "react-hot-toast";
var {validate, res} = require("react-email-validator")


const Appointment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, loading } = useSelector(
        (state) => state.auth
    );
    const [formData, setFormData] = useState({
        Name: "",
        PhoneNo: "",
        Email: "",
        Date1: "",
        Date2: "",
        Service: "",
        Message: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        // console.log(formData);
    };
    const validateForm = (formData) => {
        let isValid = true;
        let validationMessage = "";
        if (formData["Name"] === "") {
            validationMessage += "Name is required\n";
            isValid = false;
        }
        if (formData["PhoneNo"] === "") {
            validationMessage += "Phone Number is required\n";
            isValid = false;
        }
        if (formData["Email"] === "") {
            validationMessage += "Email is required\n";
            isValid = false;
        }
        if (formData["Date1"] === "") {
            validationMessage += "Date is required\n";
            isValid = false;
        }
        if (formData["Date2"] === "") {
            validationMessage += "Date is required\n";
            isValid = false;
        }
        if (formData["Service"] === "" || formData["Service"] === "select") {
            validationMessage += "Service is required\n";
            isValid = false;
        }
        if (formData["Message"] === "") {
            validationMessage += "Message is required\n";
            isValid = false;
        }
        res = validate(formData["Email"])
        if (!res) {
            validationMessage += "Email is not valid\n";
            isValid = false;
        }
        if (String(formData["PhoneNo"]).length < 10) {
            validationMessage += "Phone Number is not valid\n";
            isValid = false;
        }
        if (!isValid) {
            toast.error(validationMessage);
            return false;
        }
        return true;
    }
    const handleSubmit = async (event) => {
        console.log(typeof formData["Date1"])
        event.preventDefault();
        if (!validateForm(formData)){
            return;
        }

        console.log(formData);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        // console.log(appointmentType)
        let payload = { user, formData };
        try {
            if (formData) {
                const { result } = await axios.post(
                    `/api/v1/bookAppointment`,
                    payload,
                    config
                );
                alert("appointment request has been sent successfully.")
                navigate("/");
            }
        } catch (e) {
            alert("error");
        }
    };
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated]);

    return (
        <Fragment>
            <div style={{}}></div>
            <div className="container">
                <div className="row" style={{ marginBottom: "100px" }}>
                    <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
                        <div className="col-12">
                            <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">
                                Appointment form
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        name="Name"
                                        className="form-control"
                                        placeholder="Name"
                                        value={formData["Name"]}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="tel"
                                        name="PhoneNo"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        required
                                        value={formData["PhoneNo"]}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        required
                                        value={formData["Email"]}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>From</label>
                                    <input
                                        type="date"
                                        name="Date1"
                                        className="form-control"
                                        placeholder="Enter Date"
                                        required
                                        value={formData["Date1"]}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>To</label>
                                    <input
                                        type="date"
                                        name="Date2"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        required
                                        value={formData["Date2"]}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <select
                                        className="form-select"
                                        name="Service"
                                        required
                                        value={formData["Service"]}
                                        onChange={handleChange}
                                        defaultValue={"service 1"}
                                    >
                                        <option value={"select"} defaultChecked>
                                            Select Service
                                        </option>
                                        <option value={"Hearing Assessment & Hearing Aids"}>
                                        Hearing Assessment & Hearing Aids 

                                        </option>
                                        <option value={"Speech Therapy"}>
                                            Speech Therapy
                                        </option>
                                        <option value={"Occupational Therapy"}>
                                            Occupational Therapy
                                        </option>
                                        <option value={"Vestibular Evaluation & Rehabilitation "}>
                                        Vestibular Evaluation & Rehabilitation 
                                        </option>
                                        <option value={"ABA Therapy / Behavioral Therapy"}>
                                        ABA Therapy / Behavioral Therapy
                                        </option>
                                        <option value={"⁠Psychological Evaluation"}>
                                        ⁠Psychological Evaluation 
                                        </option>
                                        <option value={"Physiotherapy "}>
                                        Physiotherapy 
                                        </option>
                                        <option value={"Special Education "}>
                                        Special Education
                                        </option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea
                                        name="Message"
                                        className="form-control"
                                        placeholder="Message"
                                        required
                                        value={formData["Message"]}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 mt-5">
                                    <button
                                        type="submit"
                                        className="btn btn-primary float-end"
                                    >
                                        Book Appointment
                                    </button>
                                    <Link
                                        type="button"
                                        className="btn btn-outline-secondary float-end me-2"
                                        to={"/"}
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Appointment;
