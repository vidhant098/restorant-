import React from 'react'
import { Link } from 'react-router-dom'

const contact = () => {
  return (
    <div  className='contat'> 

         <h1 > we are pleased to Connect  with u  </h1> 
          <h5> Welcome </h5>
         <div className="connect"   >
              
          <a href="mailto:vidhantshrivas1@gmail.com">
          <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>              Connect
          </button>
          </a> 

          <br/>
           <br/>
            
         <a href=" callto: 9340638455">  📞 9340638455</a>

   </div> 
   <br/>

            <Link to={'Api'} >Home</Link>
        </div>  
  )
}

export default contact