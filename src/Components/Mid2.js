import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import StorageIcon from '@mui/icons-material/Storage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Mid2() {
    return (
        <section className="bg-background pt-16 pb-32 px-4">
            <div className='flex flex-col items-center justify-center mx-4'>
                <div className="text-center">
                    <h1 className="my-5 text-4xl text-text mt-10 leading-tight mb-10">MY DOMAINS</h1>
                    <p className="text-gray text-sm mt-10 mb-10 text-center">These are the domain that I am working on. Expanding my Knowledge.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center text-center ml-6 sm:ml-0'>
                    <div className="p-4 hover:shadow-lg transition-shadow duration-300">
                        <div className='text-text mx-4 my-4'> <DesignServicesIcon style={{ fontSize: '34px' }} /> </div>
                        <div className='text-lg text-text mx-3 mb-3 font-medium'>WEB DESIGN</div>
                        <div className='text-sm font-normal leading-relaxed mx-3'>Designing Responsive websites, Good looking Layouts, Innovative and User friendly design.</div>
                    </div>
                    <div className="p-4 hover:shadow-lg transition-shadow duration-300">
                        <div className='text-text mx-4 my-4'> <PhonelinkIcon style={{ fontSize: '34px' }} /> </div>
                        <div className='text-lg text-text mx-3 mb-3 font-medium'>FrontEnd Development</div>
                        <div className='text-sm font-normal leading-relaxed mx-3'>HTML, CSS, REACT, EJS, BOOTSTRAP, TAILWIND CSS, JAVASCRIPT(DOM Model).</div>
                    </div>
                    <div className="p-4 hover:shadow-lg transition-shadow duration-300">
                        <div className='text-text mx-4 my-4'> <StorageIcon style={{ fontSize: '34px' }} /> </div>
                        <div className='text-lg text-text mx-3 mb-3 font-medium'>BackEnd Development</div>
                        <div className='text-sm font-normal leading-relaxed mx-3'>JAVASCRIPT, NODE JS, EXPRESS, MongoDB(Mongoose).</div>
                    </div>
                    <div className="p-4 hover:shadow-lg transition-shadow duration-300">
                        <div className='text-text mx-4 my-4'><GitHubIcon style={{ fontSize: '34px' }} /></div>
                        <div className='text-lg text-text mx-3 mb-3 font-medium'>Git & GitHub</div>
                        <div className='text-sm font-normal leading-relaxed mx-3'>Version Control Tool.</div>
                    </div>
                    <div className="p-4 hover:shadow-lg transition-shadow duration-300">
                        <div className='text-text mx-4 my-4'><TerminalIcon style={{ fontSize: '34px' }} /></div>
                        <div className='text-lg text-text mx-3 mb-3 font-medium'>Coding</div>
                        <div className='text-sm font-normal leading-relaxed mx-3'>Java, C Language</div>
                    </div>
                    <div className="p-4 hover:shadow-lg transition-shadow duration-300">
                        <div className='text-text mx-4 my-4'><TravelExploreIcon style={{ fontSize: '34px' }} /></div>
                        <div className='text-lg text-text mx-3 mb-3 font-medium'>Geo-politics</div>
                        <div className='text-sm font-normal leading-relaxed mx-3'>Exploring about what is happening around the world. Getting Knowledge of Diplomacy of countries.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}