const mongoose=require('mongoose')
const Schema= mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');

const AppointmentSchema= new Schema({
   
    date:String,
    time:String,
    isTimeSlotAvailable:{type:Boolean,default:true}

});
const Appointment= mongoose.model('Appointment', AppointmentSchema);
module.exports=Appointment
// AppointmentSchema.plugin(uniqueValidator);