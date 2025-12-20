 let mongoose =  require('mongoose'); 
let express = require('express')
 let userSchema =  mongoose.Schema({
 
 
     name: {
        type:String , 
          required:true 
     }  , 
      email:{
        type:String,
        required:true 
      }  , 
   password:{
    type:String 
 }


 }  
) 

 let user   = mongoose.model('user' , userSchema )

  module.exports= user ; 