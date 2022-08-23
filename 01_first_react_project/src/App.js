import Nav from './components/navitem';
import FormContact from './components/FormContact';
import IconLink from './components/iconlink';
import './App.css';
import { useState } from 'react';

function App() {

  const hobbies = ['Web Developer', 'Reptile Enthusiast', 'Graphic Designer'];
  // hobbies
  const [hobbie, setNew] = useState(hobbies[0])

  const clickHandler = () => {
    if (hobbie === 'Web Developer') {
      setNew(hobbies[1]);
    } else if (hobbie === 'Reptile Enthusiast') {
      setNew(hobbies[2]);
    } else {
      setNew(hobbies[0]);
    }
  }

  // if you have data that might change upon an event you will need state 
  // useState is a React hook, they must be called inside of these component functions
  // assign an initial value for that variable
  // this will create an array [current value, updated value]
  // we can use array destructuring 

  const navs = [
    {
      id: 'e1',
      projtitle: 'Projects ',
      desc: ' a history of my work',
      text: "This is a collection of projects that I've worked on.",
    },
    {
      id: 'e2',
      projtitle: 'My skills',
      desc: 'technical experience',
      text: 'this is my resume',
    },
    {
      id: 'e3',
      projtitle: 'About me ',
      desc: '',
      text: 'If you want to know a little bit more about me.',
    },
    {
      id: 'e4',
      projtitle: 'Contact info ',
      desc: 'email, call or text',
      text: "Here are some ways to contact me",
    }
  ];

  const icons = [
    {
      id: 'e5',
      img: 'github.png',
      desc: 'Github',
      url: 'https://github.com/andrewbrase',
    },
    {
      id: 'e6',
      img: 'link.png',
      desc: '',
      url: 'https://www.linkedin.com/in/andrew-brase-a60527220/',
    },
    {
      id: 'e7',
      img: 'egg.png',
      desc: '',
      url: 'https://www.youtube.com/watch?v=YaYwasi72K8&t=405s',
    }
  ];

  var choice = 2;

  const theme = () => {

    const rightBody = document.getElementsByTagName("body");
    const rightText = document.getElementsByClassName("right-of-menu");
    const button = document.getElementsByClassName('button-style');
    const navbarColor = document.getElementsByClassName('navbar-back');

    const navItems = Array.from(
      document.getElementsByClassName('navback')
    )

    const rightTitles = Array.from(
      document.getElementsByClassName("row-title")
    )

    if (choice % 2 === 0) {
      // Bright
      rightBody[0].style.backgroundColor = "#c7c9c8";
      rightText[0].style.color = 'black';
      navbarColor[0].style.backgroundColor = '#1e1d4a';

      rightTitles.forEach(element => {
        element.style.color = 'rgb(70, 74, 150)';
      });

      navItems.forEach(element => {
        element.style.backgroundColor = '#04063b';
      });

      // setting the button to offer the choice of darken on the next click
      button[0].innerHTML = "Darken";
      return choice = choice + 1;

    } else {
      // Darken
      rightBody[0].style.backgroundColor = "rgb(42, 42, 42)";
      rightText[0].style.color = 'white';
      navbarColor[0].style.backgroundColor = 'rgb(27, 27, 27)';

      rightTitles.forEach(element => {
        element.style.color = 'white';
      });

      navItems.forEach(element => {
        element.style.backgroundColor = 'rgb(37, 37, 37)';
      });

      // setting the button to offer the choice of bright on the next click
      button[0].innerHTML = "Bright";
      return choice = choice + 1;
    }

  }

  return (

    <div>

      <div className='navbar-back'>

        <div className='button-right'>
          <button className='button-style' onClick={theme}>Bright</button>
        </div>

        <div className='logo'>

        </div>

        <div className='title'>
          <div className='name'>
            Andrew Brase
          </div>
          <div>
            {/* hobbies */}
            <div onClick={clickHandler}>{hobbie}</div>
          </div>
        </div>

        <div className='navprojects-start'>
          <Nav
            projtitle={navs[0].projtitle}
            desc={navs[0].desc}
          ></Nav>

          <Nav
            projtitle={navs[1].projtitle}
            desc={navs[1].desc}
          ></Nav>

          <Nav
            projtitle={navs[2].projtitle}
            desc={navs[2].desc}
          ></Nav>

          <Nav
            projtitle={navs[3].projtitle}
            desc={navs[3].desc}
          ></Nav>

          <div className='icons'>
            <div className='icon-item'>
              <IconLink
                img={icons[0].img}
                url={icons[0].url}
              ></IconLink>
            </div>

            <div className='icon-item'>
              <IconLink
                img={icons[1].img}
                url={icons[1].url}
              ></IconLink>
            </div>

            <div className='icon-item'>
              <IconLink
                img={icons[2].img}
                url={icons[2].url}
              ></IconLink>
            </div>
          </div>

        </div>
      </div>

      <div className='right-of-menu'>


        <div className='imgcirc'>
          <div className='grad'>
            <div className='welcome'>&lt;<span className='blue'>h1</span>&gt; Hi, I'm Andrew &lt;<span className='blue'>/h1</span>&gt;</div>
          </div>
        </div>


        <div className='flex-container'>
          <div className='flex-row'>
          <div className='para'><div className='row-title'>Welcome</div>My name is Andrew and I'm a self taught web developer.
            I'm passionate about studying to improve my skills everyday. I like constructive
            feedback so please reach out to me if you have any comments or advice!</div>

          <div className='para'>
            <img src='JS.jpg' className='para-img'></img>
            </div>
          </div>
        </div>


        <div className='flex-container'>
          <div className='para'>
            <img src='laptop.jpg' className='para-img'></img>
          </div>

          <div className='para'><div className='row-title'>My Projects</div>
            I've compiled a collection of my work throughout my web development learning to demonstrate
          </div>
        </div>


        <FormContact></FormContact>
      </div>
    </div>
  );
}

export default App;
