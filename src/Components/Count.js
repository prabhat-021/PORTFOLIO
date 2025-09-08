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
        },
        {
            end: 400,
            label: "Lectures Completed",
            icon: MenuBookIcon,
        },
        {
            end: 250,
            label: "Cups of Coffee",
            icon: LocalCafeIcon,
        },
        {
            end: 50,
            label: "Resources Searched",
            icon: SearchIcon,
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <TrendingUpIcon className="text-primary text-2xl" />
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                            My Journey
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-0 divide-y-0 md:divide-x md:divide-gray-200 text-center">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="flex flex-col items-center px-4">
                                    <IconComponent className="text-primary mb-4" style={{ fontSize: 40 }} />
                                    <div className="text-4xl font-bold text-gray-900 flex items-baseline gap-1">
                                        {countUp && <CountUp start={0} end={stat.end} duration={2} delay={index * 0.2} />}
                                        <span className="text-primary text-2xl font-bold">+</span>
                                    </div>
                                    <span className="mt-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </ScrollTrigger>
                {/* Bottom Message */}
                <div className="text-center mt-16">
                    <span className="inline-block text-gray-700 font-medium text-base">
                        <span className="text-primary font-semibold">Continuously growing</span> and pushing boundaries every day
                    </span>
                </div>
            </div>
        </section>
    );
}