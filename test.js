const mongoose = require('mongoose')
const BlogPost = require('./models/User')
mongoose.connect('mongodb+srv://ssabrup:Chahal%401313@cluster0.tzbx683.mongodb.net/', {useNewUrlParser:true});
try {
    const blogpost = BlogPost.create({
    title: 'Your custom title',
    body: 'Your custom body message'
    });
    console.log(blogpost);
}
catch (error) {
    console.log(error);
}
// app.get('/', (req,res)=>{
//     // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    
//     res.render('dashboard');
// })


// app.get('/g2',(req,res)=>{
//     // res.sendFile(path.resolve(__dirname,'pages/about.html'))
//     res.render('g2')
// })
// app.get('/login',(req,res)=>{
//     // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
//     res.render('login')
// })
// app.get('/g_page', (req,res)=>{
//     res.render('g_page');
// })
// app.get('/g', async (req,res)=>{
//     // res.sendFile(path.resolve(__dirname,'pages/post.html'))
//     const users= await User.findOne({ license: req.query.license })
//     console.log(req.query.license)
//     res.render('g',{users});
// })
// app.post('/g/update', async(req,res)=>{
//     console.log(req.body.license)
//     await User.updateOne({
//         license: req.body.license
//     },{
//         $set: {
//                 "make": req.body.make,
//                 "model": req.body.model,
//                 "year": req.body.year,
//                 "platenumber": req.body.platenumber
//         }
// })
// res.redirect('/g_page')

// })
// app.post('/g2/store', async (req,res)=>{
//     await User.create(req.body)
//     console.log(req.body)
//     res.redirect('/g_page')
//     })

// app.get('/post',(req,res)=>{
//     // res.sendFile(path.resolve(__dirname,'pages/post.html'))
//     res.render('post')
// })
// app.get('/g2/new',(req,res)=>{
//     res.render('/g2')
// })
