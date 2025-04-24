import React from "react";

import me_image from "./assets/me.png"

class AboutMe extends React.Component {
    render() {
        return (
            <div className="center">
                <div className="box">
                    <img alt='david' src={me_image} width='20%' style={{margin: '10px'}}/>
                    <div>
                        <h3>David Martinez</h3>
                        <h4>my name is david yo</h4>
                    </div>
                </div>
          </div>
        );
    }
}

export default AboutMe;