import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {

   const [porjects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
 
    const [selectedCategory, setSelectedCategory ] = useState('All');

    useEffect(()=> {
      fetch('projects.json').then(res => res.json()).then(data=>{
        setProjects(data);
        setFilteredProjects(data);
      });

    }, [])

    {/* const handleFilterClick = (category) =>{
         setSelectedCategory(category);
         if(category === 'All')
            {
                setFilteredProjects(projects);
            }
           else{
            const filtered = projects.filter(project => project.category === category);
            setFilteredProjects(filtered);

           } 
    };*/}

  return (
      <section>
         <header>
            <h2 className=" h2 article-title">Projects</h2>
         </header>
        {/* <ul className='filter-list'>
           {/* take an array of objects for catogaaries section 
         {['All', 'Web design', 'Application', 'Web development'].map(category =>(
             <li key ={category} className="filter-item">
               
                <button 
                onClick ={()=> handleFilterClick(category)} data-filter-btn 
                 className={category === selectedCategory? 'active' : ''}>{category}</button>
             </li>
         ))}

         </ul>
             */}

         {/* Show Projects Data */}
         <section className="projects">
           <ul className="project-list">
             {
               filteredProjects.map(project =>(
                <li key ={project.id} className='project-item active' 
                data-filter-btn
                data-category={project.category}>
                   <a href="https://github.com/NeeleshBhar23">
                        <figure className='project-img'>
                            <div className='project-item-icon-box'>
                            <FaRegEye />
                            </div>
                            {/* Taking image,title and category direct from the json file  */}
                            <img src={project.image} alt="" loading ="lazy"/>
                        </figure>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.category}</p> 
                   </a>
                </li>
               ))

             }
           </ul>
         </section>
      </section>

  );
}

export default Portfolio
