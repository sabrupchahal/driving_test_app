
const Appointment = require('../models/Appointment.js')
const User = require('../models/User.js')

const path = require('path')
module.exports=async(req,res)=>{
    // console.log(req.session.userName)
    const [date, time]=req.body.timeSlot.split(",");
    console.log("ujgjhjhjhkjhkjhjkhkjhkjhkjhkjhkjhkjh")
    
    const _date= ""+date;
    const _time= ""+time;
    console.log(_date,_time)
    const slot = await Appointment.updateOne({
        date: _date,
         time:_time,
         isTimeSlotAvailable:true
    },{
       
        $set: {
                "isTimeSlotAvailable":false
        }
    
})

    await User.updateOne(
        {
          
            userName:req.session.userName
        },
        {
            $set: {
                "appointmentId": "1"
            }
        }
    );
        console.log(slot)
    res.redirect('/g2');
}

