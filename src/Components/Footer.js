import { GitHub } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img1 from "../images/projectImage/logo.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            name: 'LinkedIn', 
            icon: <LinkedInIcon />, 
            url: 'https://www.linkedin.com/in/prabhatsahrawat/',
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-500/10'
        },
        { 
            name: 'GitHub', 
            icon: <GitHub />, 
            url: 'https://github.com/prabhat-021',
            color: 'hover:text-gray-300',
            bgColor: 'hover:bg-gray-500/10'
        },
        { 
            name: 'Twitter', 
            icon: <TwitterIcon />, 
            url: 'https://twitter.com/prabhat__021',
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-500/10'
        },
        { 
            name: 'Instagram', 
            icon: <InstagramIcon />, 
            url: 'https://instagram.com/prabhat_021?igshid=YmMyMTA2M2Y=',
            color: 'hover:text-pink-400',
            bgColor: 'hover:bg-pink-500/10'
        }
    ];

    const quickLinks = [
        { name: 'Home', path: '/', icon: '🏠' },
        { name: 'About', path: '/about', icon: '👨‍💻' },
        { name: 'Projects', path: '/project', icon: '🚀' },
        { name: 'Contact', path: '/contact', icon: '📞' }
    ];

    const domains = [
        { name: 'Web Design', icon: '🎨' },
        { name: 'Frontend Development', icon: '⚛️' },
        { name: 'Backend Development', icon: '⚙️' },
        { name: 'Git & GitHub', icon: '🔗' },
        { name: 'Programming', icon: '💻' },
        { name: 'Geopolitics', icon: '🌍' }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-dark via-gray-900 to-dark overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-secondary to-primary rounded-full blur opacity-30"></div>
            </div>
            
            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-6 py-16">
                
                {/* Top Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="relative">
                            <div className="absolute -inset-3 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
                            <img 
                                src={img1} 
                                className="relative w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-lg" 
                                alt="Prabhat Sehrawat" 
                            />
                        </div>
                        <div className="ml-4">
                            <h1 className="text-2xl font-bold text-white">
                                Prabhat <span className="text-gradient">Sehrawat</span>
                            </h1>
                            <p className="text-gray-400">Full Stack Developer</p>
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Passionate about creating amazing digital experiences through code. 
                        Let's build something extraordinary together!
                    </p>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    
                    {/* Social Media Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="text-2xl">🤝</span>
                            Connect With Me
                        </h3>
                        <div className="space-y-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 ${social.bgColor} ${social.color} transition-all duration-300 hover:border-white/20 hover:transform hover:translate-x-1`}
                                >
                                    <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="text-2xl">🔗</span>
                            Quick Links
                        </h3>
                        <div className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="group flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                                >
                                    <span className="text-lg">{link.icon}</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Domains Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="text-2xl">🎯</span>
                            My Expertise
                        </h3>
                        <div className="space-y-3">
                            {domains.map((domain, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-default"
                                >
                                    <span className="text-lg">{domain.icon}</span>
                                    <span className="text-sm">{domain.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="text-2xl">📞</span>
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                                <LocationOnIcon className="text-primary mt-1" style={{ fontSize: "1.2rem" }} />
                                <div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        KIET Group Of Institution<br />
                                        Ghaziabad, India
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                                <LocalPhoneIcon className="text-secondary" style={{ fontSize: "1.2rem" }} />
                                <a href="tel:+918445580308" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                                    +91 8445580308
                                </a>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                                <EmailIcon className="text-primary" style={{ fontSize: "1.2rem" }} />
                                <a href="mailto:theprabhatsehrawat@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                                    theprabhatsehrawat@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12 border border-white/10">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Stay Updated! 📧
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-md mx-auto">
                            Get notified about my latest projects, articles, and tech insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Prabhat Sehrawat. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>Made with ❤️ in India</span>
                            <span>•</span>
                            <Link to="/contact" className="hover:text-white transition-colors duration-300">
                                Hire Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}