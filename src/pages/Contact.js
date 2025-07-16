import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { LocationOn, Phone, Mail, Send, CheckCircle, Warning } from '@mui/icons-material';
import './forms.css';

export default function Contact() {
   const form = useRef();
   const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'sent', 'error'

   const sendEmail = (e) => {
      e.preventDefault();
      setFormStatus('sending');

      emailjs.sendForm('service_rcv6wyf', 'template_x9r3n89', form.current, 'Ckcxj8C6p5AXbTgFS')
         .then((result) => {
            console.log(result.text);
            setFormStatus('sent');
            form.current.reset();
            setTimeout(() => setFormStatus(null), 5000);
         }, (error) => {
            console.log(error.text);
            setFormStatus('error');
            setTimeout(() => setFormStatus(null), 5000);
         });
   };

   const contactDetails = [
      {
         icon: <Phone />,
         title: "Call Me",
         info: "+91 8445580308",
         href: "tel:+918445580308"
      },
      {
         icon: <Mail />,
         title: "Email Me",
         info: "theprabhatsehrawat@gmail.com",
         href: "mailto:theprabhatsehrawat@gmail.com"
      },
      {
         icon: <LocationOn />,
         title: "Location",
         info: "Ghaziabad, India",
      },
   ];

   return (
      <div className="bg-background font-poppins">
         <Navbar />

         <main className="py-16 md:py-24">
            <div className="container mx-auto px-4">
               {/* Page Header */}
               <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-dark">Get in Touch</h1>
                  <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                     I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
               </div>

               {/* Main Content Grid */}
               <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

                  {/* Left Side: Contact Info */}
                  <div className="lg:col-span-2">
                     <div className="bg-white sm:p-4 md:p-8 rounded-2xl shadow-md border border-gray-100 h-full">
                        <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>
                        <div className="space-y-6">
                           {contactDetails.map((detail, index) => (
                              <div key={index} className="flex items-start space-x-4">
                                 <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg mt-1">
                                    {detail.icon}
                                 </div>
                                 <div>
                                    <h3 className="text-lg font-semibold text-dark">{detail.title}</h3>
                                    {detail.href ? (
                                       <a href={detail.href} className="text-gray-600 hover:text-primary transition-colors">{detail.info}</a>
                                    ) : (
                                       <p className="text-gray-600">{detail.info}</p>
                                    )}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Right Side: Contact Form */}
                  <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                     <h2 className="text-2xl font-bold text-dark mb-6">Send Me a Message</h2>
                     <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                           <div>
                              <label htmlFor="user_name" className="form-label">Full Name</label>
                              <input id="user_name" className="form-input" type="text" name="user_name" required />
                           </div>
                           <div>
                              <label htmlFor="user_email" className="form-label">Email Address</label>
                              <input id="user_email" className="form-input" type="email" name="user_email" required />
                           </div>
                        </div>
                        <div>
                           <label htmlFor="user_subject" className="form-label">Subject</label>
                           <input id="user_subject" className="form-input" type="text" name="user_subject" required />
                        </div>
                        <div>
                           <label htmlFor="message" className="form-label">Message</label>
                           <textarea id="message" className="form-input h-32 resize-none" name="message" required />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                           <button
                              type="submit"
                              className="w-full sm:w-auto group flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-wait disabled:scale-100"
                              disabled={formStatus === 'sending'}
                           >
                              <span>{formStatus === 'sending' ? 'Sending...' : 'Send Message'}</span>
                              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                           </button>

                           {formStatus && (
                              <div className={`text-sm ${formStatus === 'sent' ? 'text-green-600' : 'text-red-600'}`}>
                                 {formStatus === 'sent' && (
                                    <div className="flex items-center space-x-2">
                                       <CheckCircle className="h-5 w-5" />
                                       <span>Your message has been sent successfully!</span>
                                    </div>
                                 )}
                                 {formStatus === 'error' && (
                                    <div className="flex items-center space-x-2">
                                       <Warning className="h-5 w-5" />
                                       <span>Something went wrong. Please try again.</span>
                                    </div>
                                 )}
                              </div>
                           )}
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </main>
         
         <Footer />
      </div>
   );
}
