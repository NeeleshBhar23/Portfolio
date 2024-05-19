import React from 'react'

const Testimonial = ({name, avatar,url, testimonial}) => {
  return (
    <li className='testimonials-item'>
       <div className='content-card'>
          <figure className='testimonials-avatar-box'>
             <img src={avatar} alt="" width="60" />
          </figure>
          <h4 className='h4 testimonials-item-title'>{name}</h4>
          <div className="testimonials-text">
            <h5 style={{textAlign: 'center'}}>Click Here ⬇️</h5>
           <a className="social-link" href="https://github.com/NeeleshBhar23">{url}</a>
          </div>
       </div>
    </li>
  )
}

export default Testimonial
