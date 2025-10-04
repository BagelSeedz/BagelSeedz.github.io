import React, { useRef, useState, useEffect } from "react";
import "./Home.css"

const GALAXY = <img alt='galaxy' src='/assets/galaxy.png' width={835} height={735}></img>
const SPEED = 0.0035

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
      <>
        {skills.map((data, index) => (
          <a href={data.link}>
            <button
              key={index}
              ref={buttonRef}
              style={{
                position: 'absolute',
                left: `calc(50% + ${radiusX * Math.cos(angle + ((index+1) * 6.2/length))}px)`,
                top: `calc(50% + ${radiusY * Math.sin(angle + ((index+1) * 6.2/length))}px)`,
                transform: 'rotate(22deg)',
                background: 'none',
                border: 'none'
              }}
            >
              <img alt={data.name} src={data.image} width={50} height={50}/>
            </button>
          </a>
        ))}
    </>
  );
};

class Galaxy extends React.Component {
  render() {
    return (
        <>
          <div className="galaxy">
              {GALAXY}
              <div className="galaxy-skills">
                <CircleMover skills={this.props.skills}/>
              </div>
          </div>
        </>
    );
  }
}

export default Galaxy;