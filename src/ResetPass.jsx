import React from 'react'
// import Color from './Color'

const ResetPass = () => {
  return (
    <div> 
      
       
  <div className="reset">
     <fieldset   style={{border: "2px solid black" , margin:"20px" , padding:"20px"}  }>
        <form>
            <label > Enter your email  </label>   
              <input type="email" name="email" placeholder="Enter your email" />  


            <br/>
            <br/>

            <button>Send link </button>
        </form>
 </fieldset>

  </div>
        
      
       
    </div>
  )
}

export default ResetPass