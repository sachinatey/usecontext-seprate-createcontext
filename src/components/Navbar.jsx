import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navBar d-flex justify-content-around align-items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/service"}>Services</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
    </>
  )
}

export default Navbar