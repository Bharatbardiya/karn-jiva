import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Product from "./components/Product";
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

axios.defaults.baseURL =
	process.env.BACKEND_BASE_URL || "http://localhost:4000";
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
					<Route path="/product" element={<Product />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/appointment"
						element={<Appointment />}
					></Route>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/admin/contact" element={<ContactDetails />} />
					<Route path="/admin/createBlog" element={<CreateBlog />} />
					<Route
						path="/admin/appointment"
						element={<ShowAppointments />}
					/>
				</Routes>
				<Footer />
			</Router>
		</Fragment>
	);
}

export default App;
