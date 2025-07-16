import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function Count() {

    const [countUp, setCountUp] = useState(false);

    return (
        <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
            <ScrollTrigger className="triger" onEnter={() => setCountUp(true)} onExit={() => setCountUp(false)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-2">{countUp && <CountUp start={0} end={10} duration={2} delay={0} />}+</h1>
                        <p className="text-lg">Project Completed</p>
                    </div>
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-2">{countUp && <CountUp start={0} end={400} duration={2} delay={0} />}+</h1>
                        <p className="text-lg">Lecture Completed</p>
                    </div>
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-2">{countUp && <CountUp start={0} end={250} duration={2} delay={0} />}+</h1>
                        <p className="text-lg">Cup Of Coffee</p>
                    </div>
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-2">{countUp && <CountUp start={0} end={50} duration={2} delay={0} />}+</h1>
                        <p className="text-lg">Resource Searched</p>
                    </div>
                </div>
            </ScrollTrigger>
        </section>
    );
}