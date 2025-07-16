import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
      <section className="min-h-screen bg-gradient-to-br from-background via-white to-purple-50 relative overflow-hidden">
         {/* Background decorations */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
         </div>

         <Navbar />
         
         {/* Hero Section */}
         <div className="pt-20 pb-16 px-4 relative z-10">
            <div className="text-center mb-16">
               <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent mb-6">
                  Get In Touch
               </h1>
               <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Let's create something amazing together! I'm always excited to discuss new opportunities and innovative projects.
               </p>
               <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"></div>
            </div>
         </div>

         <div className="container mx-auto px-4 pb-16 relative z-10">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="text-center">
                     <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <LocationOnIcon className="text-white text-xl" />
                     </div>
                     <h3 className="text-xl font-bold text-text mb-2">Address</h3>
                     <p className="text-gray-600 leading-relaxed">Kiet Group Of Institution, Ghaziabad, India</p>
                  </div>
               </div>

               <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="text-center">
                     <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <PhoneIcon className="text-white text-xl" />
                     </div>
                     <h3 className="text-xl font-bold text-text mb-2">Phone</h3>
                     <p className="text-gray-600 leading-relaxed">+91 8445580308</p>
                  </div>
               </div>

               <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="text-center">
                     <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <EmailIcon className="text-white text-xl" />
                     </div>
                     <h3 className="text-xl font-bold text-text mb-2">Email</h3>
                     <p className="text-gray-600 leading-relaxed">prabhatsahrawat010203@gmail.com</p>
                  </div>
               </div>
            </div>

            {/* Map Section */}
            <div className="mb-16">
               <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                     Find Me Here
                  </h2>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873407301582!2d77.49468907402336!3d28.753196378593678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1669558384195!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-96 md:h-[450px] transition-all duration-300 hover:brightness-110">
                     </iframe>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
               <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                     Send Message
                  </h2>
                  <p className="text-gray-600 text-lg">Ready to start your project? Send me a message and let's discuss your ideas!</p>
               </div>

               <form ref={form} onSubmit={sendEmail} className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <div className="space-y-6">
                        <div className="relative group">
                           <input 
                              className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-gray-700 placeholder-gray-400 group-hover:border-primary/50" 
                              type="text" 
                              placeholder='Your Full Name' 
                              name="user_name" 
                              required
                           />
                           <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                           </div>
                        </div>

                        <div className="relative group">
                           <input 
                              className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-gray-700 placeholder-gray-400 group-hover:border-primary/50" 
                              type="email" 
                              placeholder='Your Email Address' 
                              name="user_email" 
                              required
                           />
                           <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                           </div>
                        </div>

                        <div className="relative group">
                           <input 
                              className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-gray-700 placeholder-gray-400 group-hover:border-primary/50" 
                              type="text" 
                              placeholder='Subject' 
                              name="user_subject"
                              required
                           />
                           <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col">
                        <div className="relative group flex-1">
                           <textarea 
                              className="w-full h-40 px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none text-gray-700 placeholder-gray-400 group-hover:border-primary/50" 
                              placeholder='Your Message...' 
                              name="message" 
                              required
                           />
                           <div className="absolute top-4 right-4">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                           </div>
                        </div>

                        <button 
                           type="submit"
                           className="group mt-8 self-end px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 active:scale-95" 
                           onClick={Clicked}
                        >
                           <span>Send Message</span>
                           <SendIcon className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
         
         <Footer />
      </section>
   );
}
