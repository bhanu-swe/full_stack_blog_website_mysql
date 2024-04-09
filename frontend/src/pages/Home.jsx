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

  
  const getText = (html, maxLength) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    let text = doc.body.textContent;
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + "..."; // Truncate text if it exceeds maxLength
    }
    return text;
  };
  

    return (
        <div className="home ">
      <div className="posts">
        {posts.map((post) => (
           
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
            <h1>{post.title}</h1>
            <p>{getText(post.description, 100)}</p>

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
