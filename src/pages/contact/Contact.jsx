import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

    {/* action on submit button of form (this will send form data on mail) this is function to connect form with Email.js library  */}
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('Neelesh_portfolio_id0980', 'template_xyjs589', e.target, 'fBJs5lZBt5m852e49')
          .then((result) => {
              console.log(result.text);
              alert('Message sent successfully!');
          }, (error) => {
              console.log(error.text);
              alert('Failed to send the message, please try again.');
          });
    
        e.target.reset();
      };

  return (
    <section>
            <header className='h2 article-title'>Contact Me
            </header>
      <section className='mapbox'>
            <figure>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351.62465344512793!2d75.86531360370638!3d22.701068555677352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1d4d9ad6f7%3A0xb265f65078f39e17!2sSwami%20Pritamdas%20Sabhagrah!5e0!3m2!1sen!2sin!4v1715944425450!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </figure>
      </section>
      <section className="contact-form">
         <h3 className=" h3 form-title">Contact Here</h3>
          <form onSubmit={sendEmail} className="form">
              <div className="input-wrapper">
                  <input type="text" name="fullname" id="fullname" placeholder="Enter Full Name"className="form-input" />
                  <input type="email" name="email" id="email" placeholder="email Address"className="form-input" />
              </div>
              <textarea name="message" id="" className='form-input' placeholder='Your Messages'></textarea>
              <button className='form-btn' type="submit">
                <span>Send Message</span>
              </button>
          </form>
      </section>
    </section>

  )
}

export default Contact
