 
 import React, { useEffect, useState } from "react";
  
import "../src/Api.css";       
import Navbar from "./navbar";
{/* <Route path="/register" element={<Register />} /> */}
import { Link } from "react-router-dom";

import Register from "./Register";
import { FaInstagram, FaLinkedin, FaSearch } from "react-icons/fa";
import SlideShow from "./SlideShow";
       

  

function Api() {      

  let [apiData  ,   setData] = useState([]);
      let [filter , filterData]  = useState([])  ; 

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
       .then((res) => res.json())
       .then((data) => {
        console.log(data.recipes);
       setData(data.recipes); 
       filterData(data.recipes)
      })  
          
  }, []);       

   function f1() 
   {  
     let data1 = [...apiData].sort((a , b)=> {
      return b.rating-a.rating ; 
    })
     
     setData(data1) ; 

   }

    function f2()
    {
     let  data2  =  [...apiData].sort((a , b )=>{
       return b.rating-a.rating; 
     }) 
      setData(data2)       
    }   
     
  function lunch() 
  {
   let lunchItems = apiData.filter((a) => a.mealType.includes("Lunch"));
   setData(lunchItems);
    } 

 function dinner()
 {
   let dinnerItem = apiData.filter((a)=> 
    a.mealType.includes("Dinner")  
   ) 
    setData(dinnerItem)
 }
 
  function fast_deliver()
  {
     let fast = [...apiData].sort((a  , b )=>{
       return a.prepTimeMinutes-b.prepTimeMinutes ;
      
 }) 
      setData(fast)
  }

   function order()
   { 
       let data3 = []     
     
   }  

 function HandleSearch() 
 {
      
 }


    return (      
   <>  
    

<h1 className="text-3xl font-bold underline">
tailwind css is  working
</h1>

         <div  className="container">             
          {/* <input type="text" placeholder="search here"   value={searchterm}  style={{height:'50px'}}/> */}
           <FaSearch    style={{cursor:'pointer'}}/>
      
      <Navbar/> 
      <SlideShow/> 
         <h1>  ANIt   The  Resto 🧑🏼‍🍳🧑🏼‍🍳🍴. </h1>    
          
         <p> we serve Love❤️❤️ with food 🍽️ </p>  

          <div className="button">
          <button onClick={f1} className="rating" > low rating↑↑  </button> 
           <button onClick={f2} className="rating">  high reting ↡↡ </button>  
             <button onClick={lunch}  className="rating"> lunch🍽️ </button>  
               <button onClick={dinner}  className="rating">Dinner </button>  
                 <button onClick ={fast_deliver}>fast deliver</button>
              
            </div>
         <div>  

         </div>

          {    

            apiData.map((a   , index)=>
            {             

              return(   <>
               <div  key  = {index}   className="card"> 
                <img src={ a.image}/>   
                <button>add to Card</button>    <button>Order now </button>
                 <h2>  price: { a.ingredients.length*50}$ </h2>

                <h2>{a.name}</h2> <br></br>
                <h3 id="rating "> {a.rating} ⭐</h3>   
                 <h3 id= "time ">  deliver in  {a.prepTimeMinutes} minutes⌚  </h3> 
                  <h5>  ingredients  : {a.ingredients}</h5> 
                      
                     

                  {/* <button onClick={f1}>  rating </button> */}

                                   
               </div>
              
              </>)
           

      } )
  }     
  
<footer> 
   <h4> thankyou for visiting </h4>
    <p> all rights reserved </p> 
     <p> help </p>  
      <div style={{ textAlign: "center", marginTop: "50px" }}>
       <a href="mailto:vidhantshrivas1@gmail.com" > 
         📩✉️ Mail Us
        </a>  

         <a href="#"> 📞 no : 9340638455 </a> 
         <br/>
     <a href="#"> 💬 Chat Support: Available inside the app</a>
          
     <br/> 
      
       <h4>Address: 📍 It park , jabalpur  Madhya Pradesh </h4>
            <h4>follow us for updates</h4> 

   <div>

    <a href="https://www.instagram.com/vidhant_shrivas/"> 
         <FaInstagram size={30} color="purple" />

    </a> 
         
          
          <a href="https://www.linkedin.com/in/vidhant-shriwas-9a579730b/"> 
          
              <FaLinkedin   size={30}/>
          </a>
   </div>


     </div>
    </footer>

   </div> 
   </>
     
   ) ; 
}
    export default Api  ; 
 