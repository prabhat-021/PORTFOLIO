import Navbar from "../Components/Navbar.js";
import Header from "../Components/Header.js";
import Mid1 from "../Components/Mid1.js";
import Mid2 from "../Components/Mid2.js";
import Count from "../Components/Count.js";
import Footer from "../Components/Footer";
// import Testimonial from "../Components/Testimonial";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navbar />
            
            {/* Hero Section */}
            <div className="pt-20">
                <Header />
            </div>
            
            {/* About Section */}
            <Mid1 />
            
            {/* Skills/Domains Section */}
            <Mid2 />
            
            {/* Statistics Section */}
            <Count />
            
            {/* Testimonials Section - Coming Soon */}
            {/* <Testimonial /> */}
            
            {/* Footer */}
            <Footer />
            
            {/* Floating Action Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </div>
    );
}