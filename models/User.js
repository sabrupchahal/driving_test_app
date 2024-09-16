const mongoose=require('mongoose')
const Schema= mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const UserSchema= new Schema({
    userName: {
        type: String,
        required: [true,'Please provide username'],
        unique: true
        
        },
    password:{
        type: String,
        required: [true,'Please provide password']
       
        },
    userType:String,
    fname:{type:String, default:'default'},
    lname:{type:String, default:'default'},
    license:{type:String, default:'default'},
    age:{type:String, default:'default'},
    make:{type:String, default:'default'},
    model:{type:String, default:'default'},
    year:{type:String, default:'default'},
    platenumber:{type:String, default:'default'},
    appointmentId:{type:String, default:'-'}
});
UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash
    next()
    })
    })
const User= mongoose.model('User', UserSchema);
module.exports=User
UserSchema.plugin(uniqueValidator);