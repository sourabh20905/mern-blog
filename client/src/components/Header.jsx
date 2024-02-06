import { Button, Navbar, NavbarCollapse, NavbarLink, TextInput } from 'flowbite-react'
import {AiOutlineSearch } from "react-icons/ai"
import {FaMoon} from "react-icons/fa"
import React from 'react'
import { Link , useLocation} from 'react-router-dom'

const Header = () => {
  const path = useLocation().pathname;
  return (

    <Navbar className='border-b-2'>
      <Link to = "/" className='self-center whitespace-nowrap text-sm sm:text-xl dark:text-white font-semibold'>
        <span className='px-2 py1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sourabh</span>
        Blogs
      </Link>
      <form>
        <TextInput
        type='text'
        placeholder='Search..'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        ></TextInput>
      </form>
      <Button className=" w-12 h-10 lg:hidden" color="grey" pill>
        <AiOutlineSearch/>
      </Button>
     
    
      <div className=' flex gap-3 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color = "grey" pill>
          <FaMoon/>
        </Button>
        <Link to = "/signin">
        <Button className='' gradientDuoTone="purpleToBlue" outline>
          Sign In
        </Button>
        </Link>
        <Navbar.Toggle/>
      </div>


      <Navbar.Collapse>
      <Navbar.Link as = {"div"} active = { path === "/" } >
        <Link to="/">Home</Link>
      </Navbar.Link>
      <Navbar.Link as = {"div"} active = {path === "/projects"} >
        <Link to="/projects" >Projects</Link>
      </Navbar.Link>
      <Navbar.Link as = {"div"} active = {path === "/about"}>
        <Link to="/about" >About</Link>
      </Navbar.Link>
    </Navbar.Collapse>
      

    </Navbar>

  )
}

export default Header