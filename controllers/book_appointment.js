const Appointment = require('../models/Appointment.js')
const path = require('path')
module.exports= async (req,res)=>{
    const {date, time}=req.body;
    const timeSlotAlreadyExists= await Appointment.findOne({date:date,time:time})
    if(!date || !time){
        const validationError="Must select both fields";
                            req.flash("validationError",validationError)
                            res.redirect('/appointment')
    }
    else{
        if(timeSlotAlreadyExists){
            const validationError="Selected Time Slot is already Exists";
                            req.flash("validationError",validationError)
                            res.redirect('/appointment')
        }   
        else{
            const appointment = await Appointment.create(req.body);
            res.redirect('/appointment');
        }
    }
    };