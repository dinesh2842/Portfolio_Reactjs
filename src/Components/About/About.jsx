import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg'; 

const About = () => {
  return (
    <div id='about' className='about' >
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm an experienced Full stack Developer with 1 year of experience </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptates asperiores voluptatum sequi! Pariatur est 
            temporibus, voluptate ex facere culpa corporis id quas similique quasi. Dolore doloribus eveniet nulla necessitatibus.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <p>REACTJS</p>
              <p>JAVASCRIPT</p>
              <p>DJANGO </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achivement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />  
        <div className="about-achivement">
          <h1>FEW</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About
