import React from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaReact,
  FaJava,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

import "./Projects.css";

import cdmsImage from "../assets/cdms.png";
import weatherImage from "../assets/weather-report.png";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Chocolate Distribution Management System",
      shortTitle: "CDMS",
      description:
        "A full-stack web application designed to manage chocolate products, customers, orders and distribution operations through a modern and user-friendly interface.",

      technologies: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpringboot />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],

      features: [
        "Product Management",
        "Customer Management",
        "Order Management",
        "Admin Dashboard",
      ],

      image: cdmsImage,

      github: "https://github.com/",
      live: "https://cdms-frontend-3bom.onrender.com",
    },

    {
      number: "02",
      title: "Weather Report",
      shortTitle: "Weather Report",
      description:
        "A modern weather application that provides current weather information, forecasts and useful weather details for different cities.",

      technologies: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],

      features: [
        "City Search",
        "Current Location",
        "Weather Forecast",
        "Weather Details",
      ],

      image: weatherImage,

      github:
        "https://github.com/1096sakemaruthi/weather-report-simple",

      live: "https://weather-report-simple.onrender.com",
    },
  ];

  return (
    <section
      className="projects section"
      id="projects"
    >
      <div className="container">

        {/* Heading */}
        <div className="projects-heading">

          <span className="projects-label">
            FEATURED PROJECTS
          </span>

          <h2 className="section-title">
            Things I've{" "}
            <span className="gradient-text">
              Built
            </span>
          </h2>

          <p>
            A selection of projects that showcase my
            development skills, technical knowledge and
            problem-solving approach.
          </p>

        </div>


        {/* Projects */}
        <div className="projects-list">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.number}
            >

              {/* Project Image */}
              <div className="project-image-wrapper">

                <div className="project-image-glow"></div>

                {project.image ? (

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                ) : (

                  <div className="project-image-placeholder">

                    <span className="placeholder-number">
                      {project.number}
                    </span>

                    <span className="placeholder-text">
                      PROJECT PREVIEW
                    </span>

                  </div>

                )}

                <div className="project-number">
                  {project.number}
                </div>

              </div>


              {/* Project Content */}
              <div className="project-content">

                <div className="project-top">

                  <span className="project-category">
                    FULL STACK WEB APPLICATION
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>


                {/* Technologies */}
                <div className="project-tech">

                  {project.technologies.map(
                    (technology) => (

                      <div
                        className="project-tech-item"
                        key={technology.name}
                      >

                        <span className="project-tech-icon">
                          {technology.icon}
                        </span>

                        <span>
                          {technology.name}
                        </span>

                      </div>

                    )
                  )}

                </div>


                {/* Features */}
                <div className="project-features">

                  {project.features.map(
                    (feature) => (

                      <span
                        className="project-feature"
                        key={feature}
                      >
                        {feature}
                      </span>

                    )
                  )}

                </div>


                {/* Buttons */}
                <div className="project-actions">

                  {/* View Details */}
                  <a
                    href={
                      project.number === "01"
                        ? "/project/cdms"
                        : "/project/weather"
                    }
                    className="project-btn project-btn-primary"
                  >
                    View Details
                    <FaArrowRight />
                  </a>


                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    <FaGithub />
                    GitHub
                  </a>


                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;