import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div
            className="col-12 col-lg-3 col-xl-2 d-flex flex-column flex-shrink-0 p-3 bg-secondary-subtle "
            style={{ borderRadius: "0 4px 0 0" }}
        >
            <ul className="nav nav-pills flex-column mb-auto">
                
                <li>
                    <Link to="/" className="nav-link link-dark">
                        <i className="bi bi-house-door pe-2 fs-5"></i>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="nav-link link-dark">
                        <i className="bi bi-speedometer2 pe-2 fs-5"></i>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/AppointmentAdmin" className="nav-link link-dark">
                        <i className="bi bi-grid pe-2 fs-5"></i>
                        Appointments
                    </Link>
                </li>
                <li>
                    <Link to="/contactAdmin" className="nav-link link-dark">
                        <i className="bi bi-grid pe-2 fs-5"></i>
                        Contact form
                    </Link>
                </li>
                {/* <li>
                    <Link to="/admin/users" className="nav-link link-dark ">
                        <i className="bi bi-people pe-2 fs-5"></i>
                        Events
                    </Link>
                </li> */}
                <li>
                    <Link to="/createBlogAdmin" className="nav-link link-dark ">
                        <i className="bi bi-star pe-2 fs-5"></i>
                        Blogs
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
