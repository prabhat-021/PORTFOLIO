import img1 from "../images/prabhat1.png"
import pdf from "../data/Rezume.pdf";

export default function Header() {
    return (
        <header className="min-h-screen bg-gradient-to-br from-background via-white to-background flex items-center justify-center">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-lg tracking-widest animate-pulse">
                                    THIS IS ME
                                </span>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight">
                                <span className="block">PRABHAT</span>
                                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    SEHRAWAT
                                </span>
                            </h1>
                            
                            <div className="max-w-2xl mx-auto lg:mx-0">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    <span className="font-medium text-primary">MERN Stack Developer</span> || 
                                    <span className="font-medium text-secondary"> Java Enthusiast</span> || 
                                    <span className="font-medium text-primary"> GDSC Member</span> || 
                                    <span className="font-medium text-secondary"> Technical Geek</span> || 
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
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    📄 DOWNLOAD RESUME
                                </span>
                            </a>
                            
                            <a 
                                href="#about" 
                                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-white border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="flex items-center gap-2">
                                    👋 LEARN MORE
                                </span>
                            </a>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="https://github.com/prabhat-021" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-xl">🐙</span>
                            </a>
                            <a href="https://www.linkedin.com/in/prabhatsahrawat/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-xl">💼</span>
                            </a>
                            <a href="https://twitter.com/prabhat__021" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-xl">🐦</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="flex-shrink-0 relative">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 animate-pulse"></div>
                            <img 
                                src={img1} 
                                alt="Prabhat Sehrawat" 
                                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl ring-4 ring-white hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce">
                            ⚡
                        </div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold animate-ping">
                            🚀
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <span className="text-sm tracking-wider">SCROLL DOWN</span>
                        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-bounce mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}