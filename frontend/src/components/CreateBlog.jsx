import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Hearing Care");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setImage(file);
        setError("");
      } else {
        setImage(null);
        setError("Please select an image file");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);

    try {
      await axios.post("/api/v1/createblog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setDescription("");
      setImage(null);
      navigate("/blog");
    } catch (err) {
      console.error("Error creating blog:", err);
      setError("Error creating blog post");
    }
  };

  return (
    <Fragment>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Create a Blog Post</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      placeholder="Title"
                      type="text"
                      name="Title"
                      value={title}
                      id="title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <select
                      className="form-control"
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="Hearing Care">Hearing Care</option>
                      <option value="Speech Therapy">Speech Therapy</option>
                      <option value="Occupational Therapy">
                        Occupational Therapy
                      </option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      name="description"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label
                      htmlFor="image"
                      style={{ marginRight: "10px", fontWeight: "bolder" }}
                    >
                      Image:
                    </label>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                  <div className=" col-md-12">
                    <button className="send" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end Login */}
    </Fragment>
  );
}

export default BlogForm;
