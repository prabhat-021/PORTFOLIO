import img1 from "./images/prabhat1.jpg"
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="header">
            <div className="head-text">
                <div className="head-text-in">
                    <h4 className="head-h1" >THIS IS ME </h4>
                    <h1 className="head-h2">PRABHAT SEHRAWAT</h1>
                    <p className="head-p1">Web Devloper || Member-TEDxKIET || Member-DSC_KIET || Member-MYCIN_KIET || Technical Geek || 2025🎓Engineering Undergrad.</p>
                    <Link to="" className="head-btn">DOWNLOAD RESUME</Link>
                </div>
            </div>
            <div className="head-img-m">
                <img src={img1} alt="prabhat_jpg" className="head-img" />
            </div>
        </header>
    );

}