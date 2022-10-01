import Navbar from "./Navbar";
import MapContainer from "./Map";
import Footer from "./Footer";
export default function Contact() {
   return (
      <section>
         <Navbar />
         <div className="contact-section">
            <div className="map">
               <MapContainer />
            </div>
            <div className="footer">
               {/* <Footer /> */}
            </div>
         </div>
      </section>
   );
}
