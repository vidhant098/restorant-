// import React from 'react'
import React, { useEffect, useState } from "react";
const Task = () => { 
   
     let [apiData  ,   setData] = useState([]);  

      let [filter , filterData]  = useState([])  ; 
   
   



       fetch(`https://dummyjson.com/products/search?q=${input}`)
         .then((res) => res.json())
         .then((data) => {
           console.log(data.products);
           setData(data.products); 
            filterData(data.recipes)
         })  

          
         
       

      function short()
      {
         
       let fast = [...apiData].sort(( a  ,  b )=>{
         a.price-b.price; 
         
       })
         
       setData(fast)
      }


  return (
    <div>
      
        <button onClick={short} id="price" >Lowprice </button>   
          <input  type="text" onChange={(e)=>SetInout(e.target.value)}>
             <button  >search</button>
                
                </input>
       
       {       
     
      //    apiData.map((a   , index)=>
      //       {             

      //         return(  
      //            <>  
      //         

      //              <div  key  = {index}   className="card">   
      //              <div>
      //              <img  src ={a.images}/> 

      //               <h2 >  price :{a.price}</h2> 
      //                <h2>  rating :{a.rating}</h2> 
      //                 <h2> return policy:{a.returnpolicy}</h2>  
      //                    <h2> availavility:{a.stock}</h2> 
                       

      //              </div>
                                   
      //              </div>
              
      //         </>)
           

      // } )
  }     



    </div> 
 )
}

export default Task