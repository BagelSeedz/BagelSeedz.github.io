import React from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, NavbarToggler, Offcanvas, OffcanvasHeader, OffcanvasBody} from 'reactstrap'
import "./Home.css"
import Socials from './Socials';

class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            canvasOn: false
        };

        this.toggleCanvas = this.toggleCanvas.bind(this);
    }

    toggleCanvas() {
        this.setState({canvasOn: !this.state.canvasOn})
    }

    render() {
        return (
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <NavbarBrand href="/">David Martinez</NavbarBrand>
                <Nav className='nav-items'>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Home'}
                            href='/'
                        >
                            <h4>Home</h4>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Skills'}
                            href='/'
                        >
                            <h4>Skills</h4>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Projects'}
                            href='/'
                        >
                            <h4>Projects</h4>
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className='nav-socials'>
                    <Socials/>
                </div> 
                <NavbarToggler className='navbarToggler' onClick={this.toggleCanvas}/>
                <Offcanvas
                    className="offcanvas-fullscreen"
                    direction="end"
                    isOpen={this.state.canvasOn}
                    toggle={this.toggleCanvas} // good to keep this here too
                >
                    <OffcanvasHeader toggle={this.toggleCanvas}></OffcanvasHeader>
                    <OffcanvasBody className='center'>
                        <ul>
                            <li className='offcanvas-li'><a href="/"><h1>Home</h1></a></li>
                            <li className='offcanvas-li'><a href="/"><h1>Skills</h1></a></li>
                            <li className='offcanvas-li'><a href="/"><h1>Projects</h1></a></li>
                            <Socials/>
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </Navbar>
        )
    }
}

export default HomeNav;