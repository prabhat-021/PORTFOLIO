import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import StorageIcon from '@mui/icons-material/Storage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Link } from 'react-router-dom';

export default function Mid2() {
    const domains = [
        {
            icon: <DesignServicesIcon color="primary" fontSize="large" />,
            title: 'WEB DESIGN',
            description: 'Designing responsive websites with good-looking layouts, innovative and user-friendly designs that create exceptional user experiences.',
        },
        {
            icon: <PhonelinkIcon color="primary" fontSize="large" />,
            title: 'FRONTEND DEVELOPMENT',
            description: 'HTML, CSS, React.js, EJS, Bootstrap, Tailwind CSS, JavaScript (DOM Model) with modern frameworks and libraries.',
        },
        {
            icon: <StorageIcon color="primary" fontSize="large" />,
            title: 'BACKEND DEVELOPMENT',
            description: 'JavaScript, Node.js, Express.js, MongoDB (Mongoose) for robust server-side applications and APIs.',
        },
        {
            icon: <GitHubIcon color="primary" fontSize="large" />,
            title: 'GIT & GITHUB',
            description: 'Version control system expertise with collaborative development and code management best practices.',
        },
        {
            icon: <TerminalIcon color="primary" fontSize="large" />,
            title: 'PROGRAMMING',
            description: 'Java, C Language with strong fundamentals in data structures, algorithms, and problem-solving.',
        },
        {
            icon: <TravelExploreIcon color="primary" fontSize="large" />,
            title: 'GEOPOLITICS',
            description: 'Exploring global affairs, understanding international relations, and staying informed about world diplomacy.',
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                            Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Domains</span>
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            These are the domains I'm passionate about and continuously expanding my knowledge in. 
                            Each area represents a journey of learning and growth.
                        </p>
                    </div>
                </div>
                {/* Domains Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {domains.map((domain, index) => (
                        <div 
                            key={index}
                            className="relative flex flex-col h-full p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                        >
                            {/* Vertical Accent Line */}
                            <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-primary to-secondary rounded-full opacity-70"></div>
                            {/* Icon */}
                            <div className="mb-7 flex items-center justify-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                    <span className="transition-transform duration-300 group-hover:rotate-6 group-hover:text-secondary">
                                        {domain.icon}
                                    </span>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="flex-1 flex flex-col space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 font-sans">
                                    {domain.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-sans">
                                    {domain.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="space-y-4">
                        <p className="text-lg text-gray-700">
                            Interested in collaboration or want to learn more about my work?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow group"
                            >
                                <span className="flex items-center gap-2">
                                    Let's Connect
                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                to="/project" 
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-white border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200 shadow group"
                            >
                                <span className="flex items-center gap-2">
                                    View Projects
                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}