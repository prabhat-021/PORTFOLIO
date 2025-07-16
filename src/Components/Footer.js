import { GitHub } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <footer className="relative mx-5 mt-40 sm:mt-32 md:mt-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-dark pt-15 pb-15 px-4 gap-8">
                <div className="text-left ml-0 lg:ml-15">
                    <h1 className="text-white mb-10 font-medium text-2xl">Follow Me</h1>
                    <ul className="list-none p-0">
                        <li className="my-3 flex items-center">
                            <LinkedInIcon style={{ fontSize: "2.4rem", color: "#777" }} />
                            <a className="text-xl mb-2 tracking-wide text-gray-400 no-underline ml-2 hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/prabhatsahrawat/"> LinkedIn</a>
                        </li>
                        <li className="my-3 flex items-center">
                            <GitHub style={{ fontSize: "2.4rem", color: "#777" }} />
                            <a className="text-xl mb-2 tracking-wide text-gray-400 no-underline ml-2 hover:text-white transition-colors duration-300" href="https://github.com/prabhat-021"> GitHub</a>
                        </li>
                        <li className="my-3 flex items-center">
                            <TwitterIcon style={{ fontSize: "2.4rem", color: "#777" }} />
                            <a className="text-xl mb-2 tracking-wide text-gray-400 no-underline ml-2 hover:text-white transition-colors duration-300" href="https://twitter.com/prabhat__021"> Twitter</a>
                        </li>
                        <li className="my-3 flex items-center">
                            <InstagramIcon style={{ fontSize: "2.4rem", color: "#777" }} />
                            <a className="text-xl mb-2 tracking-wide text-gray-400 no-underline ml-2 hover:text-white transition-colors duration-300" href="https://instagram.com/prabhat_021?igshid=YmMyMTA2M2Y="> Instagram</a>
                        </li>
                    </ul>
                </div>
                <div className="text-left ml-2">
                    <h1 className="text-white mb-10 font-medium text-2xl">NavBar Links</h1>
                    <ul className="list-none p-0">
                        <li className="my-6"><Link className="text-xl mb-2 tracking-wide text-gray-400 no-underline hover:text-white transition-colors duration-300" to="/">➢ Home </Link></li>
                        <li className="my-6"><Link className="text-xl mb-2 tracking-wide text-gray-400 no-underline hover:text-white transition-colors duration-300" to="/about">➢ About </Link></li>
                        <li className="my-6"><Link className="text-xl mb-2 tracking-wide text-gray-400 no-underline hover:text-white transition-colors duration-300" to="/project">➢ Projects </Link></li>
                        <li className="my-6"><Link className="text-xl mb-2 tracking-wide text-gray-400 no-underline hover:text-white transition-colors duration-300" to="/contact">➢ Contact</Link></li>
                    </ul>
                </div>
                <div className="text-left ml-2">
                    <h1 className="text-white mb-10 font-medium text-2xl">Domains</h1>
                    <ul className="list-none p-0">
                        <li className="text-xl mb-5 tracking-wide text-gray-400 hover:text-white transition-colors duration-300">➢ Web Design</li>
                        <li className="text-xl mb-5 tracking-wide text-gray-400 hover:text-white transition-colors duration-300">➢ FrontEnd </li>
                        <li className="text-xl mb-5 tracking-wide text-gray-400 hover:text-white transition-colors duration-300">➢ BackEnd </li>
                        <li className="text-xl mb-5 tracking-wide text-gray-400 hover:text-white transition-colors duration-300">➢ Git & GitHub</li>
                        <li className="text-xl mb-5 tracking-wide text-gray-400 hover:text-white transition-colors duration-300">➢ Coding</li>
                        <li className="text-xl mb-5 tracking-wide text-gray-400 hover:text-white transition-colors duration-300">➢ GeoPolitics</li>
                    </ul>
                </div>
                <div className="text-left ml-2">
                    <h1 className="text-white mb-10 font-medium text-2xl">Have a Question ?</h1>
                    <div className="text-xl my-6 flex items-center text-gray-400">
                        <LocationOnIcon style={{ fontSize: "1.9rem" }} className="mr-2" /> 
                        <span>Kiet Group Of Institution, Ghaziabad, India</span>
                    </div>
                    <div className="text-xl my-6 flex items-center text-gray-400">
                        <LocalPhoneIcon style={{ fontSize: "1.9rem" }} className="mr-2" /> 
                        <span>+91 8445580308</span>
                    </div>
                    <div className="text-xl my-6 flex items-center text-gray-400">
                        <EmailIcon style={{ fontSize: "1.9rem" }} className="mr-2" /> 
                        <span>theprabhatsehrawat@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}