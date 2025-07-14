import React from "react";

class AboutMe extends React.Component {
    render() {
        return (
            <div className="centerHorizontal">
                <div className="box">
                    <div style={{width: '20%', height: '100%'}}>
                        <img alt='david' src='/assets/me.png' width='80%' style={{margin: '10px'}}/>
                    </div>
                    <div style={{width:'100%'}}>
                        <h1>David Martinez</h1>
                        <h2>Software Engineer</h2>
                        <h6>Long Island, NY | 🇺🇸</h6>
                        <h5>Originally self-taught software and game developer studying Software Engineering at RIT.</h5>
                    </div>
                </div>
          </div>
        );
    }
}

export default AboutMe;