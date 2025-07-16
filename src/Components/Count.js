import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Count() {
    const [countUp, setCountUp] = useState(false);

    const stats = [
        {
            end: 10,
            label: "Projects Completed",
            icon: WorkIcon,
            color: "from-blue-500 to-blue-600"
        },
        {
            end: 400,
            label: "Lectures Completed",
            icon: MenuBookIcon,
            color: "from-green-500 to-green-600"
        },
        {
            end: 250,
            label: "Cups of Coffee",
            icon: LocalCafeIcon,
            color: "from-orange-500 to-orange-600"
        },
        {
            end: 50,
            label: "Resources Searched",
            icon: SearchIcon,
            color: "from-purple-500 to-purple-600"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <TrendingUpIcon className="text-primary text-2xl" />
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                            My Journey
                        </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Professional Milestones
                    </h2>
                    
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Key achievements and metrics that reflect my dedication to continuous learning and professional growth.
                        </p>
                    </div>
                </div>
                
                {/* Stats Grid */}
                <ScrollTrigger onEnter={() => setCountUp(true)} onExit={() => setCountUp(false)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div 
                                    key={index}
                                    className="group bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                                >
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="text-2xl" />
                                        </div>
                                    </div>
                                    
                                    {/* Number */}
                                    <div className="mb-4">
                                        <div className="text-4xl font-bold text-gray-900 mb-2">
                                            {countUp && <CountUp start={0} end={stat.end} duration={2} delay={index * 0.2} />}
                                            <span className="text-primary">+</span>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out ${countUp ? 'w-full' : 'w-0'}`}
                                                style={{ transitionDelay: `${index * 0.2}s` }}
                                            ></div>
                                        </div>
                                    </div>
                                    
                                    {/* Label */}
                                    <div>
                                        <p className="text-gray-700 font-medium leading-tight">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollTrigger>
                
                {/* Bottom Message */}
                <div className="text-center mt-16">
                    <div className="inline-block bg-white rounded-xl px-8 py-6 shadow-lg border border-gray-200">
                        <p className="text-gray-700 font-medium">
                            <span className="text-primary font-semibold">Continuously growing</span> and pushing boundaries every day
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}