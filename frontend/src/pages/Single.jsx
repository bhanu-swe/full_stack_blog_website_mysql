import React, { useContext, useEffect, useState } from 'react';
import deleteImage from './img/delete.png';
import edit from './img/edit.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import "./single.css"
import Menu from "./Menu"
import DOMPurify from "dompurify";

const Single = () => {
    const [post, setPost] = useState(null); 

    const location = useLocation();
    const pid = location.pathname.split("/")[2];
    const navigate= useNavigate();
    const { currentuser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/posts/${pid}`); 
                console.log(res.data);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [pid]);
    const hdelete= async()=>{
        try {
            await axios.delete(`/api/posts/${pid}`,{
                withCredentials: true
              }
        ); 
            navigate("/");
            
        } catch (err) {
            console.log(err);
        }
    }

    
    if (!post) {
        return null;
    }
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }

    return (
        <div className="single">
            <div className="content">
                <div className="innercontent">
                <img src={`../upload/${post.img}`} alt=""></img>
                <div className="user">
                {post.userImg && <img  src={post.userImg} alt=""/> }
                </div>
                <div className="info">
                    <span>{post.username}</span>
                    <span>Posted {moment(post.date).fromNow()}</span>
                </div>
              
                {currentuser && currentuser.username === post.username && (
                    <div className="edit">
                        <Link to={`/write?edit=${pid}`}>
                            <img src={edit} alt=""></img>
                        </Link>
                        <img src={deleteImage} onClick={hdelete} alt=""></img> 
                    </div>
                )}
                <h1>{post.title}</h1>
                <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}
        ></p>  
                </div>
            </div>
            <Menu cat={post.category}/>
        </div>
    );
};

export default Single;
