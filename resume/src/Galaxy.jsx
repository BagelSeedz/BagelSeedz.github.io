import React, { useRef, useState, useEffect } from "react";
import galaxy from './assets/galaxy.png'
import "./Home.css"

const GALAXY = <img alt='galaxy' src={galaxy} width={835} height={735}></img>
const SPEED = 0.02

const CircleMover = ({skills = []}) => {
  const buttonRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      setAngle((prev) => (prev + SPEED) % (2 * Math.PI)); // Increase angle slowly
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const radiusX = 175;
  const radiusY = 70;
  const length = skills.length;

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        top: '50%',   /* center vertically */
        left: '50%',  /* center horizontally */
        transform: 'translate(-50%, -100%)',
        pointerEvents: "none"
      }}
    >
        {skills.map((text, index) => (
            <button
            key={index}
            ref={buttonRef}
            style={{
              position: 'absolute',
              left: `calc(50% + ${radiusX * Math.cos(angle + ((index+1) * 6/length))}px)`,
              top: `calc(50% + ${radiusY * Math.sin(angle + ((index+1) * 6/length))}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {text}
          </button>
        ))}
    </div>
  );
};

class Galaxy extends React.Component {
    render() {
        return (
            <>
                <div className="galaxy">
                    {GALAXY}
                </div>
                <CircleMover skills={[
                    'hi', 
                    "hi 2",
                    "hi 3",
                    "hi 4",
                    "hi 5",
                    "hi 6",
                    "hi 7"
                ]}/>
            </>
        );
    }
}

export default Galaxy;