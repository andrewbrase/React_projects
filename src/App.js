import Nav from './components/navitem';
import IconLink from './components/iconlink';
import './App.css';

function App() {

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
  ]

  return (

    <div>

      <div className='navbar-back'>

        <div className='logo'>

        </div>

        <div className='title'>
          <div className='name'>
            Andrew Brase
          </div>
          <div>
            Web Developer
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
        <div className='grad'>
          <div className='welcome'>&lt;<span className='blue'>h1</span>&gt; Hi, I'm Andrew &lt;<span className='blue'>/h1</span>&gt;</div>
        </div>

        <div className='right-grid'>
          <div className='col-one'>
          <div className='row-one'>
            <div className='row-title'>Welcome</div> 
          
          </div>
          </div>

          <div className='col-two'>
          {/* index will be here ... to continue project */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
