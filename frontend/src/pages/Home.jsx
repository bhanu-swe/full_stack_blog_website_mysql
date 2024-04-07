import  axios from "axios";
import React, { useState,useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom'
import "./home.css"

function Home() {
    const [posts,setPosts]=useState([]);
    const cat = useLocation().search;
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

    return (
        <div className="home ">
      <div className="posts">
        {posts.map((post) => (
           
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
            <h1>{post.title}</h1>
            <p>{getText(post.description)}</p>
              <Link className="link" to={`/post/${post.id}`}>
              <button>Read More</button>
              </Link>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Home
