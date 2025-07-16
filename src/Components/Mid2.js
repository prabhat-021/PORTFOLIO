import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import StorageIcon from '@mui/icons-material/Storage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Mid2() {
    const domains = [
        {
            icon: <DesignServicesIcon />,
            title: 'WEB DESIGN',
            description: 'Designing responsive websites with good-looking layouts, innovative and user-friendly designs that create exceptional user experiences.',
            color: 'from-blue-500 to-purple-600',
            bgColor: 'bg-blue-50 hover:bg-blue-100'
        },
        {
            icon: <PhonelinkIcon />,
            title: 'FRONTEND DEVELOPMENT',
            description: 'HTML, CSS, React.js, EJS, Bootstrap, Tailwind CSS, JavaScript (DOM Model) with modern frameworks and libraries.',
            color: 'from-green-500 to-teal-600',
            bgColor: 'bg-green-50 hover:bg-green-100'
        },
        {
            icon: <StorageIcon />,
            title: 'BACKEND DEVELOPMENT',
            description: 'JavaScript, Node.js, Express.js, MongoDB (Mongoose) for robust server-side applications and APIs.',
            color: 'from-orange-500 to-red-600',
            bgColor: 'bg-orange-50 hover:bg-orange-100'
        },
        {
            icon: <GitHubIcon />,
            title: 'GIT & GITHUB',
            description: 'Version control system expertise with collaborative development and code management best practices.',
            color: 'from-gray-600 to-gray-800',
            bgColor: 'bg-gray-50 hover:bg-gray-100'
        },
        {
            icon: <TerminalIcon />,
            title: 'PROGRAMMING',
            description: 'Java, C Language with strong fundamentals in data structures, algorithms, and problem-solving.',
            color: 'from-indigo-500 to-purple-600',
            bgColor: 'bg-indigo-50 hover:bg-indigo-100'
        },
        {
            icon: <TravelExploreIcon />,
            title: 'GEOPOLITICS',
            description: 'Exploring global affairs, understanding international relations, and staying informed about world diplomacy.',
            color: 'from-pink-500 to-rose-600',
            bgColor: 'bg-pink-50 hover:bg-pink-100'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-background via-white to-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-secondary to-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-lg tracking-widest">
                            EXPERTISE
                        </span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {domains.map((domain, index) => (
                        <div 
                            key={index}
                            className={`group relative p-8 rounded-2xl ${domain.bgColor} border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
                        >
                            {/* Background Gradient on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${domain.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                            
                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${domain.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {domain.icon}
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative space-y-4">
                                <h3 className="text-xl font-bold text-text group-hover:text-gray-800 transition-colors duration-300">
                                    {domain.title}
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {domain.description}
                                </p>
                            </div>
                            
                            {/* Hover Arrow */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600">
                            Interested in collaboration or want to learn more about my work?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="flex items-center gap-2">
                                    💬 Let's Connect
                                </span>
                            </a>
                            <a 
                                href="/project" 
                                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-white border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="flex items-center gap-2">
                                    🚀 View Projects
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}