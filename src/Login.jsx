


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
    < div className='lgn'><>  
           

           <h1>  Welcome to Anit</h1>
           <h3>  Login Hare </h3>    
<div className="login">
 <form> 
             <fieldset>
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
       </fieldset>
 </form>

</div>
         
      <h2> Name  : {input.name} </h2>
      <h2> password :****</h2>
  
       don't have an account  Fegister hare   

        <br/> 

        <Link to={'/Register'}><button>Register hare </button>  </Link>
   
<br/>
<br/>
   <Link to ={'/ResetPass'}> <button>Forgot password </button></Link>


    </></div>
  )
}

export default Login