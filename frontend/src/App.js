import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/userActions";
import store from "./store";
import { Fragment, useEffect } from "react";
import Appointment from "./components/Appointment";
import Dashboard from "./components/admin/Dashboard";
import ContactDetails from "./components/admin/ContactDetails";
import ShowAppointments from "./components/admin/ShowAppointment";
import CreateBlog from "./components/admin/CreateBlog";
import Qchat from "./components/Qchat/Qchat";
import MchatASDTest from "./components/Mchat/Mchat";
// import BlogForm from "./components/CreateBlog";
import {Toaster} from 'react-hot-toast';
import ForgetPassword from "./components/login/ForgetPassword";
import ResetPassword from "./components/login/ResetPassword";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Fragment>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgetpassword" element={<ForgetPassword />} />
					<Route path="/:token" element={<ResetPassword />} />
					<Route
						path="/appointment"
						element={<Appointment />}
					></Route>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/AppointmentAdmin" element={<ShowAppointments />} />

					<Route path="/contactAdmin" element={<ContactDetails />} />
					<Route path="/createBlogAdmin" element={<CreateBlog />} />
					<Route path="/qchat" element={<Qchat />} />
					
					<Route path="/qchat" element= {<Qchat/>}/>
					<Route path="/mchat" element= {<MchatASDTest/>} />
				</Routes>
				<Footer />
			</Router>
			<Toaster/>
			<a href="https://wa.me/918890693655?text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float-whatsapp" target="_blank">
				<i className="fa fa-whatsapp my-float"></i>
			</a>
		</Fragment>
	);
}

export default App;
