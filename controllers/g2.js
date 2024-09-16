const User = require('../models/User.js')
const Appointment=require('../models/Appointment.js')
const path = require('path')
module.exports= async (req,res)=>{
    const users= await User.findOne({ userName: req.session.userName })
    const appointments= await Appointment.find({isTimeSlotAvailable:true})
    console.log(users.fname)
    const uType=req.session.userType;
    const aId=users.appointmentId;
    res.render('g2',
    {users, uType, appointments,aId });
}