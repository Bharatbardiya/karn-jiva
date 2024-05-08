import React, { Fragment, useState } from "react";
import axios from "axios";

const Contact = () => {
	const [name, setName] = useState();
	const [message, setMessage] = useState();
	const [email, setEmail] = useState();
	const [phoneNo, setPhoneNo] = useState();
	const submitHandler = async (e) => {
		e.preventDefault();
		if (
			name === undefined ||
			message === undefined ||
			email === undefined ||
			phoneNo === undefined
		) {
			alert("All fields are required");
			return;
		}
		let data = { name, message, email, phoneNo };
		console.log(data);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const { result } = await axios.post(
				`/api/v1/addContact`,
				data,
				config
			);
		} catch (e) {
			alert("error");
		}
	};
	return (
		<Fragment>
			<div className="brand_color">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="titlepage">
								<h2>Contact Us</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* contact */}
			<div className="contact">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<form className="main_form">
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
										<input
											className="form-control"
											placeholder="Your name"
											type="text"
											name="Your Name"
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
											required
										/>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <input
											className="form-control"
											placeholder="Email"
											type="text"
											name="Email"
                      value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
									</div>
									<div className=" col-md-12">
										<input
											className="form-control"
											placeholder="Phone"
											type="text"
											name="Phone"
                      value={phoneNo}
											onChange={(e) => setPhoneNo(e.target.value)}
											required
										/>
									</div>
									<div className="col-md-12">
										<textarea
											className="textarea"
											placeholder="Message"
											defaultValue={""}
                      value={message}
												onChange={(e) => setMessage(e.target.value)}
												required
										/>
									</div>
									<div className=" col-md-12">
										<button className="send" onClick={submitHandler}>Send</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* end contact */}
		</Fragment>
	);
};
export default Contact;
