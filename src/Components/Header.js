import img1 from "../images/prabhat1.png"
import pdf from "../data/Rezume.pdf";

export default function Header() {
    return (
        <header className="header">
            <div className="head-text">
                <div className="head-text-in">
                    <h4 className="head-h1" >THIS IS ME </h4>
                    <h1 className="head-h2">PRABHAT SEHRAWAT</h1>
                    <p className="head-p1">Mern Enthusiast || JAVA || Member-GDSC_KIET || Technical Geek || 2025🎓Engineering Undergrad.</p>
                    <a href={pdf} target="_blank" download className="head-btn">DOWNLOAD RESUME</a>
                </div>
            </div>
            <div className="head-img-m">
                <img src={img1} alt="prabhat_jpg" className="head-img" />
            </div>
        </header>
    );

}