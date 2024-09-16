const User = require('../models/User.js')
const path = require('path')

module.exports=(req,res)=>{
    var username = ""
    var password = ""
    const data = req.flash('data')[0];
    if (typeof data != "undefined") {
        username = data.userName
        password = data.password
    }
    console.log(password)
    res.render('login', {
        //errors: req.session.validationErrors
        errors: req.flash('validationError'),
        userName: username,
        password: password
    })
    
}
