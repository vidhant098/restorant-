import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Api from './Api.jsx'
// import { MyContext } from './context.jsx'   // ✅ Make sure you export it like this
import Color from './Color.jsx'
import Home from './Home.jsx'
import Register from './Register.jsx' 
import Contact from './contact.jsx'
import Login from './Login.jsx'
import Navbar ,{ About ,Product} from './navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <MyContext.Provider value={"vidhant"}> */}
        <Routes>
          <Route path='/' element={<Home />} /> 
         <Route path='/Api' element={<Api/>} /> 
   
         <Route path='/Register' element={<Register/>} />  
          
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/About' element={<About/>} /> 
          <Route  path='/Product' element={< Product/>}  />
                  </Routes>
      {/* </MyContext.Provider> */}
    </BrowserRouter>

    {/* <Home/> */}
  </StrictMode>
)
