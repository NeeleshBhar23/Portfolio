import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import Timelineitem from './Timelineitem';
import Skillitem from './Skillitem';


const Resume = () => {
  return (
   
      <section>
        <header>
           <h2 className="h2 article-title">Resume</h2>
         </header>

         {/* Education */}
         <div className="timeline">
             <div className="title-wrapper">
                 <div className="icon-box">
                 <FaBookReader />
                 </div>
                 <h3 className='h3' >Education</h3>   
             </div>
             <ol className="timeline-list">
                 <Timelineitem 
                 title ="Indore Institute Of Science And Technology"
                 date ="2021-2025"
                 description ="Bachelor’s of Technology in Information Technology with 7.5 CGPA"
                 />
                 <Timelineitem 
                 title ="Gurudev PUblic Higher Secondary School"
                 date ="2019-2021"
                 description ="Higher secoday education with Science (PCM) stream and secured 85%"
                 />
                 
             </ol>
         </div>

         {/* Experience  */}
         <div className="timeline">
             <div className="title-wrapper">
                 <div className="icon-box">
                 <FaComputer />
                 </div>
                 <h3 className='h3' >Experience</h3>   
             </div>
             <ol className="timeline-list">
                 <Timelineitem 
                 title ="InfoByte"
                 date ="2023"
                 description ="it was a one month web development virtual internship"
                 />
                   
             </ol>
         </div>

         {/* Skills  */}
         <div className="skill">
             <h3 className='h3 skills-title'>What i know</h3>
             <ul className="skills-list content-card">
                 <Skillitem title ="Front-end Web Development" value={80} />
                 <Skillitem title ="MERN Stack Backend" value={50} />
                 <Skillitem title ="Problem Solving(DSA)" value={50} />
                 <Skillitem title ="Object Oriented Programming" value={60} />
                 <Skillitem title ="Computer Networks" value={70} />
                
             </ul>
         </div>
      </section>
   
  )
}

export default Resume
