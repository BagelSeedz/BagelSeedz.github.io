import React from "react";
import '../Home.css'
import AboutMe from "../AboutMe";
import HomeNav from "../HomeNav";
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
      name: 'C#',
      image: "/assets/c-sharp.png",
      link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'
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
];

const TECH = [
    {
      name: 'Git',
      image: '/assets/git.png',
      link: 'https://git-scm.com/'
    },
    {
      name: 'React',
      image: '/assets/react.png',
      link: 'https://react.dev/'
    },
    {
      name: '.NET',
      image: '/assets/dotnet.png',
      link: 'https://dotnet.microsoft.com/'
    },
    {
      name: 'Django',
      image: '/assets/django.png',
      link: 'https://www.djangoproject.com/'
    },
    {
      name: 'Flask',
      image: '/assets/flask.png',
      link: 'https://en.wikipedia.org/wiki/Flask_(web_framework)'
    },
    {
      name: 'Spring',
      image: '/assets/spring.jpg',
      link: 'https://spring.io/projects/spring-boot'
    },
    {
      name: 'PostgreSQL',
      image: '/assets/postgresql.png',
      link: 'https://www.postgresql.org/'
    },
    {
      name: 'SQLite',
      image: '/assets/sqlite.png',
      link: 'https://sqlite.org/index.html'
    },
    {
      name: 'Heroku',
      image: '/assets/heroku.png',
      link: 'https://www.heroku.com/'
    },
    {
      name: 'Vercel',
      image: '/assets/vercel.png',
      link: 'https://vercel.com/'
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
      name: 'Postman',
      image: '/assets/postman.png',
      link: 'https://www.postman.com/'
    },
    {
      name: 'Trello',
      image: '/assets/trello.png',
      link: 'https://trello.com/'
    },
    {
      name: 'Arduino',
      image: '/assets/arduino.png',
      link: 'https://www.arduino.cc/'
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
        <footer style={{textAlign: 'center'}}>© 2025 Made by David Martinez</footer>
      </>
    );
  }
}


export default Home;