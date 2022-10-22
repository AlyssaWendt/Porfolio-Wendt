import React from 'react'
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="flex-it">
          <CodeIcon className="icon" />
          <h1 className="app-header">
            Apps I've Built
          </h1>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex-wrap">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="project-links">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="project-image"
                  src={project.image}
                />
                <div className="project-subtitles">
                  <h2 className="project-stack">
                    {project.subtitle}
                  </h2>
                  <h1 className="project-title">
                    {project.title}
                  </h1>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
