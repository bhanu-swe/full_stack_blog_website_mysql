import {db} from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const register = (req, res) => {
  // Check if user exists
  const q = "SELECT * FROM USERS WHERE username=? OR email=?";
  db.query(q, [req.body.username, req.body.email], (err, data) => {
      if (err) {
          return res.status(500).json({ error: "Internal server error" });
      }
      if (data.length) {
          return res.status(409).json("User already exists");
      }
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(req.body.password, salt);
      // If user doesn't exist, proceed to register
      const q1 = "INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)";
      db.query(q1, [req.body.username, req.body.email, hash], (err, data) => {
          if (err) {
              return res.status(500).json({ error: "Internal server error" });
          }
          return res.status(200).json("User registered successfully");
      });
  });
};



export const login = (req, res) => {
  //CHECK USER
  const q = "SELECT * FROM USERS WHERE username=? ";
  
  db.query(q,[req.body.username],(err,data)=>{
    if(err){
        return res.status(500).json({error:"Internal server error"});
    }
    else if(data.length==0){
        return res.status(404).json("user not found");
    }
    
    
    const isuser= bcrypt.compareSync(req.body.password,data[0].password);
    if(!isuser) return res.status(400).json("Wrong username or password");
    const {password, ...other}=data[0];
    const token=jwt.sign({id:data[0].id},"jwtkey");
    res.cookie('access_token', token,{ httpOnly: true }).status(200).json(other);
    
  })
};

export const logout=(req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.");

};