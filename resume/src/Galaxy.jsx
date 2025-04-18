import React, { useRef, useState, useEffect } from "react";
import galaxy from './assets/galaxy.png'
import python_icon from "./assets/python.png"
import java_icon from './assets/java.jpg'
import cpp_icon from "./assets/cpp.png"
import c_icon from "./assets/c.png"
import "./Home.css"

const GALAXY = <img alt='galaxy' src={galaxy} width={835} height={735}></img>
const SPEED = 0.005

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
        pointerEvents: "none"
      }}
    >
        {skills.map((data, index) => (
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
                    <div className="skills">
                      <CircleMover skills={[
                        {
                          name: 'Python',
                          image: python_icon,
                          link: 'https://www.python.org/'
                        },
                        {
                          name: 'Java',
                          image: java_icon,
                          link: 'https://www.java.com/'
                        },
                        {
                          name: 'C++',
                          image: cpp_icon,
                          link: 'https://en.wikipedia.org/wiki/C++'
                        },
                        {
                          name: 'C',
                          image: c_icon,
                          link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
                        },
                      ]}/>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Galaxy;