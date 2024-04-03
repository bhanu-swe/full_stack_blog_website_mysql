import React from 'react'
import logo from "../assets/logo.jpeg"
import { Link } from 'react-router-dom'
import "./header.css"
function Header() {
    return (
        <>
        <div className='mx-5 my-1'>
            <div className='conatiner mx-auto flex flex-row w-full flex-wrap justify-between items-center'>
                <img src={logo} className='Logo' alt="blog logo"/>
                <div className='flex mx-auto flex-wrap flex-row justify-between items-center px-3'>
                    <Link  className="flex mx-6" to="/?cat=art">ART</Link>
                    <Link  className="flex mx-6" to="/?cat=science">SCIENCE</Link>
                    <Link  className="flex mx-6" to="/?cat=technology">TECHNOLOGY</Link>
                    <Link  className="flex mx-6" to="/?cat=cinema">CINEMA</Link>
                    <Link  className="flex mx-6" to="/?cat=design">DESIGN</Link>
                    <Link  className="flex mx-6" to="/?cat=food">FOOD</Link>
                    <span  className="flex mx-6">Bhanu</span>
                    <span  className="flex mx-6">Logout</span>
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
