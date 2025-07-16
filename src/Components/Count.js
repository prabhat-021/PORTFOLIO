import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function Count() {
    const [countUp, setCountUp] = useState(false);

    const stats = [
        {
            end: 10,
            label: "Projects Completed",
            icon: "🚀",
            color: "from-blue-500 to-purple-600"
        },
        {
            end: 400,
            label: "Lectures Completed",
            icon: "📚",
            color: "from-green-500 to-teal-600"
        },
        {
            end: 250,
            label: "Cups of Coffee",
            icon: "☕",
            color: "from-orange-500 to-red-600"
        },
        {
            end: 50,
            label: "Resources Searched",
            icon: "🔍",
            color: "from-pink-500 to-rose-600"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,white_0%,transparent_50%)]"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="text-white/80 font-semibold text-lg tracking-widest">
                            ACHIEVEMENTS
                        </span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Numbers That <span className="text-yellow-300">Define</span> My Journey
                    </h2>
                    
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg text-white/80 leading-relaxed">
                            Every milestone tells a story of dedication, learning, and growth in my development journey.
                        </p>
                    </div>
                </div>
                
                {/* Stats Grid */}
                <ScrollTrigger onEnter={() => setCountUp(true)} onExit={() => setCountUp(false)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                
                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-4xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                </div>
                                
                                {/* Number */}
                                <div className="relative mb-4">
                                    <div className="text-5xl font-bold text-white mb-2">
                                        {countUp && <CountUp start={0} end={stat.end} duration={2} delay={index * 0.2} />}
                                        <span className="text-yellow-300">+</span>
                                    </div>
                                    
                                    {/* Animated Progress Bar */}
                                    <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                                        <div 
                                            className={`h-1 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out ${countUp ? 'w-full' : 'w-0'}`}
                                            style={{ transitionDelay: `${index * 0.2}s` }}
                                        ></div>
                                    </div>
                                </div>
                                
                                {/* Label */}
                                <div className="relative">
                                    <p className="text-white/90 font-medium text-lg leading-tight group-hover:text-white transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                </div>
                                
                                {/* Sparkle Effect */}
                                <div className="absolute top-4 right-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollTrigger>
                
                {/* Bottom Message */}
                <div className="text-center mt-16">
                    <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6">
                        <p className="text-white/90 text-lg font-medium">
                            🎯 <span className="text-yellow-300">Continuously growing</span> and pushing boundaries every day
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}