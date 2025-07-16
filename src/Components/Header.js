import img1 from "../images/prabhat1.png"
import pdf from "../data/Rezume.pdf";

export default function Header() {
    return (
        <header className="flex justify-evenly py-2 px-4 md:px-15 bg-background md:flex-row flex-col md:block">
            <div className="flex-1">
                <div className="text-center md:leading-10">
                    <h4 className="font-normal tracking-wider text-base text-text mt-10">THIS IS ME</h4>
                    <h1 className="my-5 text-4xl text-text mt-10 leading-tight md:leading-normal">PRABHAT SEHRAWAT</h1>
                    <p className="text-gray text-sm mt-10">Mern Enthusiast || JAVA || Member-GDSC_KIET || Technical Geek || 2025🎓Engineering Undergrad.</p>
                    <a href={pdf} target="_blank" download className="inline-block mt-10 no-underline transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-primary to-secondary leading-10 px-8 border-none rounded-md text-white font-medium hover:shadow-lg">DOWNLOAD RESUME</a>
                </div>
            </div>
            <div className="flex items-center justify-center md:block">
                <img src={img1} alt="prabhat_jpg" className="w-72 rounded-full hidden md:block" />
            </div>
        </header>
    );
}