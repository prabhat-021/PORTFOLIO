import { GitHub } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img1 from "../images/projectImage/logo.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/prabhatsahrawat/', color: 'hover:text-primary' },
        { name: 'GitHub', icon: <GitHub />, url: 'https://github.com/prabhat-021', color: 'hover:text-white' },
        { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/prabhat__021', color: 'hover:text-secondary' },
        { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/prabhat_021?igshid=YmMyMTA2M2Y=', color: 'hover:text-pink-500' }
    ];

    const navigationLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'Projects', path: '/project' },
        { name: 'Contact', path: '/contact' }
    ];

    const services = [
        'Full Stack Development',
        'Frontend Development',
        'Backend Development',
        'Web Application Design',
        'Database Design',
        'API Development'
    ];

    return (
        <footer className="bg-dark text-gray-300 font-poppins">
            {/* Main Footer Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Company/Brand Section */}
                    <div className="md:col-span-2 lg:col-span-1 space-y-6">
                        <div className="flex items-center space-x-3">
                            <img 
                                src={img1} 
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary" 
                                alt="Prabhat Sehrawat" 
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">Prabhat Sehrawat</h3>
                                <p className="text-sm text-primary">Full Stack Developer</p>
                            </div>
                        </div>
                        
                        <p className="text-sm leading-relaxed">
                            Passionate developer creating modern, scalable, and user-friendly web applications.
                        </p>
                        
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <BusinessIcon className="text-primary text-base" />
                            <span>Open to freelance projects</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <div className="space-y-3">
                            {navigationLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="group flex items-center text-gray-300 hover:text-primary transition-all duration-300"
                                >
                                    <span className="w-2 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mr-2"></span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            What I Do
                        </h4>
                        <div className="space-y-3">
                            {services.slice(0, 4).map((service, index) => (
                                <div key={index} className="flex items-center text-sm">
                                    <CodeIcon className="text-primary/80 text-xs mr-2.5" />
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Get In Touch
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <LocationOnIcon className="text-primary mt-1 text-base" />
                                <p className="text-sm">Ghaziabad, India</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <LocalPhoneIcon className="text-primary mt-1 text-base" />
                                <a href="tel:+918445580308" className="text-sm hover:text-primary transition-colors duration-300">
                                    +91 8445580308
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <EmailIcon className="text-primary mt-1 text-base" />
                                <a href="mailto:theprabhatsehrawat@gmail.com" className="text-sm hover:text-primary transition-colors duration-300">
                                    theprabhatsehrawat@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black/20">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400 text-center sm:text-left">
                            © {currentYear} Prabhat Sehrawat. All Rights Reserved.
                        </p>
                        
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}