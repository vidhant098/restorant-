import React from 'react'

const Color = () => { 
 let  [color , setcolor]  = useState("") ;  

  let [time , settime]  = useState(0) ;
  
 function changecolor()
 {
     setcolor("green") 
 } 

    

  

   time(()=>{
     settime(time+1) ;

   } , 200)
  
  return (
    <div style={{backgroundColor:state}}  >Color
     <button  onClick={changecolor}>green</button >

   <h2>{time}</h2>


   <button onClick={(time)}>start</button>
    </div>

  
     
     
  )
}

export default Color