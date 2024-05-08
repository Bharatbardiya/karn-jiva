import React, { Fragment ,useEffect, useState} from 'react'
import axios from "axios";
import BlogLayout from './BlogLayout';
const Blog = () => {
  const [blogArrayC1, setBlogArray1] = useState([]);
    const [blogArrayC2, setBlogArray2] = useState([]);
    const [blogArrayC3, setBlogArray3] = useState([]);
    const [blogCategory, setBlogCategory] = useState('Hearing Care');
	let array1 = []
	let array2 = []
	let array3 = []

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const { data } = await axios.get("/api/v1//getAllBlogs");
            // console.log("data", data)
			// console.log( data.blogs[0]);
            
            data?.blogs.forEach((el) => {
                console.log(el);
                if(el.category === 'Hearing Care') {
                    array1.push(el)
                }
                else if(el.category === 'Speech Therapy') {
                    array2.push(el)
                }
                else {
                    array3.push(el)

                }
            })

			setBlogArray1(array1);
			setBlogArray2(array2);
			setBlogArray3(array3);
			console.log("blogarry:" + JSON.stringify(blogArrayC1));

		} catch (err) {}
	};
	
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
            <div className='blog-category-select btn' onClick={()=>setBlogCategory('Hearing Care')}>Hearing Care</div>
            <div className='blog-category-select btn' onClick={()=>setBlogCategory('Speech Therapy')}>Speech Therapy</div>
            <div className='blog-category-select btn' onClick={()=>setBlogCategory('Occupational Therapy')}>Occupational Therapy</div>
          </div>
        </div>
      </div>
      <div className="row">
      {
                    blogCategory === 'Hearing Care' ? <BlogLayout blogArray = {blogArrayC1}/> :
                    blogCategory === 'Speech Therapy' ? <BlogLayout blogArray = {blogArrayC2}/> :
                    <BlogLayout blogArray = {blogArrayC3}/> 
                }
      </div>
    </div>
  </div>
  {/* end Lastestnews */}
</Fragment>

  )
}

export default Blog