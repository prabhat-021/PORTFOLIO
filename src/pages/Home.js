import Navbar from "../Components/Navbar.js";
import Header from "../Components/Header.js";
import Mid1 from "../Components/Mid1.js";
import Mid2 from "../Components/Mid2.js";
import Count from "../Components/Count.js";
import Footer from "../Components/Footer";
// import Testimonial from "../Components/Testimonial";
export default function Home() {
    return (
        <section>
            <Navbar />
            <Header />
            <Mid1 />
            <Mid2 />
            <Count />
            {/* <Testimonial /> */}
            <Footer />
        </section>
    );


}