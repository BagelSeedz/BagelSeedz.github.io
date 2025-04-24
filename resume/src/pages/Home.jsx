import React from "react";
import '../Home.css'
import Galaxy from "../Galaxy";

import python_icon from "../assets/python.png"
import java_icon from '../assets/java.jpg'
import cpp_icon from "../assets/cpp.png"
import c_icon from "../assets/c.png"
import lua_icon from "../assets/lua.png"
import javascript_icon from '../assets/javascript.png'
import html_icon from '../assets/html.png'
import css_icon from '../assets/css.png'
import react_icon from '../assets/react.png'
import AboutMe from "../AboutMe";

const LANGUAGES = [
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
    {
      name: 'Lua',
      image: lua_icon,
      link: 'https://www.lua.org/'
    },
    {
      name: 'JavaScript',
      image: javascript_icon,
      link: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
      name: 'HTML',
      image: html_icon,
      link: 'https://en.wikipedia.org/wiki/HTML'
    },
    {
      name: 'CSS',
      image: css_icon,
      link: 'https://en.wikipedia.org/wiki/CSS'
    }
];

const TECH = [
    {
        name: 'React',
        image: react_icon,
        link: 'https://react.dev/'
    }
];

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome to the homepage!</h1>
                <AboutMe/>
                <h2>SKILLS</h2>
                <h3>Langauges</h3>
                <Galaxy skills={LANGUAGES}/>
                <h3>Technologies</h3>
                <Galaxy skills={TECH}/>
            </>
        );
    }
}

export default Home;