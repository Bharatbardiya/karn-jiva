import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Fragment } from "react";
import Sidebar from "./Sidebar";

const ContactDetails = () => {
	const [contactData, setContactData] = useState([]);
	const [deleteData, setDeleteData] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	useEffect(() => {
		getData();
	}, [deleteData]);

	const getData = async () => {
		try {
			const { data } = await axios.get("/api/v1/admin/findContact");
			setContactData(data?.contact);
			console.log(contactData);
		} catch (err) {}
	};
	const deleteOrderHandler = async (id) => {
		try {
			const { data } = await axios.delete(
				`/api/v1/admin/deleteContact/${id}`
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
					label: "Phone Number",
					field: "phoneNo",
				},
				{
					label: "Email",
					field: "email",
				},
				{
					label: "Actions",
					field: "actions",
				},
			],
			rows: [],
		};
		contactData?.forEach((contact) => {
			data.rows.push({
				name: contact?.name,
				email: contact?.email,
				phoneNo: contact?.phoneNo,
				// message: contact.message ,
				// : order.orderItems.length,
				// amount: `Rs ${order.totalPrice}`,
				// status: order.orderStatus && String(order.orderStatus).includes('Delivered')
				//     ? <p style={{ color: 'green' }}>{order.orderStatus}</p>
				//     : <p style={{ color: 'red' }}>{order.orderStatus}</p>,
				actions: (
					<Fragment>
						<Link className="btn btn-primary py-1 px-2" onClick={() => setShow(true)}>
							<i className="fa fa-eye"></i>
						</Link>
							<Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
								<Modal.Header closeButton>
									<Modal.Title>Message</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									{contact?.message}
								</Modal.Body>
								<Modal.Footer>
									<Button
										variant="secondary"
										onClick={() => setShow(false)}
									>
										Close
									</Button>
									
								</Modal.Footer>
							</Modal>
						<button
							className="btn btn-danger py-1 mx-2 px-2 ml-2"
							onClick={() => deleteOrderHandler(contact._id)}
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
			<div className="row" style={{ marginBottom:"80px"}}>
				<Sidebar />
				<div className="col-12 col-lg-9 col-xl-10">
					<Fragment>
						<h1 className="my-3">All Contact Details</h1>

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

export default ContactDetails;
