import img1 from "../images/prabhat1.png"
import pdf from "../data/Rezume.pdf";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Header() {
    return (
        <header className="min-h-screen bg-white flex items-center justify-center border-b border-gray-200">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <span className="text-primary font-semibold text-lg tracking-widest">
                                    THIS IS ME
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                <span className="block">PRABHAT</span>
                                <span className="block text-primary">
                                    SEHRAWAT
                                </span>
                            </h1>

                            <div className="max-w-2xl mx-auto lg:mx-0">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <span className="font-medium text-primary">MERN Stack Developer</span> |
                                    <span className="font-medium text-secondary"> Java Enthusiast</span> |
                                    <span className="font-medium text-primary"> GDSC Member</span> |
                                    <span className="font-medium text-secondary"> Technical Geek</span> |
                                    <span className="font-medium text-primary"> 2025🎓 Engineering Undergrad</span>
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href={pdf}
                                target="_blank"
                                download
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow"
                            >
                                <span className="flex items-center gap-2">
                                    📄 DOWNLOAD RESUME
                                </span>
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary border border-primary bg-white rounded-lg hover:bg-primary hover:text-white transition-all duration-200 shadow"
                            >
                                <span className="flex items-center gap-2">
                                    👋 LEARN MORE
                                </span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start mt-2">
                            <a href="https://github.com/prabhat-021" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary border border-gray-200 transition-colors duration-200">
                                <GitHubIcon fontSize="medium" />
                            </a>
                            <a href="https://www.linkedin.com/in/prabhatsahrawat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary border border-gray-200 transition-colors duration-200">
                                <LinkedInIcon fontSize="medium" />
                            </a>
                            <a href="https://twitter.com/prabhat__021" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary border border-gray-200 transition-colors duration-200">
                                <TwitterIcon fontSize="medium" />
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex-shrink-0 relative">
                        <div className="relative">
                            <img
                                src={img1}
                                alt="Prabhat Sehrawat"
                                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl border-4 border-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full hidden md:flex flex-col items-center">
                    <span className="text-xs md:text-sm text-gray-400 tracking-wider mb-1 md:mb-2 select-none">SCROLL DOWN</span>
                    <svg className="w-6 h-6 text-gray-400 animate-bounce opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </header>
    );
}