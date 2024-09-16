
const User = require('../models/User.js')
const path = require('path')
module.exports=async(req,res)=>{
    console.log(req.session.userName)
    await User.updateOne({
        userName: req.session.userName
    },{
        $set: {
                "fname":req.body.fname,
                "lname":req.body.lname,
                "license":req.body.license,
                "age":req.body.age,
                "dob":req.body.dob,
                "make": req.body.make,
                "model": req.body.model,
                "year": req.body.year,
                "platenumber": req.body.platenumber
        }
})
res.redirect('/g2')

}