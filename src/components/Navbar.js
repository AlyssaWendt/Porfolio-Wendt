import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
 

export default function Navbar() {
  return (
    <header className="header">
      <div className="container-nav"> // eslint-disable-next-line
        <a className="link4about">
          <a href="#about" className="nav-about">
            Alyssa Wendt
          </a>
        </a>
        <nav className="nav">
          <a href="#projects" className="nav-projects">
            Past Work
          </a>
          <a href="#skills" className="nav-skills">
            Skills
          </a>
        </nav>
        <a
          href="#contacts"
          className="nav-contact">
          <ArrowRightIcon className="arrrow-right-icon" />
        </a>
      </div>
    </header>
  );
}
