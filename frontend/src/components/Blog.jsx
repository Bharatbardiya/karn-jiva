import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import BlogLayout from "./BlogLayout";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const [blogArrayC1, setBlogArray1] = useState([]);
  const [blogArrayC2, setBlogArray2] = useState([]);
  const [blogArrayC3, setBlogArray3] = useState([]);
  const [blogCategory, setBlogCategory] = useState("Hearing Care");

  useEffect(() => {
    getData();
  }, []);

  const routeToCreateBlog = () => {
    navigate("/createblog");
  }
  const getData = async () => {
    try {
      const { data } = await axios.get("/api/v1/getAllBlogs");
      console.log("data", data)
      let array1 = [];
      let array2 = [];
      let array3 = [];
      // console.log( data.blogs[0]);

      data?.blogs.forEach((el) => {
        console.log(el);
        if (el.category === "Hearing Care") {
          array1.push(el);
        } else if (el.category === "Speech Therapy") {
          array2.push(el);
        } else if(el.category === "Occupational Therapy") {
          array3.push(el);
        }
      });

      setBlogArray1(array1);
      setBlogArray2(array2);
      setBlogArray3(array3);
      
    } catch (err) {}
  };
  useEffect(()=>{
    console.log( blogArrayC1);
  },[blogArrayC1]);
  const [active, setActive] = useState({
    hearing: true,
    speech: false,
    occupational: false,
  });

  return (
    <Fragment>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Lastestnews blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage blog-category">
                <div
                  className={`blog-category-select btn ${
                    active.hearing ? "yellow-bg" : ""
                  }`}
                  onClick={() => {
                    setBlogCategory("Hearing Care");
                    setActive({
                      hearing: true,
                      speech: false,
                      occupational: false,
                    });
                  }}
                >
                  Hearing Care
                </div>
                <div
                  className={`blog-category-select btn ${
                    active.speech ? "yellow-bg" : ""
                  }`}
                  onClick={() => {
                    setBlogCategory("Speech Therapy");
                    setActive({
                      hearing: false,
                      speech: true,
                      occupational: false,
                    });
                  }}
                >
                  Speech Therapy
                </div>
                <div
                  className={`blog-category-select btn ${
                    active.occupational ? "yellow-bg" : ""
                  }`}
                  onClick={() => {
                    setBlogCategory("Occupational Therapy");
                    setActive({
                      hearing: false,
                      speech: false,
                      occupational: true,
                    });
                  }}
                >
                  Occupational Therapy
                </div>
              </div>
              <div className="titlepage create-blog-row" >
                <div className="create-blog-row-select btn btn-primary" onClick={()=>routeToCreateBlog()}>
                  Create a New Blog
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {blogCategory === "Hearing Care" ? (
              <BlogLayout blogArray={blogArrayC1} />
            ) : blogCategory === "Speech Therapy" ? (
              <BlogLayout blogArray={blogArrayC2} />
            ) : (
              <BlogLayout blogArray={blogArrayC3} />
            )}
          </div>
        </div>
      </div>
      {/* end Lastestnews */}
    </Fragment>
  );
};

export default Blog;
