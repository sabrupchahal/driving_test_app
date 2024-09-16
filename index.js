const express=require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.connect('mongodb+srv://ssabrup:sabrup@cluster0.tzbx683.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true});
const path=require('path')

const ejs=require('ejs')
const User = require('./models/User.js')

const app=new express()
const expressSession = require('express-session');
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.urlencoded())

app.use(express.static('public'))
const flash = require('connect-flash');
app.set('view engine', 'ejs')
const loginController=require('./controllers/login.js')
const dashboardController=require('./controllers/dashboard.js')
const g2Controller=require('./controllers/g2.js')
const gController=require('./controllers/g.js')
const g2StoreController=require('./controllers/g2Store.js')
const signUpcontroller=require('./controllers/sign_Up.js')
const userSignupController=require('./controllers/signup.js')
const userLoginController=require('./controllers/userLogin.js');
const bookAppointment=require('./controllers/bookAppointment.js')
const admin_book_appointmentController=require('./controllers/book_appointment.js')
const userBookAppointment=require('./controllers/user_book_appointment.js')
const redirectIfAutheticatedMiddleware = require('./views/middleWare/redirectIfAutheticatedMiddleware.js');
const authMiddleware=require('./views/middleWare/authMiddleware.js')
const logoutController=require('./controllers/logout.js');
global.loggedIn = null;


app.use(flash());
app.use(expressSession({
    secret: 'sabrup'
    }))
    app.use("*", (req, res, next) => {
        loggedIn = req.session.userId;
        uname=req.query.userName;
      
        next()
    });

app.listen(4000,(req,res)=>{
    console.log("App listening on port 4000")
})
app.get('/appointment', authMiddleware,bookAppointment)
app.get('/signUp',signUpcontroller)
app.get('/login',loginController)
app.get('/',dashboardController)
app.get('/g2', authMiddleware,g2Controller)
app.get('/user/login',redirectIfAutheticatedMiddleware, userLoginController )
app.get('/g',authMiddleware ,gController)
app.post('/g2/store',g2StoreController)
app.post('/user/signup' , redirectIfAutheticatedMiddleware, userSignupController)

app.post('/book_appointment', admin_book_appointmentController)
app.post('/user/book_appointment', userBookAppointment)
app.get('/logout',logoutController)
app.use((req, res) => res.render('notfound'));
