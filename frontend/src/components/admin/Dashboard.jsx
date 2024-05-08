import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";



const Dashboard = () => {
	
    const [appointmentData, setAppointmentData] = useState([]);
	const [contactData, setContactData] = useState([]);
	const [allUserData, setAllUserData] = useState([]);
	const [allBlogData, setBlogData] = useState([]);

	useEffect(() => {
		getData();
        deleteData();
        getUserData();
        getBlogData();
	}, []);

	const getData = async () => {
		try {
			const { data } = await axios.get("/api/v1/admin/findAppointment");
			console.log(data);
			setAppointmentData(data?.appointment);
			console.log(appointmentData);
		} catch (err) {}
	};
	const getUserData = async () => {
		try {
			const { data } = await axios.get("/api/v1/count-user");
			console.log(data);
			setAllUserData(data?.count);
			// console.log(appointmentData);
		} catch (err) {}
	};
	const getBlogData = async () => {
		try {
			const { data } = await axios.get("/api/v1/countBlog");
			console.log(data);
			setBlogData(data);
			// console.log(appointmentData);
		} catch (err) {}
	};
   

	const deleteData = async () => {
		try {
			const { data } = await axios.get("/api/v1/admin/findContact");
			setContactData(data?.contact);
			console.log(contactData);
		} catch (err) {}
	};
    return (
<div className="container-fluid" style={{marginTop:"150px", marginBottom:"80px"}} >
            <div className="row">
                <Sidebar />
                <div className="col-12 col-lg-9 col-xl-10">
                    <div className="row">
                        <div className="col-12">
                            <div className="card my-3 me-4 bg-primary-subtle">
                                <div className="card-body">
                                    <h3 className="card-title">Dashboard</h3>
                                    {/* <p className="card-text">
                                        {allUserData}
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card my-2 bg-success-subtle">
                                    <div className="card-body">
                                        <h5 className="card-title">Contact Forms</h5>
                                        <p className="card-text">
                                            {contactData?.length}
                                        </p>
                                        <Link
                                            to="/admin/contact"
                                            className="btn btn-primary"
                                        >
                                            View{" "}
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card my-2 bg-warning-subtle">
                                    <div className="card-body">
                                        <h5 className="card-title">Appointments</h5>
                                        <p className="card-text">
                                            {appointmentData?.length}
                                        </p>
                                        <Link
                                            to="/admin/appointment"
                                            className="btn btn-primary"
                                        >
                                            View{" "}
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card my-2 bg-info-subtle">
                                    <div className="card-body">
                                        <h5 className="card-title">Blogs</h5>
                                        <p className="card-text">
                                            {allBlogData?.count}
                                            
                                        </p>
                                        <Link
                                            to="/admin/createBlog"
                                            className="btn btn-primary"
                                        >
                                            View{" "}
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card my-2 bg-danger-subtle">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Users
                                        </h5>
                                        <p className="card-text">
                                            {allUserData}
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">
                                            View{" "}
                                            <i className="bi bi-arrow-right"></i>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;