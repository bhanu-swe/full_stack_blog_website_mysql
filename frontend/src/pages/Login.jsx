import React, {useState } from 'react';
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'


function Login() {

    const [Inputs,setInputs]=useState({
        username:"",
        password:"",
    })
    const [err,seterr]=useState(null);
    const navigate = useNavigate();

    const handle=e=>{
        setInputs(
            prev=>({...prev,[e.target.name]:e.target.value})
        )
    }
    const handlesubmit= async e=>{
        e.preventDefault()
        try{
        await axios.post("http://localhost:8800/api/auth/login",Inputs);
        navigate("/")
        }catch(err){
            seterr(err.response.data);
        }
     
    }
    return (
        <div style={{ backgroundColor: '#b9e7e7' }} className="flex justify-center items-center h-screen"> 
            <div className="bg-white h-90 w-96 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl text-teal-500 text-center  mb-4">Login</h1>
                <form className="flex flex-col items-center "> 
                    <input required type="text" placeholder="UserName" name="username" className="block w-full p-2 mb-4 border border-purple-800 rounded-md focus:outline-none focus:border-purple-600" onChange={handle}></input>
                    <input required type="password" placeholder="Password" name="password" className="block w-full p-2 mb-4 border border-purple-800 rounded-md focus:outline-none focus:border-purple-600"  onChange={handle}></input>
                    <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md focus:outline-none" onClick={handlesubmit}>Login</button>
                    {err && <p>{err}</p>}
                    <p>Don't you have a account? </p>
                    <Link to='/register' className='text-blue-500'>Register</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
