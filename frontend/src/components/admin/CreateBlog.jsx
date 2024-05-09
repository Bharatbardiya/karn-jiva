import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Fragment } from "react";
import Sidebar from "./Sidebar";

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState();
  const [blogContent, setBlogContent] = useState();
  const [category, setCategory] = useState("Hearing Care");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log("category", category, blogTitle, blogContent)
    if (category === undefined || blogContent === undefined || blogTitle === undefined ) {
      alert("All fields are required");
      return;
    }
    let data = { blogTitle, blogContent, category };
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { result } = await axios.post(
        `/api/v1/admin/createBlog`,
        data,
        config
      );
      console.log("result : " + result);
    } catch (e) {
      alert("error");
    }
  };

  return (
    <Fragment>
      <div className="row" style={{ marginBottom: "80px" }}>
        <Sidebar />

        <div className="col-12 col-lg-9 col-xl-10 px-4">
          <Fragment>
            <h1 className="my-3 col-12 col-lg-8 mx-auto">Create Blogs</h1>

            <form className="col-12 col-lg-8 mx-auto contact-form">
              <label className="form-label">select category</label>
              <select
                className="form-select form-select-lg"
                aria-label=".form-select-sm example"
                name="status"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Hearing Care">Hearing Care</option>
                <option value="Speech Therapy">Speech Therapy</option>
                <option value="Occupational Therapy">
                  Occupational Therapy
                </option>
              </select>
              <div className="mb-3 mt-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Blog Title
                </label>
                <input
                className="form-control"
                  defaultValue={""}
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Blog Content
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  defaultValue={""}
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitHandler}
              >
                create blog
              </button>
            </form>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateBlog;
