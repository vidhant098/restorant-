
 import React from 'react'
import Home from './Home'
import { Routes , Route } from 'react-router-dom'
import Api from './Api'
import Register from './Register'
import Task from './Task'
import Reducer from './Reducer'
 
 const App = () => {
   return ( 
     
     <div>   
 <Routes>  
  
   <Route path='/' element={<Api/>} />   

 </Routes>


     </div>
   )
 }
 
 export default App