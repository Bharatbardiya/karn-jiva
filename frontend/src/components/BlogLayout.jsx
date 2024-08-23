import React from 'react';
import axios from 'axios';

function BlogLayout({blogArray}) {
    console.log(blogArray);

    const deleteHandler = (id) => {

      if(window.confirm("Delete the Blog?")){
        axios.delete(`/api/v1/deleteblog/${id}`).then((res)=>{
          console.log(res);
          alert("blog deleted successfully")
        }).catch(
          (err) => {
            alert(err)
            return;
          }
        )
      }
  
    }

  return (
    <div className="blog-layout">
        {blogArray?.map((val,i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
            <div className="news-box">
              <figure><img src={"uploads/" + val.imagePath} alt="img" /></figure>
              <h3>{val.blogTitle}</h3>
              <span>{val.category}</span>
              <p>{val.blogContent} </p>
              <button className='btn btn-danger mb-3 ml-3' onClick={() => deleteHandler(val._id)}>delete</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default BlogLayout