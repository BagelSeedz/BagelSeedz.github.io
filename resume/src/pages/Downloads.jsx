import React from 'react'
import "../Home.css"
import HomeNav from '../HomeNav';

class Downloads extends React.Component {
    render() {
        return (
            <>
                <HomeNav active='Downloads'/>
                <a href='/downloads/cowbay/DOB Sort Installer Setup.exe'>Download DOB Sort</a>
            </>
        );
    }
}

export default Downloads;