import React from "react";


export default function About() {
  return (
    <section id="about" className="about">
      <div className="main-container">
        <div className="container-about">
          <h1 className="title">
            Hi, I'm Alyssa.
            <br className="break" />I love to build amazing
            apps!
          </h1>
          <div className="me">
          <img
            className="profile-pic"
            alt="hero"
            src="https://i.imgur.com/f9B6dvb.jpg?1"
          />
        </div>
          <p className="brand">
        I am an eager software engineer! I enjoy the frontend aspect of design which 
        focuses on visuals and client needs. I also have a passion for backend development,
        particularly in exercising problem solving and analytical skills with Node.js and 
        Express technologies.Previously, I worked in IT customer support and I am 
        currently a soldier in the US Army Reserve as an IT professional. Through
        these experiences, I've grown to love the process of learning in a fast paced 
        environment, leading with curiosity and working with a team to create practical 
        and meaningful solutions in the tech space. Moving forward, I am excited to take
        these experiences and create exciting opportunities for professional and personal
        success.

          </p>
          <div className="linking">
            <a
              href="#contact"
              className="link-contact">
              Work With Me
            </a>
            <br/>
            <a
              href="#projects"
              className="link-projects">
              See My Past Work
            </a>
          </div>
        </div>
       
      </div>
    </section>
  );
}
