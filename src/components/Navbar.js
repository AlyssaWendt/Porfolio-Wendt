import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
 

export default function Navbar() {
  return (
    <header className="header">
      <div className="container-nav"> 
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="!#"> Alyssa Wendt Software Engineer</a>
        <nav className="nav">
        <a href="!#">
            <a href="#about" >
            About Me
            </a>
        </a>

          <a href="#projects" >
            Projects
          </a>
          <a href="#skills" >
            Skills
          </a>
        <a
            href="#contact"
            className="nav-contact">
                Hire Me
            <ArrowRightIcon className="arrow"/>
            
        </a>
        </nav>
        
      </div>
    </header>
  );
}
