const User = require('../models/User.js')
const path = require('path')

module.exports = (req, res) =>{
    req.session.destroy(() =>{
    res.redirect('/login')
    })
    }