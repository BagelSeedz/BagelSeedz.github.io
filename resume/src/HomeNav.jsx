import React from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap'
import "./Home.css"

class HomeNav extends React.Component {
    render() {
        return (
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    David Martinez
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Home'}
                            href='/'
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Skills'}
                            href='/'
                        >
                            Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Projects'}
                            href='/'
                        >
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Downloads'}
                            href='#downloads'
                        >
                            Downloads
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav pills>
                    <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Home'}
                            href='/'
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            className='navLink'
                            active={this.props.active === 'Downloads'}
                            href='#downloads'
                        >
                            Downloads
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </Navbar>
        )
    }
}

export default HomeNav;