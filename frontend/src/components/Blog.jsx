import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import BlogLayout from "./BlogLayout";

const blogCategoryList = [
  "Hearing Assessment & Hearing Aids",
  "Speech Therapy",
  "Occupational Therapy",
  "Vestibular Evaluation & Rehabilitation",
  "ABA Therapy / Behavioral Therapy",
  "Psychological Evaluation",
  "Physiotherapy",
  "Special Education",
]
const Blog = () => {

  const [blogsByCategory, setBlogsByCategory] = useState({});
  const [blogCategory, setBlogCategory] = useState("Hearing Assessment & Hearing Aids");

  useEffect(() => {
    getData();
  }, []);

  // const routeToCreateBlog = () => {
  //   navigate("/createblog");
  // }
  const getData = async () => {
    try {
      const { data } = await axios.get("/api/v1/getAllBlogs");

      const sortedBlogs = data?.blogs.reduce((acc, blog) => {
        if (!acc[blog.category]) {
          acc[blog.category] = [];
        }
        acc[blog.category].push(blog);
        return acc;
      }, {});
      console.log(sortedBlogs);
      setBlogsByCategory(sortedBlogs);
    } catch (err) {}
  };
  useEffect(()=>{
  },[]);

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
                {
                  blogCategoryList.map((category) => (
                    <div
                      className={`m-1 blog-category-select btn ${
                        blogCategory === category? "yellow-bg" : ""
                      }`}
                      key={category}
                      onClick={() => {
                        setBlogCategory(category);
                        setActive({
                          hearing: category === "Hearing Assessment & Hearing Aids",
                          speech: category === "Speech Therapy",
                          occupational: category === "Occupational Therapy",
                        });
                      }}
                    >
                      {category}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="row">
            <BlogLayout blogArray={blogsByCategory[blogCategory]} />
          </div>
        </div>
      </div>
      {/* end Lastestnews */}
    </Fragment>
  );
};

export default Blog;
