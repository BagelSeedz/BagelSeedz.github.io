import React from "react";
import '../Home.css'
import AboutMe from "../AboutMe";
import HomeNav from "../HomeNav";
import { Alert } from "reactstrap"
import Skills from "../Skills";
import Projects from "../Projects";

const LANGUAGES = [
    {
      name: 'Python',
      image: "/assets/python.png",
      link: 'https://www.python.org/'
    },
    {
      name: 'Java',
      image: "/assets/logo-java-4096.png",
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
      name: 'JS',
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
    },
    {
      name: 'Heroku',
      image: '/assets/heroku.png',
      link: 'https://www.heroku.com/'
    },
    {
      name: 'JavaFX',
      image: '/assets/logo-java-4096.png',
      link: 'https://openjfx.io/'
    },
    {
      name: 'Matplotlib',
      image: '/assets/matplotlib.png',
      link: 'https://matplotlib.org/'
    },
    {
      name: 'Arduino',
      image: '/assets/arduino.png',
      link: 'https://www.arduino.cc/'
    },
    {
      name: 'Postman',
      image: '/assets/postman.png',
      link: 'https://www.postman.com/'
    },
    {
      name: 'Raspberry',
      image: 'assets/raspberrypi.png',
      link: 'https://www.raspberrypi.com/'
    }
];

// class Home extends React.Component {
//   render() {
//       return (
//           <>
//               <HomeNav active='Home'/>
//               {/* <Alert color='warning'>Website Under Construction</Alert> */}
//               <div className="background"/>
//               <AboutMe skills={LANGUAGES}/>
//               <Skills languages={LANGUAGES} tech={TECH}/>
//           </>
//       );
//   }
// }
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 1 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollY = window.scrollY;
    const fadeDistance = 600; // distance over which to fade out
    const newOpacity = Math.max(1 - scrollY / fadeDistance, 0);
    this.setState({ opacity: newOpacity });
  }

  render() {
    return (
      <>
        <div
          className="background"
          style={{ opacity: this.state.opacity }}
        />
        <HomeNav active="Home" />
        {/* <Alert color='warning'>Website Under Construction</Alert> */}
        <AboutMe skills={LANGUAGES} />
        <Skills languages={LANGUAGES} tech={TECH} />
        <Projects/>
      </>
    );
  }
}


export default Home;