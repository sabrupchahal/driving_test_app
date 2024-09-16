const User = require('../models/User.js')
const path = require('path')
module.exports=async (req,res)=>{
    const users= await User.findOne({ userName: req.session.userName })
    const uType=req.session.userType;
    res.render('g',{users,uType});
}