

 let express = require('express') 
  let mongoose = require('mongoose')
   
  
   let user  = require('./user') ; 


   const app = express() ;
   app.use(express.json());
    
let cors = require('cors')
app.use(cors())     
  mongoose.connect("mongodb://127.0.0.1:27017/5thsem").then 
  (()=>{
   console.log("mongoose database connected ")
 })


 app.get('/' , (req , res )=>{
      console.log("server  is working")
    res.send( " server  is working ")


 }) 
app.post('/register' ,  async(req , res )=>{   

   try{  

    const{  name ,  email , password } = req.body ; 

     const newuser = new  user({
     name , 
     email  , 
     password  

     })  ;  
 
      await  newuser.save() ;  
       res.status(201).json({
           message:"user registered succesfully "  ,
            user: newuser
        
       });
    
   }   // end of try block 
   
   catch(err)
   { 
     res.send(500).json({error:"something went wrong "});

   }


}) ; 

    



app.listen( 4000 , ()=>{

 console.log(" port is running on  port no  4000 ")

   })