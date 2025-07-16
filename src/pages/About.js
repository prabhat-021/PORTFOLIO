import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Mid1 from "../Components/Mid1";
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import WebIcon from '@mui/icons-material/Web';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
// import Testimonial from "../Components/Testimonial";

export default function About() {
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = today.getMonth() - birthDateObj.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    };

    const birthDate = "2003-06-02";
    const age = calculateAge(birthDate);

    return (
        <section className="min-h-screen bg-gradient-to-br from-background via-white to-blue-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
            </div>

            <Navbar />
            
            {/* Enhanced Hero Section */}
            <div className="relative z-10 pt-20 pb-20 px-4">
                <div className="bg-gradient-to-r from-primary via-secondary to-purple-600 text-center py-24 relative overflow-hidden rounded-3xl mx-4 md:mx-8">
                    {/* Hero background decorations */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full mb-6">
                            <PersonIcon className="text-white text-2xl" />
                        </div>
                        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            About Me
                        </h1>
                        <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                            Passionate Full Stack Developer crafting digital experiences with cutting-edge technologies
                        </p>
                        
                        <header className="flex justify-center items-center space-x-4 mb-8">
                            <Link className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2" to="/">
                                <span>Home</span>
                            </Link>
                            <div className="text-white/60 text-2xl">→</div>
                            <Link className="text-white hover:text-white/80 transition-colors duration-300 flex items-center space-x-2" to="/about">
                                <span>About</span>
                            </Link>
                        </header>
                        
                        <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Mid1 Component */}
            <Mid1 />

            {/* Enhanced Content Sections */}
            <div className="relative z-10 px-4 py-16">
                <div className="container mx-auto">
                    {/* Skills & Experience Section */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 mb-12">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                                <CodeIcon className="text-white text-2xl" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                                My Journey
                            </h2>
                        </div>
                        
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-primary">
                                <p className="text-gray-700 leading-relaxed">
                                    Demonstrating a comprehensive proficiency in diverse programming languages and frameworks such as <span className="font-semibold text-primary">Java, JavaScript, React.js, Redux, Node.js, and MongoDB</span>, my portfolio underscores a versatile skill set adept at navigating various technology stacks. This breadth of technical acumen not only showcases adaptability but also ensures a robust foundation for addressing multifaceted project requirements effectively.
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-l-4 border-secondary">
                                <p className="text-gray-700 leading-relaxed">
                                    With a focus on crafting <span className="font-semibold text-secondary">secure and scalable MERN stack applications</span>, my portfolio reflects extensive experience in leveraging Redux for efficient state management. Through the execution of numerous freelance projects, I've honed this expertise, delivering solutions that not only meet but exceed client expectations. I've integrated advanced authentication mechanisms like <span className="font-semibold text-purple-600">JWT, Google Authentication, and Auth0</span>, fortifying applications with robust security measures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Personal Details Section */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-4">
                                <SchoolIcon className="text-white text-2xl" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                                Personal Details
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <PersonIcon className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Age</p>
                                        <p className="text-lg font-semibold text-gray-800">{age} years</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CakeIcon className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Birthday</p>
                                        <p className="text-lg font-semibold text-gray-800">2 June 2003</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <WebIcon className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Website</p>
                                        <p className="text-sm font-semibold text-gray-800 truncate">prabhat-021portfolio.netlify.app</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <PhoneIcon className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Phone</p>
                                        <p className="text-lg font-semibold text-gray-800">+91 8445580308</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <EmailIcon className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Email</p>
                                        <p className="text-sm font-semibold text-gray-800">theprabhatsehrawat@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <LocationOnIcon className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">City</p>
                                        <p className="text-lg font-semibold text-gray-800">Meerut, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Testimonial /> */}
            <Footer />
        </section>
    );
}