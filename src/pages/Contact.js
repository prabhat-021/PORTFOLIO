import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
export default function Contact() {
   function Clicked() {
      alert("Your Response has been sent! ")
   }

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_rcv6wyf', 'template_x9r3n89', form.current, 'Ckcxj8C6p5AXbTgFS')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
   };
   return (
      <section className="contact-background">
         <Navbar />
         <div className="contact-section">
            <div className='map-section'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873407301582!2d77.49468907402336!3d28.753196378593678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1669558384195!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-detail">
               <div className="contact-detail-1">
                  <div className="contact-icon"><HomeIcon /> Kiet Group Of Institution, Gazaibadh, India</div>
                  <div className="contact-icon"><PhoneIcon />+91 8445580308</div>
                  <div className="contact-icon"><EmailIcon />prabhatsahrawat010203@gmail.com</div>
               </div>
               <div className='contact-form'>
                  <form ref={form} onSubmit={sendEmail}>
                     <div className="form-in">
                        <div className="form-left">
                           <input className="form-text" type="text" placeholder='Enter your Name' name="user_name" />
                           <input className="form-text" type="email" placeholder='Enter Email Address' name="user_email" />
                           <input className="form-text" type="text" placeholder='Enter Subject' name="user_subject"></input>
                        </div>
                        <div className="form-right">
                           <textarea className="form-message" placeholder='Enter your Message' name="message" />
                           <input type="submit" value="Send Message" className='head-btn msg-btn' onClick={Clicked} />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <Footer />
         </div>
      </section>
   );
}
