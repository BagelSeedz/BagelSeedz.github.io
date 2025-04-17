import React from "react";
import '../Home.css'
import Galaxy from "../Galaxy";

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome to the homepage!</h1>
                <h2>Skills</h2>
                <Galaxy/>
            </>
        );
    }
}

export default Home;