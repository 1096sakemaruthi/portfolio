import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";

import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Frontend",
      description: "Modern & responsive interfaces",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
      ],
    },

    {
      number: "02",
      title: "Backend",
      description: "APIs & application logic",
      skills: [
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpringboot />,
        },
      ],
    },

    {
      number: "03",
      title: "Database",
      description: "Structured data management",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],
    },

    {
      number: "04",
      title: "Tools",
      description: "Development & version control",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
        },
        {
          name: "VS Code",
          icon: <FaCode />,
        },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      <div className="container">

        {/* Heading */}
        <div className="skills-heading">
          <span className="skills-label">
            TECH STACK
          </span>

          <h2 className="section-title">
            Technologies I{" "}
            <span className="gradient-text">
              Work With
            </span>
          </h2>

          <p>
            Technologies and tools I use to build modern,
            responsive and scalable applications.
          </p>
        </div>

        {/* Compact Skills */}
        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div
              className="skill-card"
              key={category.title}
            >

              {/* Category Header */}
              <div className="skill-card-header">

                <div className="skill-number">
                  {category.number}
                </div>

                <div className="skill-category-info">
                  <h3>{category.title}</h3>

                  <p>
                    {category.description}
                  </p>
                </div>

              </div>

              {/* Skill Pills */}
              <div className="skill-list">

                {category.skills.map((skill) => (
                  <div
                    className="skill-item"
                    key={skill.name}
                  >
                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span className="skill-name">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;