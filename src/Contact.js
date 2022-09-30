import Navbar from "./Navbar";
import MapContainer from "./Map";
import Footer from "./Footer";
export default function Contact() {
   return (
      <section>
         <Navbar />
         <div className="map">
         <MapContainer />
         </div>
         <Footer />
      </section>
   );
}
