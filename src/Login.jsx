


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
       const Login = () => {  
 
        let [input , SetInput] = useState({
           name:""  ,  
           password: "" , 
           email:"",  
          
    })  


     let [data , SetData ]  = useState({})  ; 

    function f1(e)
    {
       let {name , value } = e.target  ; 
       SetInput({...input , [name]:value }) 
   
   }
    
     let [show , SetShow] = useState()

    function done()
    {
      SetData({...data})  ; 
       console.log(show)
    }


  return (
    < div><>  
           

           <h1>  Welcome to Anit</h1>
           <h3>  Login ahare </h3>    

          <form>
        <label >Full Name  </label>
      
     <input  name='name'  value={input.name} placeholder="name"   type ="text " onChange={f1}   />  

    <br/>
    <br/> 
     <label> Passwod    - </label>
    <input name= "email" value = {input.email}   placeholder='email' type = 'text ' onChange={f1} />  

    <br/>  
     <br/>
    <br/>

       <button onChange={done}> submit</button>  
       
 </form>
      <h2> Name  : {input.name} </h2>
      <h2> password :****</h2>
  
       don't have an account  Fegister hare   

        <br/> 

        <Link to={'/Register'}><button>Register hare </button>  </Link>


    </></div>
  )
}

export default Login