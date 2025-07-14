import React from 'react'
import "../Home.css"
import HomeNav from '../HomeNav';

class Downloads extends React.Component {
    render() {
        return (
            <>
                <HomeNav active='Downloads'/>
                <ui>
                    <li>
                        <a href='/downloads/cowbay/DOB Sort Installer Setup.exe'>Download DOB Sort</a>
                    </li>
                </ui>
            </>
        );
    }
}

export default Downloads;