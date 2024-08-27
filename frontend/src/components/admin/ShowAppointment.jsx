import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Fragment } from "react";
import Sidebar from "./Sidebar";

const ShowAppointments = () => {
	const [appointmentData, setAppointmentData] = useState([]);
	const [userData, setUserData] = useState([]);
	const [deleteData, setDeleteData] = useState(false);
	const navigate = useNavigate();
	

	const handleShow = (status, index) => {
		setShow((prevArray) => {
			const newArray = [...prevArray];
			newArray[index] = status;
			return newArray;
		});
	};
	useEffect(() => {
		getData();
		// setShow(Array(appointmentData.length).fill(false));
	}, [deleteData]);
	const [show, setShow] = useState([]);

	const handleStatus = async (email, status) => {
		console.log("email",email)
		// console.log(typeof formData["Date1"]);
		// event.preventDefault();
		console.log(email);
		

		console.log(email);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		// console.log(appointmentType)
		// let payload = { formData };
		try {
			if (email ) {
				const { result } = await axios.post(
					`/api/v1/AppointmentStatus`,
					{email , status},
					config
				);
				alert("appointment status has been sent");
				navigate("/");
			}
		} catch (e) {
			alert("error");
		}
	};

	const getData = async () => {
		try {
			const { data } = await axios.get("/api/v1/admin/findAppointment");
			console.log(data);
			setAppointmentData(data?.appointment);
			console.log("appointmentData", appointmentData);
		} catch (err) {}
	};
	const deleteOrderHandler = async (id) => {
		try {
			const { data } = await axios.delete(
				`/api/v1/admin/deleteAppointment/${id}`
			);
			setDeleteData(!deleteData);
		} catch (err) {}
	};
	const setOrders = () => {
		const data = {
			columns: [
				{
					label: "Name",
					field: "name",
				},
				{
					label: "Appointment Type",
					field: "appointmentType",
				},
				{
					label: "Email",
					field: "email",
				},
				{
					label: "Date",
					field: "time",
				},
				{
					label: "Actions",
					field: "actions",
				},
			],
			rows: [],
		};
		appointmentData?.forEach((appoint, index) => {
			let date1 = new Date(appoint?.fromDate);
			let date2 = new Date(appoint?.toDate);
			data.rows.push({
				name: appoint?.name,
				email: appoint?.email,
				appointmentType: appoint?.serviceType,
				time:
					date1.toLocaleDateString() +
					" to " +
					date2.toLocaleDateString(),
				actions: (
					<Fragment>
						<Link
							className="btn btn-primary py-1 px-2"
							onClick={() => handleShow(true, index)}
						>
							<i className="fa fa-eye"></i>
						</Link>
						<Modal
							show={show[index]}
							onHide={() => handleShow(false, index)}
							size="lg"
							aria-labelledby="contained-modal-title-vcenter"
							centered
						>
							<Modal.Header closeButton>
								<Modal.Title>Message</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<p>User Name : {appoint?.loginUser}</p>
								<p>User Email : {appoint?.loginEmail}</p>
								<p>Name : {appoint?.name}</p>
								<p>Email : {appoint?.email}</p>
								<p>phone no : {appoint?.phoneNo}</p>
								<p>Message : {appoint?.message}</p>
							</Modal.Body>
							<Modal.Footer>
								<Button
									variant="primary"
									onClick={() =>
										handleStatus(appoint?.email, true)
									}
								>
									Accept
								</Button>
								<Button
									variant="primary"
									onClick={() =>
										handleStatus(appoint?.email, false)
									}
								>
									Reject
								</Button>
								<Button
									variant="secondary"
									onClick={() => handleShow(false, index)}
								>
									Close
								</Button>
							</Modal.Footer>
						</Modal>
						<button
							className="btn btn-danger py-1 mx-2 px-2 ml-2"
							onClick={() => deleteOrderHandler(appoint._id)}
						>
							<i className="fa fa-trash"></i>
						</button>
					</Fragment>
				),
			});
		});

		return data;
	};
	return (
		<Fragment>
			<div className="row" style={{ marginBottom: "80px" }}>
				<Sidebar />
				<div className="col-12 col-lg-9 col-xl-10">
					<Fragment>
						<h1 className="my-3">All Appointments</h1>
						{
							<MDBDataTable
								data={setOrders()}
								className="px-3"
								bordered
								striped
								hover
							/>
						}
					</Fragment>
				</div>
			</div>
		</Fragment>
	);
};

export default ShowAppointments;
