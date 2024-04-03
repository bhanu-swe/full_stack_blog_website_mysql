import React from 'react';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div style={{ backgroundColor: '#b9e7e7' }} className="flex justify-center items-center h-screen"> 
            <div className="bg-white h-90 w-96 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl text-teal-500 text-center  mb-4">Login</h1>
                <form className="flex flex-col items-center "> 
                    <input required type="text" placeholder="UserName" className="block w-full p-2 mb-4 border border-purple-800 rounded-md focus:outline-none focus:border-purple-600"></input>
                    <input required type="text" placeholder="Password" className="block w-full p-2 mb-4 border border-purple-800 rounded-md focus:outline-none focus:border-purple-600"></input>
                    <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md focus:outline-none">Login</button>
                    <p>Don't you have a account? </p>
                    <Link to='/register' className='text-blue-500'>Register</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
