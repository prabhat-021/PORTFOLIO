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
      <section className="min-h-screen bg-gray-50">
         <Navbar />
         <div className="container mx-auto px-4 py-8">
            <div className='mx-12 mb-8 text-center'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873407301582!2d77.49468907402336!3d28.753196378593678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1669558384195!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg">
               </iframe>
            </div>
            <div className="bg-background rounded-lg shadow-md p-8 mx-4">
               <div className="mb-8">
                  <h2 className="text-2xl font-bold text-text mb-6 text-center">Get In Touch</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                     <div className="flex items-center justify-center space-x-3 p-4 hover:bg-white rounded-lg transition-colors duration-300">
                        <HomeIcon className="text-primary" />
                        <span className="text-gray-700">Kiet Group Of Institution, Ghaziabad, India</span>
                     </div>
                     <div className="flex items-center justify-center space-x-3 p-4 hover:bg-white rounded-lg transition-colors duration-300">
                        <PhoneIcon className="text-primary" />
                        <span className="text-gray-700">+91 8445580308</span>
                     </div>
                     <div className="flex items-center justify-center space-x-3 p-4 hover:bg-white rounded-lg transition-colors duration-300">
                        <EmailIcon className="text-primary" />
                        <span className="text-gray-700">prabhatsahrawat010203@gmail.com</span>
                     </div>
                  </div>
               </div>
               <div className='mt-8'>
                  <form ref={form} onSubmit={sendEmail}>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                           <input 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                              type="text" 
                              placeholder='Enter your Name' 
                              name="user_name" 
                              required
                           />
                           <input 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                              type="email" 
                              placeholder='Enter Email Address' 
                              name="user_email" 
                              required
                           />
                           <input 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                              type="text" 
                              placeholder='Enter Subject' 
                              name="user_subject"
                              required
                           />
                        </div>
                        <div className="flex flex-col">
                           <textarea 
                              className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none" 
                              placeholder='Enter your Message' 
                              name="message" 
                              required
                           />
                           <input 
                              type="submit" 
                              value="Send Message" 
                              className='mt-6 self-end px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 cursor-pointer' 
                              onClick={Clicked} 
                           />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}
