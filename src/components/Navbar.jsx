import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin,FaGit ,FaInstagram,FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" width={80} height={80} />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a target='_blank' href="https://www.linkedin.com/in/sabarikarthik-s"><FaLinkedin /></a>
            <a target='_blank' href="https://github.com/Sabarikarthik-04"><FaGit /></a>
            <a target='_blank' href="https://www.instagram.com/sabarikarthik_04/"><FaInstagram /></a>
            <a target='_blank' href="https://www.facebook.com/sabarikarthik.sabarikarthik.14/"><FaFacebook /></a>
        </div>
    </nav>
  )
}

export default Navbar
