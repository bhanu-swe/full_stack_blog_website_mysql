import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext=createContext();

export const AuthContextProvider = ({children})=>{
    const [currentuser,setcurrentuser]=useState(JSON.parse(localStorage.getItem("user")) || null);
    const login= async(Inputs)=>{
        const res=await axios.post("/api/auth/login",Inputs);
        setcurrentuser(res.data);
    }
    const logout= async()=>{
        await axios.post("/api/auth/logout");
        setcurrentuser(null);
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentuser))
    },[currentuser]);

    return (<AuthContext.Provider value={{currentuser,login,logout}}>{children}</AuthContext.Provider>);
}