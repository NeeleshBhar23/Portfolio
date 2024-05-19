import React from 'react';
import { GiClawSlashes } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import { GiPhone } from "react-icons/gi";
import { GiHouse } from "react-icons/gi";
import { GiCalendar } from "react-icons/gi";


const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='sidebar-info'>
            <figure className='avatar-box'>
                <img src="/images/profile-sample-neelesh.jpg" alt="" width="80px"/>
            </figure>
            <div className='info-content'>
              <h1 className="name">Neelesh Bhargava</h1>
              <p className="title">Web Developer</p>
            </div>
            <button className='info_more-btn'>
             <span>show contacts</span>
             <GiClawSlashes />
            </button>
        </div>
        {/* coantact infor */}
        <div className="sidebar-infor_more">
         <hr className='separator2'/>
         <ul className='contacts-list'>
            <li className='contact-item'>
                <div className='icon-box'>
                <GiMailbox />
                </div>
                <div className='contact-info'>
                  <p className="contact-title">Email</p>
                  <a href="mailto: bhargavaneelesh99@gmail.com" className="contact-link">bhargavaneelesh99@gmail.com</a>
                </div>
            </li>
            <li className='contact-item'>
                <div className='icon-box'>
                <GiPhone />
                </div>
                  <div className='contact-info'>
                    <p className="contact-title">Phone</p>
                    <a href="mailto: bhargavaneelesh99@gmail.com" className="contact-link">7440583680</a>
                  </div>
            </li>
            <li className='contact-item'>
              <div className='icon-box'>
              <GiCalendar />
              </div>
              <div className='contact-info'>
                <p className="contact-title">Birth Date</p>
                <a href="" className="contact-link">23/03/2003</a>
              </div>
           </li>
        <li className='contact-item'>
            <div className='icon-box'>
           <a href="https://www.google.com/maps/place/Swami+Pritamdas+Sabhagrah/@22.7010686,75.8653136,20z/data=!4m15!1m8!3m7!1s0x3962fcfd5998b509:0xace088d0a238e2c6!2sSindhi+Colony,+Indore,+Madhya+Pradesh+452001!3b1!8m2!3d22.6996797!4d75.8646517!16s%2Fg%2F11c5h3gd05!3m5!1s0x3962fd1d4d9ad6f7:0xb265f65078f39e17!8m2!3d22.7012788!4d75.8654461!16s%2Fg%2F1z44zmnn1?entry=ttu"> <GiHouse /></a>
            </div>
              <div className='contact-info'>
                <p className="contact-title">Address</p>
                <a href="https://www.google.com/maps/place/Swami+Pritamdas+Sabhagrah/@22.7010686,75.8653136,20z/data=!4m15!1m8!3m7!1s0x3962fcfd5998b509:0xace088d0a238e2c6!2sSindhi+Colony,+Indore,+Madhya+Pradesh+452001!3b1!8m2!3d22.6996797!4d75.8646517!16s%2Fg%2F11c5h3gd05!3m5!1s0x3962fd1d4d9ad6f7:0xb265f65078f39e17!8m2!3d22.7012788!4d75.8654461!16s%2Fg%2F1z44zmnn1?entry=ttu" className="contact-link">Sindhi Colony, indore</a>
              </div>
         </li>
         </ul>
        </div>
    </aside>
  )
}

export default Sidebar;
