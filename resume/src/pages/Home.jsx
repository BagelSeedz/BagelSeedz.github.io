import React from "react";
import '../Home.css'
import Galaxy from "../Galaxy";
import AboutMe from "../AboutMe";
import HomeNav from "../HomeNav";

const LANGUAGES = [
    {
      name: 'Python',
      image: "/assets/python.png",
      link: 'https://www.python.org/'
    },
    {
      name: 'Java',
      image: "/assets/java.jpg",
      link: 'https://www.java.com/'
    },
    {
      name: 'C++',
      image: "/assets/cpp.png",
      link: 'https://en.wikipedia.org/wiki/C++'
    },
    {
      name: 'C',
      image: "/assets/c.png",
      link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    {
      name: 'Lua',
      image: "/assets/lua.png",
      link: 'https://www.lua.org/'
    },
    {
      name: 'JavaScript',
      image: '/assets/javascript.png',
      link: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
      name: 'HTML',
      image: '/assets/html.png',
      link: 'https://en.wikipedia.org/wiki/HTML'
    },
    {
      name: 'CSS',
      image: '/assets/css.png',
      link: 'https://en.wikipedia.org/wiki/CSS'
    }
];

const TECH = [
    {
      name: 'React',
      image: '/assets/react.png',
      link: 'https://react.dev/'
    },
    {
      name: 'PostgreSQL',
      image: '/assets/postgresql.png',
      link: 'https://www.postgresql.org/'
    },
    {
      name: 'Flask',
      image: '/assets/flask.png',
      link: 'https://en.wikipedia.org/wiki/Flask_(web_framework)'
    },
    {
      name: 'Git',
      image: '/assets/git.png',
      link: 'https://git-scm.com/'
    },
    {
      name: 'SQLite',
      image: '/assets/sqlite.png',
      link: 'https://sqlite.org/index.html'
    },
    {
      name: 'Trello',
      image: '/assets/trello.png',
      link: 'https://trello.com/'
    },
    {
      name: 'Spring',
      image: '/assets/spring.jpg',
      link: 'https://spring.io/projects/spring-boot'
    }
];

class Home extends React.Component {
    render() {
        return (
            <>
                <HomeNav active='Home'/>
                <div style={{marginTop: '20px'}}></div>
                <AboutMe/>
            </>
        );
    }
}

export default Home;