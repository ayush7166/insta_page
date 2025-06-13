const express = require("express");
const app = express();
const port =8080;
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/ig/username",(req,res)=>{
    let name ="ayush";
    res.render("username" , {namee : name });
});
app.listen(8080 , ()=>{
    console.log("Server runs on port 8080");
});