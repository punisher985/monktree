const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const salt = bcrypt.genSaltSync(10);
module.exports = (app) =>{


  app.post('/auth/local_login',
  function(req,res,next){
    passport.authenticate("local")(req,res,next)},(req,res)=>{
       console.log(req)
       res.send({message:"done"})
   });

  app.post('/auth/local_register', async(req, res) =>{
    let user = await User.findOne({email:req.body.username}).catch(()=>{
        return res.status(400).send({error:"Something Went wrong"})
      });
      console.log(req.body)
    if(!user){

    user = await new User({
        email:req.body.username,
        password:bcrypt.hashSync(req.body.password,salt)
    }).save().catch((err)=>{
        console.log(err)
    })
    return res.status(200).send({message:"done"});
    }
   return res.status(501).send({error:"this email is already registered"})
  });

app.get('/api/logout',requireLogin,(req,res)=>{
    req.logout();
    res.send(req.user);
})

app.get('/api/current_user',requireLogin,(req,res)=>{
    res.send(req.user)
})

}
