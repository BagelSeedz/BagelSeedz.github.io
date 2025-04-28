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
import postgresql_icon from "../assets/postgresql.png"
import flask_icon from "../assets/flask.png"
import git_icon from "../assets/git.png"
import sqlite_icon from "../assets/sqlite.png"
import trello_icon from "../assets/trello.png"
import spring_icon from "../assets/spring.jpg"
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
    },
    {
      name: 'PostgreSQL',
      image: postgresql_icon,
      link: 'https://www.postgresql.org/'
    },
    {
      name: 'Flask',
      image: flask_icon,
      link: 'https://en.wikipedia.org/wiki/Flask_(web_framework)'
    },
    {
      name: 'Git',
      image: git_icon,
      link: 'https://git-scm.com/'
    },
    {
      name: 'SQLite',
      image: sqlite_icon,
      link: 'https://sqlite.org/index.html'
    },
    {
      name: 'Trello',
      image: trello_icon,
      link: 'https://trello.com/'
    },
    {
      name: 'Spring',
      image: spring_icon,
      link: 'https://spring.io/projects/spring-boot'
    }
];

class Home extends React.Component {
    render() {
        return (
            <>
                <h1 className="center title">Welcome to the homepage!</h1>
                <AboutMe/>
                <h2 className="center subsection">SKILLS</h2>
                <h3 className="small-left-margin">Langauges</h3>
                <Galaxy skills={LANGUAGES}/>
                <h3 className="small-left-margin">Technologies</h3>
                <Galaxy skills={TECH}/>
            </>
        );
    }
}

export default Home;