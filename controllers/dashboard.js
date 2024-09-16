const User = require('../models/User.js')
const path = require('path')
module.exports=(req,res)=>{
    console.log(req.session)
    const userName=req.session.userName;
    const uType=req.session.userType;
    res.render('dashboard',{userName,uType});
}
