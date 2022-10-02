import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "./Navbar";
import MapContainer from "./Map";
import Footer from "./Footer";
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
            <div className="map">
               <MapContainer />
            </div>
            <div className="footer">
               <div className="contact-detail">
                  <div className="contact-detail-1">
                     <div className="contact-icon"><HomeIcon /> Kiet Group Of Institution, Gazaibadh, India</div>
                     <div className="contact-icon"><PhoneIcon />+91 9084539879</div>
                     <div className="contact-icon"><EmailIcon />prabhatsahrawat010203@gmail.com</div>
                  </div>
                  <div className='contact-form'>
                     <form ref={form} onSubmit={sendEmail}>
                        <div className="form-in">
                           <div className="form-left">
                              {/* <label>Name</label> */}
                              <input className="form-text" type="text" placeholder='Enter your Name' name="user_name" />
                              {/* <label>Email</label> */}
                              <input className="form-text" type="email" placeholder='Enter Email Address' name="user_email" />
                              {/* <label>Subject</label> */}
                              <input className="form-text" type="text" placeholder='Enter Subject' name="user_subject"></input>
                              {/* <label>Message</label> */}
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
         </div>
      </section>
   );
}
