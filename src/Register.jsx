import React, { useState } from 'react'
import { Link } from 'react-router-dom'

       const Register = () => {  
 
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

    function done(e)
    {  



       
      SetData({...data})  ; 
       console.log(show) 

       axios.post('http://localhost:4000/register'   , input).then((res)=>{

        SetData(res.data) 
         alert(res.data.message)
       })
    }


  return (
    < div><>   
         <div className='Register'>
            <fieldset>
  
           <h1>  Welcome to Anit</h1>
           <h3> Register</h3>    

          <form>
        <label >Full Name  </label>
      
     <input  name='name'  value={input.name} placeholder="name"   type ="text " onChange={f1}   />  

    <br/>
    <br/> 
     <label> Emai;   - </label>
      <input name= "email" value = {input.email}   placeholder='email' type = 'text ' onChange={f1} />  

    <br/>  
     <br/>
     <br/>
 
    <label>   Password  -- </label>

      <br/>    
     <input name='password' value = {input.password}   placeholder='password' type = 'text' onChange={f1} />  

       
       <br></br>

       <button onClick={done}> submit</button>  
       
       </form> 
     </fieldset> 

      <h2> Name : {input.name} </h2>
      <h2> password :****</h2> 
      <h2>email  :{ input.email}</h2>

      <button>
         <Link to={'/Login'}>Login</Link>
        </button> 
      


</div>  
 
  <div className="home"> <Link to={'/Api'}> Home page  
  </Link></div> 
   
 
 
     
    </></div>
  )
}

export default Register