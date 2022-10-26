import React from 'react'
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="app-header">

          <h1 className="title-app">
            Apps I've Built
          </h1>
          <p className="title-app">
            Take a look at some of the awesome apps I've built!
          </p>
        </div>
        <div className="flex-wrap">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="project-links">
              <div className="container-project">
                   <h1 className="project-title">
                    {project.title}
                  </h1> 
                  
                 <div className="project-info">
                <img
                  alt="gallery"
                  className="project-image"
                  src={project.image}
                />
                <div className='project-text'>
                  <h4 className="project-stack">
                    {project.subtitle}
                  </h4>
                  
                  <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
