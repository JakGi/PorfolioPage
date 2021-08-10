import "./portfolio.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Portfolio() {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1000,
        strings: ["In Progess!"],
      });
    }, []);
    return (
        <div className="portfolio" id="portfolio">
            <h1><span ref={textRef}></span></h1>
           
        </div>
    )
}
