import React from 'react'
import { SiWhatsapp,SiGmail } from 'react-icons/si'
import { FiPhone } from 'react-icons/fi'
import { CONTACT } from '../Data/userData'
import {motion} from "framer-motion"



const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <motion.div 
      whileInView={{
        opacity:1,
        x:0
      }}
      initial={{
        opacity:0,
        x:-100
      }}
      transition={{
        duration:1
      }}
      className="text-center tracking-tighter">
        <p className="my-4 flex flex-wrap items-center justify-center gap-4 ">
            <FiPhone size={20}/>{CONTACT.phoneNo}
        </p>
        <p className="my-4 ">
            <a href="mailto:sabarikarthiks04@gmail.com" className="no-underline flex flex-wrap items-center justify-center gap-4"><SiGmail size={20}/>{CONTACT.email}</a>
        </p>
        <p className="my-4  ">
            <a className="no-underline flex flex-wrap items-center justify-center gap-4" href={CONTACT.Whatsapp}><SiWhatsapp size={20}/>Dm Me</a>
        </p>
      </motion.div>
    </div>
  )
}

export default Contact
