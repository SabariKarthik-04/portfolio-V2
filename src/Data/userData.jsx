import React from 'react';
import JAVA from "../assets/JAVA.png";
import CSS from "../assets/CSS.png";
import NodeJS from "../assets/NODEJS.png";
import HTML from "../assets/HTML.png";
import Python from "../assets/PYTHON.png";
import JavaScript from "../assets/JS.png";
import flask from "../assets/flask.png";
import ReactJs from "../assets/ReactJs.png";
import ExpressJS from "../assets/express.png";
import SpringBoot from "../assets/SpringBoot.png";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import gmail from "../assets/mail.png"
import calculator from "../assets/CalculatorProject.png"
import crud from "../assets/CRUDproject.png"
import qrgenerator from "../assets/QRcodeproject.png"
import SK from '../assets/SK.jpg'





export const Hero_image = SK ;

export const data = {
  id: 1,
  Name: "Sabari Karthik S",
  Domain: "Full Stack Developer"
};

export const skills = [
  { id: 1, skillName: 'HTML', Img_link: HTML},
  { id: 2, skillName: 'CSS', Img_link: CSS},
  { id: 3, skillName: 'JavaScript', Img_link: JavaScript},
  { id: 4, skillName: 'ReactJs', Img_link: ReactJs},
  { id: 5, skillName: 'SpringBoot', Img_link: SpringBoot},
  { id: 6, skillName: 'Flask', Img_link: flask},
  { id: 7, skillName: 'ExpressJs', Img_link: ExpressJS},
  { id: 8, skillName: 'Node.js', Img_link: NodeJS},
  { id: 9, skillName: 'Python', Img_link: Python},
  { id: 10, skillName: 'JAVA', Img_link: JAVA},
];
export const Social_media_links =[
  {ID:1,link_address : "https://github.com/Sabarikathik-04",Img_link: github,name:"github"},
  {ID:2,link_address : "https://www.linkedin.com/in/sabari-karthik-s-1a4752277/",Img_link: linkedin,name:"linkedin"},
  {ID:3,link_address : "https://www.instagram.com/sabarikarthik_04/",Img_link: instagram,name:"instagram"},
  {ID:4,link_address : "https://www.facebook.com/sabarikarthik.sabarikarthik.14/",Img_link: facebook,name:"facebook"},
  {ID:5,link_address : "mailto:sabarikarthiks04@gmail.com",Img_link: gmail,name:"gmail"}
]
export const about = {
  about : "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. While I may not have professional experience, I’ve worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB, through self-driven projects and continuous learning. My journey in web development began with a deep curiosity for how things work, and I am constantly seeking new challenges to improve my skills. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies, staying active, and contributing to personal projects.",
  HeroAbout : "I am an aspiring full stack developer with a passion for building dynamic and user-friendly web applications. Through self-driven projects and hands-on learning, I have developed strong foundational skills in front-end technologies like React, and back-end technologies such as Node.js and MongoDB. I am eager to apply my growing expertise to real-world projects, collaborate with teams, and continuously learn to deliver impactful solutions that enhance user experiences."
}
export const projects =[
  {
    ID:1,Website_link : "https://qrcode30.netlify.app/",Img_link: qrgenerator,Title : "QR Code Generator",Description:"A simple and intuitive web application built using React that allows users to generate QR codes based on custom text input. Users can instantly download the generated QR code as an image for easy sharing and use. The application ensures fast performance and responsive design, making it accessible across all devices.",
    TechnologiesUsed : [" React", "HTML", "CSS", "JavaScript","QR Generator API"]

  },
  {
    ID:2,Website_link : "https://calculator118.netlify.app/",Img_link: calculator,Title : "Calculator",Description:"A basic yet functional calculator web application developed using React. It supports standard arithmetic operations such as addition, subtraction, multiplication, and division, along with a user-friendly interface designed for ease of use on both desktop and mobile devices. The design is minimalist, ensuring fast load times and seamless interaction.",
    TechnologiesUsed :[" React", "HTML", "CSS", "JavaScript"]
  },
  {
    ID:3,Website_link : "https://github.com/Sabarikathik-04/CRUD",Img_link: crud,Title : "CRUD",Description:"Description: A fully functional CRUD (Create, Read, Update, Delete) API developed using Java Spring Boot. This API provides endpoints for managing data within a database, complete with operations to add, retrieve, update, and delete records. The project demonstrates strong backend development practices, with a focus on RESTful architecture, data validation, and error handling.",
    TechnologiesUsed :["Java", "Spring Boot","MySQL", "RESTful APIs","Maven"]
  },
  /*{ID:4,Website_link : "",Img_link:"",Title : "",Description:""},*/
]
export const CONTACT = {
  email:"sabarikarthiks04@gmail.com",
  phoneNo:"+91 9600660580",
  Whatsapp:"https://wa.me/+919600660580"
}



const UserData = () => {

  return (
    <div>
      
    </div>
  )
}

export default UserData;
