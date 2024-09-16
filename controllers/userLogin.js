const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    console.log(req.query)
    if(req.query.userName && req.query.password){
      
    const { userName, password } = req.query;
    User.findOne({ userName: userName }).then((user)=>{
        
            if (user) {
                bcrypt.compare(password, user.password, (error, same) => {
                    if (same) { // if passwords match
                        // store user session, will talk about it later
                        if(user.userType=="Driver"){
                        req.session.userId = user._id
                        req.session.userName=userName
                        req.session.userType=user.userType
                        
                        res.redirect(`/`)
                        }
                        else if(user.userType=="Admin"){
                            req.session.userId = user._id
                            req.session.userName=userName
                            req.session.userType=user.userType
                            res.redirect(`/appointment`)
                            }
                        else{
                            const validationError="User Type must be Driver or Admin";
                            req.flash("validationError",validationError)
                            req.flash('data',req.body)
                            res.redirect('/login')
                        }
                    }
                    else {
                        const validationError="Password doesn't match";
                        req.flash("validationError",validationError)
                        req.flash('data',req.body)
                        res.redirect('/login')
                    }
                })
            }
            else {
                const validationError="User Not Found";
                req.flash("validationError",validationError)
                req.flash('data',req.body)
                res.redirect('/login')
            }
            
    })
    }
    else{
        const validationError="Please Enter all the fields";
        req.flash("validationError",validationError)
        req.flash('data',req.body)
        res.redirect('/login')
    }
}
    

   
