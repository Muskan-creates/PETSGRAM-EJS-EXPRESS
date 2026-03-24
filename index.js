const express=require("express");
const app=express();
const port=8080;

const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/home",(req,res)=>{
    res.render("home.ejs")
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    res.render("insta.ejs",{data});
})


app.listen(port,(req,res)=>{
    console.log(`app listening port ${port}`);
})