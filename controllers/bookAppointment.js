const User = require('../models/User.js')
const Appointment = require('../models/Appointment.js')
const path = require('path')
module.exports=async (req,res)=>{
    const appointments= await Appointment.find({isTimeSlotAvailable:{$ne:false}})
    const uType=req.session.userType;
    console.log(req.session,uType)
    res.render('appointment',{uType, appointments,errors: req.flash('validationError')});
}