import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import StorageIcon from '@mui/icons-material/Storage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
export default function Mid2() {
    return (
        <section className="mid2">
            <div className='mid2-content'>
                <div>
                    <h1 className="head-h2 mid2-h1">MY DOMAINS</h1>
                    <p className="head-p1 mid2-h1 mid2-p1">These are the domain that I am working on. Expanding my Knowledge .</p>
                </div>
                <div className='mid-container'>
                    <div className="container">
                        <div className='mid2-icon'> <DesignServicesIcon id="icon"/> </div>
                        <div className='mid2-h2'>WEB DESIGN</div>
                        <div className='mid2-p1'>Designing Responsive websites, Good looking Layouts , Inovative and User friendly 
                        design.</div>
                    </div>
                    <div className="container">
                        <div className='mid2-icon'> <PhonelinkIcon id="icon"/> </div>
                        <div className='mid2-h2'>FrontEnd Development</div>
                        <div className='mid2-p1'>HTML ,CSS ,REACT ,EJS ,BOOTSTRAP ,TAILWIND CSS ,JAVASCRIPT(DOM Model). </div>
                    </div>
                    <div className="container">
                        <div className='mid2-icon'> <StorageIcon id="icon"/> </div>
                        <div className='mid2-h2'>BackEnd Development</div>
                        <div className='mid2-p1'>JAVASCRIPT ,NODE JS , EXPRESS , MongoDB(Mongoose).</div>
                    </div>
                    <div className="container">
                        <div className='mid2-icon'><GitHubIcon id="icon"/></div>
                        <div className='mid2-h2'>Git & GitHub</div>
                        <div className='mid2-p1'>Version Control Tool . </div>
                    </div>
                    <div className="container">
                        <div className='mid2-icon'><TerminalIcon id="icon"/></div>
                        <div className='mid2-h2'>Coding</div>
                        <div className='mid2-p1'>C++, java , C Language </div>
                    </div>
                    <div className="container">
                        <div className='mid2-icon'><TravelExploreIcon id="icon"/></div>
                        <div className='mid2-h2'>Geo-politics</div>
                        <div className='mid2-p1'>Exploring about what is happing around the world.Getting Knowledge of Deplomacy of countries.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}