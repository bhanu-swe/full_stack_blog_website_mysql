import express from "express"


const app=express();
app.use(express.json());


app.listen(210,()=>{
    console.log("connected to backend");
})
