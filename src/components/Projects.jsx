import React from 'react'
import { projects } from '../Data/userData'
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{
            opacity:1,
            y:0
        }}
        initial={{
            opacity:0,
            y:-100
        }}
        transition={{
            duration:0.5
        }}
        className="my-20 text-center text-4xl">
           Projects 
        </motion.h2>
        <div>
            {
            projects.map((project)=>(
                <div key={project.ID} className="mb-8 flex flex-wrap lg:justify-center">
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
                        duration: 1
                    }}
                    className="w-full lg:w-1/4">
                    <a href={project.Website_link}><img 
                    src={project.Img_link} width={150} height={150} alt={project.Title}
                    className="mb-6 rounded"/></a>
                    </motion.div>
                    <motion.div 
                    whileInView={{
                        opacity:1,
                        x:0
                    }}
                    initial={{
                        opacity:0,
                        x:100
                    }}
                    transition={{
                        duration: 1
                    }}
                    className="w-full max-w-xl lg:w-3/4">
                        <a href={project.Website_link}><h6 className="mb-2 font-semibold">{project.Title}</h6></a>
                        <p className="mb-4 text-neutral-400">{project.Description}</p>
                        {project.TechnologiesUsed.map((tech,index)=>(
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            )
            )
            }

        </div>
    </div>
  )
}

export default Projects
