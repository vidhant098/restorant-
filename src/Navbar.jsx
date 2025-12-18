// src/Navbar.jsx
import React from "react"; 
import { Link } from "react-router-dom";
import Register from "./Register";

const Navbar = () => {
 
   
   function search() 
   { 
  

   }


  return (
    <nav className="navbar">
      <ul>  
            
        <li>
           <Link  to={'/Contact'} >  contact </Link> 
          </li> 

         <li>
              <Link  to={'/About'}> about </Link>
         </li>   
         
        <Link to={'/Register'}>  login/register   </Link> 
                         
         {/* <li><button>contact us </button></li> */}
              
       <Link to={'Product/'}> our product </Link>
      
        
      </ul>
    </nav>
  );
};

export default Navbar;

export const About = ()=>{ 
  return (
    <>   
     <div className="about">
      <h2> 🥗 About ANiT Food</h2> 
           <p>
            Wew Food is a smart and modern restaurant app built to make ordering food simple, fast, and satisfying.

               Whether you’re craving street-style snacks, a healthy salad, or a royal feast — Wew Food connects you to your favorite dishes with just a few taps.

             Our goal is to bring delicious food and smooth digital experience together in one place — from browsing menus to tracking your delivery in real time.
           </p>
          
     </div>

       <div  >
          

       </div>
    </>
  )
} 
  
export const   Product  = ()=>{
  return(

    <div className="product">

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ex dolorem sed. Aut, enim quis! Exercitationem voluptatum nemo amet error tempore impedit sequi odio maiores, necessitatibus blanditiis quidem eos. Dicta?
  


    <Link to={'/Api'}>home page </Link>

    </div>
  )
}
