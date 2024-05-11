import React from 'react'


function BlogLayout({blogArray}) {
    console.log(blogArray);
  return (
    <div className="blog-layout">
                    {blogArray?.map((val,i) => (
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                        <div className="news-box">
                          <figure><img src={`assets/images/${(i%3)+1}.jpg`} alt="img" /></figure>
                          <h3>{val.blogTitle}</h3>
                          <span>{val.category}</span>
                          <p>{val.blogContent} </p>
                        </div>
                      </div>
                    ))}
                </div>
  )
}

export default BlogLayout