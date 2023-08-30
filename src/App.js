import './App.css';
import AliceCarousel from 'react-alice-carousel'; 
import {Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, ScrollContainer , ScrollPage, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from 'react-scroll-motion';
import LestGo from './components/LestGo';
import LetsGo from './components/LetsGo';
import Logo from './components/Logo';
import Typo from './components/Typo';
import Navbar from './components/Navbar';
import profile from './images/Profile.jpg';
import insta from './images/instagram.png';
import discord from './images/d.png';
import linked from './images/linkedin.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import liveWall from './images/liveWall.svg';
import arrow from './images/arrow.png';
import arrow2 from './images/arrow2.png';

import './css/mobileView.css'
import { NavbarM } from './components/NavbarM';

const skills = [
                <Animator animation={batch(Fade())} className='card'>
                  <h2>UI/UX designer</h2>
                  <h3>Things I design :</h3>
                  <p>UX</p>
                  <p>UI</p>
                  <p>Web</p>
                  <p>Apps</p>
                  <h3>Tools I use :</h3>
                  <p>Figma</p>
                  <p>Affinity Designer</p>
                  <p>Sketch</p>
                </Animator>,

                <Animator animation={Fade()} className='card'>
                  <h2>Web Developer</h2>
                  <h3>Languages I use :</h3>
                  <p>HTML,</p>
                  <p>CSS,</p>
                  <p>Javascript,</p>
                  <h3>Framework I use :</h3>
                  <p>ReactJS</p>
                  <p>NodeJS</p>
                </Animator>,

                <Animator animation={batch(Fade())} className='card'>
                  <h2>AI Developer</h2>
                  <h3>Tools I use :</h3>
                  <p>Python,</p>
                  <p>OpenGL,</p>
                  <p>TensorFlow,</p>
                  <p>Pytorch</p>
                </Animator>,
                
]

const links = [
              <Animator animation={Fade()} className='card black scard'>
                <a href="https://instagram.com/rushikeshshinde760?igshid=YmMyMTA2M2Y=">
                  <img src={insta} alt="" />
                  <h3>@rushikeshshinde760</h3>
                  <p>you can follow</p>
                </a>
              </Animator>,

              <Animator animation={Fade()} className='card black scard'>
               <a href="https://discord.com/users/609649883753742348">
               <img src={discord} alt="" />
                <h3>@Rushikesh</h3>
                <p>You can join</p>
              </a>
              </Animator>,

              <Animator animation={Fade()} className='card black scard'>
               <a href="https://www.linkedin.com/in/rushikesh-shinde-948842239">
               <img src={linked} alt="" />
                <h3>@Rushizzz</h3>
                <p>You can follow</p>
              </a>
              </Animator>
]

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const ZoomInScrollIn = batch(FadeIn(), ZoomOut());

const response = () =>{
  alert("Sorry but Currently I am studying for my exams so I am not taking any work :(");
}
function App() {

  
  return (
    <div className="App">
      <ScrollContainer className='testing'>
        <ScrollPage>
        <div className="blackPage">
          <div className="upperPart">
            <Animator animation={batch(Fade(),MoveOut(1000, 0))}>
              <Logo/>
            </Animator>
            <Animator animation={batch(Fade(),MoveOut(-1000, 0))}>
              <LetsGo/>
            </Animator>
          </div>
          <div className="lowerPart">
            <Animator animation={ZoomInScrollIn} className='test1'>
              <Typo/>
            </Animator>
            <Animator className='animeBox' animation={batch(FadeIn(), ZoomOut())}>
              <Navbar/>
            </Animator>
          </div>
          
        </div>
        </ScrollPage>
        
        <ScrollPage>
            <div className="profile" id='aboutme'>
              <Animator animation={batch(FadeIn(), ZoomIn())} className="aboutmeHeading">
                <h1>About Me</h1>
              </Animator>
             
              <div className="profileContainer">
                <Animator animation={batch(MoveIn(-1000, 0),MoveOut(1000, 0))} className="aboutmeProfile">
                    <img src={profile} alt="" />
                  </Animator>
                  <Animator animation={batch()} className="aboutmeDescription">
                    <h2>Hi, I'm Rushi. Nice to meet you.</h2>
                    <p>
                      Since beginning my journeey I have done my diploma in 
                      <br /> Computer science, 
                      Right now I'm a student of Artificial 
                      <br /> Intelligence & data science branch of engineering, in VPKBIET.
                    </p>
                  </Animator>
              </div>
              <div className='bottom-section-arrow'>
                <div className='down-arrow'><a href="#skills"><img src={arrow}/></a></div>
              </div>
            </div>
        </ScrollPage>

        <ScrollPage className="imSkill" >
          <div className="skills" id='skills'>
            <Animator animation={batch(ZoomIn())} className="aboutmeHeading">
              <h1>Skills</h1>
            </Animator>
            <div className="cardContainer">
              <AliceCarousel mouseTracking items={skills} 
                             disableButtonsControls
                             disableDotsControls
                             autoPlay
                             autoPlayInterval={3000}
                             infinite
                             responsive={responsive}
                             />    
            </div>
            <div className='bottom-section-arrow'>
                <div className='down-arrow'><a href="#sm"><img src={arrow2}/></a></div>
              </div>
          </div>
        </ScrollPage>

        <ScrollPage >
          <div className="skills socialMedia" style={{backgroundImage: `url(${liveWall})` }} id='sm'>
          <Animator animation={batch(Fade())} className="aboutmeHeading">
              <h1>Social Links</h1>
            </Animator>
            <div className="cardContainer">
              <AliceCarousel mouseTracking items={links} 
                             disableButtonsControls
                             disableDotsControls 
                             autoPlay
                             autoPlayInterval={1500}
                             infinite
                             responsive={responsive}
                             /> 
            </div>
            <div className='bottom-section-arrow'>
                <div className='down-arrow'><a href="#discussD"><img src={arrow}/></a></div>
              </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className='blackPage contactme' id='discussD'>
              <div className="aboutmeHeading">
                <Animator animation={ZoomIn()}>
                  <h1>Let's Work</h1>
                </Animator>
              </div>
              <div className="form">
                <div className="block">
                  <label>Full Name</label>
                  <input type="text" />
                </div>
                <div className="block">
                  <label>Email</label>
                  <input type="text" />
                </div>
                <div className="block">
                  <label>Phone No</label>
                  <input type="number" />
                </div>
                <div className="block description">
                  <label>Project Description</label>
                  <input type="text" />
                </div>
                  <button onClick={response}>Send </button>
              </div>
        </div> 
        </ScrollPage>
        
      </ScrollContainer>

      <div className='mobileView'>
        <div className="blackPage">
          <div className="upperPart">
            <div>
              <Logo/>
            </div>
            <div >
              <LestGo/>
            </div>
          </div>
          <div className="lowerPart">
            <div className='test1'>
              <Typo/>
            </div>
            <div className='animeBox' >
              <NavbarM/>
            </div>
          </div>
          
        </div>
        
            <div className="profile" id='aboutmeM'>
              <div className="aboutmeHeading">
                <h1>About Me</h1>
              </div>
             
              <div className="profileContainer">
                <div className="aboutmeProfile">
                    <img src={profile} alt="" />
                  </div>
                  <div className="aboutmeDescription">
                    <h2>Hi, I'm Rushi. Nice to meet you.</h2>
                    <p>
                      Since beginning my journey I have done my diploma in 
                      Computer science, 
                      Right now I'm a student of Artificial 
                      Intelligence & data science, branch of engineering, in VPKBIET.
                    </p>
                  </div>
              </div>
            </div>
        

        
          <div className="skills" id='skillsM'>
            <div className="aboutmeHeading">
              <h1>Skills</h1>
            </div>
            <div className="cardContainer">
              <AliceCarousel mouseTracking items={skills} 
                             disableButtonsControls
                             disableDotsControls
                             autoPlay
                             autoPlayInterval={1500}
                             infinite
                             responsive={responsive}
                             />    
            </div>
          </div>
      

        
          <div className="skills socialMedia" style={{backgroundImage: `url(${liveWall})` }} id='smM'>
          <div className="aboutmeHeading">
              <h1>Social Links</h1>
            </div>
            <div className="cardContainer">
              <AliceCarousel mouseTracking items={links} 
                             disableButtonsControls
                             disableDotsControls 
                             autoPlay
                             autoPlayInterval={1500}
                             infinite
                             responsive={responsive}
                             /> 
            </div>
          </div>
          <div className='blackPage contactme' id='discuss'>
            <div className="aboutmeHeading">
              <h1>Let's Work</h1>
            </div>
             <div className="form">
              <div className="block">
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div className="block">
                <label>Email</label>
                <input type="text" />
              </div>
              <div className="block">
                <label>Phone No</label>
                <input type="number" />
              </div>
              <div className="block description">
                <label>Project Description</label>
                <input type="text" />
              </div>
                <button onClick={response}>Send </button>
             </div>
      </div> 

        
      </div>
    </div>
  );
}

export default App;
