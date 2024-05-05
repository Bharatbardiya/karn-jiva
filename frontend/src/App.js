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

axios.defaults.baseURL = process.env.BACKEND_BASE_URL || "http://localhost:4001";
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

      </Routes>
      <Footer />
    </Router>
    </Fragment>
  );
}

export default App;
