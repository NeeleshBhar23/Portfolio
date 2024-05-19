import { useState, useEffect } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";


const servicesData = [
    {
      "title": "Bachelor's of technology",
      "icon": "/images/icon-design.svg",
      "description": "Actively pursuing a Bachelor of Technology in Information Technology to advance skills in software development"
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "Currently honing frontend development skills alongside dedicated learning of the MERN stack to expand technical proficiency."
    },

  ]
  const activityData = [
    {
      "title": "Smart India Hackathon",
      "icon": "/images/icon-design.svg",
      "description": "Successfully participated and qualified in the college-level segment of Smart India Hackathon (SIH) 2023, a prestigious national-level event organized by the Government of India."
    },
    {
      "title": "College organized hackathon",
      "icon": "/images/icon-dev.svg",
      "description": "Participated in Prekavach, a hackathon organized by our college, demonstrating problem-solving and innovation skills."
    },

  ]
  
const About = () => {

  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    
    fetch('testimonials.json').then(res => res.json()).then(data => {
      setTestimonials(data);
    });

  }, [])
  return (
    <div>
      <header>
       <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
       <p>
         Hello everyone, I'm Neelesh Bhargava! <br /> A skilled front-end web developer and enthusiastic MERN stack developer
       </p>
       <p>
       As a frontend developer i am specializing in React.js, I bring hands-on experience in building web applications.
       Currently a fresher, I am enthusiastic about the MERN (MongoDB, Express.js, React.js, Node.js) stack and actively
       developing projects to deepen my expertise. With a solid foundation in languages like C, C++ and DSA, I am
       dedicated to continuous growth and excited to contribute to impactful projects in the ever-evolving tech
       landscape
       </p>
      </section>

       {/* what i am doing  section */}
      <section className="service">
      <h2 className=" h3 service-title">What i'm Doing</h2>
        <ul className="service-list">
        {servicesData.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
        </ul>
      </section>
      <section className="service">
      <h2 className=" h3 service-title">Activities</h2>
        <ul className="service-list">
        {activityData.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
        </ul>
      </section>
      
      {/*Socials Section */}
      <section className="testimonials">

      <h3 className="h3 testimonials-title">Socials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              url={testimonial.url}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>

    {/* Skills sections */}
    <section>
      <h3 className=" h3 clients-title">Skills</h3>
      <ul className="clients-list has-scrollbar" >
      
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/c-language.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/c.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/javascript.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/HTML.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/css.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/react.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/node-js.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/express.png" alt="" style={{backgroundColor: "grey"}}/>
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/bootstrap.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/jquery.png" alt="" />
           </a>
         </li>
         <li className="clients-item">
           <a href="#">
             <img src="../../../images/icons8-github-256.png" alt="" />
           </a>
         </li>
      </ul>
    </section>

    </div>
  )
}

export default About
