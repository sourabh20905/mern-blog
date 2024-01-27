import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Home  from "./pages/Home"
function App() {


  return (
    <BrowserRouter>
      <Routes >
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/sign-up" element = {<SignUp/>}/>
        <Route path = "/sign-in" element = {<SignIn/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
      
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
