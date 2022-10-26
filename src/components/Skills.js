import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container-skills">
        <div className="constainer-header">
          
          <h1 className="skill-tech-header">
            Skills &amp; Technologies
          </h1>
          <p className="text">
            Here are some of the skills and technologies I have worked on and with
          </p>
        </div>
        <div className="container-list">
          {skills.map((skill) => (
            <div key={skill} className="skills-list">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="checkIcon" />
                <span className="skill-span">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
