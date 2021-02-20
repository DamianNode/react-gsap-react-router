import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Title = ({lineContent1, lineContent2}) => {
    const line1 = useRef(null);
    const line2 = useRef(null);

    useEffect(() => {
        gsap.from([line1.current, line2.current], {
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
          y: 64,
          stagger: {
            amount: 0.15
          }
        });
      }, [line1, line2]);

    return (
        <h1 className="page-title">
            <div className="line-wrap">
                <div ref={line1} className="line">
                    {lineContent1}
                </div>
            </div>
            <div className="line-wrap">
                <div ref={line2} className="line">
                    {lineContent2}
                </div>
            </div>
        </h1>
    )
}

export default Title;