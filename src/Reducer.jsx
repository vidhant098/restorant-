import React, { useReducer } from 'react'

const Reducer = () => { 
 
 
 
  function reducer( count , action )
{ 
      
      switch(action.type)
      {
          case "red":
      return { ...state, bg: "red" };
      }

} 
 let [count  , dispatch] = useReducer(reducer , 0 ) ; 
 
 
  return ( 
    <div>  
        <h2>{count}</h2>
 <button onClick={()=>dispatch({type:"inc"})}> increse</button>  

<button onClick={()=>dispatch({type:"red"})}> red</button>  
<button onClick={()=>dispatch({type:"black"})}> increse</button>  
<button onClick={()=>dispatch({type:"green"})}> increse</button>  

  
   
  

    </div>
  )
}

export default Reducer