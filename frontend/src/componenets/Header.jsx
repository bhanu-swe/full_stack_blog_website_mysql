import React, { useContext } from 'react'
import logo from "../assets/logo.jpeg"
import { Link } from 'react-router-dom'
import "./header.css"
import { AuthContext } from '../context/authContext';

function Header() {

    const {currentuser, logout}=useContext(AuthContext);
    return (
        <>
        <div className='mx-5 my-1'>
            <div className='conatiner mx-auto flex flex-row w-full flex-wrap justify-between items-center'>
                <Link to="/">
                <img src={logo} className='Logo' alt="blog logo"/>
                </Link>
               
                <div className='flex mx-auto flex-wrap flex-row justify-between items-center px-3'>
                    <Link  className="flex mx-6" to="/?cat=art">ART</Link>
                    <Link  className="flex mx-6" to="/?cat=science">SCIENCE</Link>
                    <Link  className="flex mx-6" to="/?cat=technology">TECHNOLOGY</Link>
                    <Link  className="flex mx-6" to="/?cat=cinema">CINEMA</Link>
                    <Link  className="flex mx-6" to="/?cat=design">DESIGN</Link>
                    <Link  className="flex mx-6" to="/?cat=food">FOOD</Link>
                    <span  className="flex mx-6">{currentuser?.username}</span>
                    {currentuser? <span  className="flex mx-6 text-blue-500" onClick={logout}>Logout</span> : <Link to="/login" className='text-blue-500 mx-6'>Login</Link>}
                    <span  className="flex mx-6 write">
                        <Link to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Header
