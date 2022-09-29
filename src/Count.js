import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
export default function Count() {

    const[countUp, setCountUp] = useState(false);

    return (
        <section className="count-grid-1">
        <ScrollTrigger className="triger" onEnter={()=>setCountUp(true)} onExit={()=>setCountUp(false)}>
        <div className="count-grid"> 
           <div className="count">
           <h1 className="count-1">{ countUp && <CountUp start={0} end={10} duration={2} delay={0} />}+</h1>
           <p>Project Completed</p>
           </div>
           <div className="count">
           <h1 className="count-1">{ countUp && <CountUp start={0} end={200} duration={2} delay={0} />}+</h1>
           <p>Lecture Completed</p>
           </div>
           <div className="count">
           <h1 className="count-1">{ countUp && <CountUp start={0} end={300} duration={2} delay={0} />}+</h1>
           <p>Cup Of Coffee</p>
           </div>
           <div className="count">
           <h1 className="count-1">{ countUp && <CountUp start={0} end={50} duration={2} delay={0} />}+</h1>
           <p>Resourse Searched</p>
           </div>
           </div>
        </ScrollTrigger>
        </section>
    );
}