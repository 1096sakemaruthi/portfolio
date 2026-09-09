import React from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaCheckCircle,
  FaCode,
  FaLightbulb,
  FaArrowLeft,
  FaCloudSun,
} from "react-icons/fa";

import {
  SiNodedotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";

import "./ProjectDetails.css";
import weatherImage from "../assets/weather-report.png";

function WeatherDetails() {
  const technologies = [
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
    {
      name: "OpenWeather API",
      icon: <FaCloudSun />,
    },
  ];

  const features = [
    "City Search",
    "Current Location",
    "Current Weather",
    "5-Day Forecast",
    "Favorite Cities",
    "Weather Details",
  ];

  return (
    <section
      className="project-details section"
      id="project-details"
    >
      <div className="container">

        {/* Back to Projects */}
        <a
          href="/#projects"
          className="project-back-btn"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </a>

        {/* Project Heading */}
        <div className="project-details-top">

          <span className="project-details-label">
            PROJECT DETAILS
          </span>

          <h2 className="section-title">
            Weather{" "}
            <span className="gradient-text">
              Report
            </span>
          </h2>

          <p className="project-details-intro">
            A modern weather application that provides
            current weather information, forecasts and useful
            weather details for different cities.
          </p>

        </div>


        {/* Project Overview */}
        <div className="project-details-overview">

          <div className="project-details-image">

            <div className="project-details-image-glow"></div>

            <img
              src={weatherImage}
              alt="Weather Report Application"
            />

          </div>


          <div className="project-details-content">

            <span className="details-category">
              FULL STACK WEB APPLICATION
            </span>

            <h3>
              Project Overview
            </h3>

            <p>
              The Weather Report application is designed to
              provide simple and useful weather information
              for different cities.
            </p>

            <p>
              The application uses a React frontend connected
              with a Node.js and Express.js backend. Weather
              information is retrieved using the OpenWeather
              API and MySQL is used for database functionality.
            </p>

            <div className="project-details-buttons">

              <a
                href="https://github.com/1096sakemaruthi/weather-report-simple"
                target="_blank"
                rel="noreferrer"
                className="details-btn details-btn-primary"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://weather-report-simple.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="details-btn details-btn-secondary"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>


        {/* Technologies */}
        <div className="details-section">

          <div className="details-section-heading">

            <span>01</span>

            <div>
              <h3>
                Technologies Used
              </h3>

              <p>
                Technologies and tools used to build the
                application.
              </p>
            </div>

          </div>


          <div className="details-tech-grid">

            {technologies.map((technology) => (

              <div
                className="details-tech-card"
                key={technology.name}
              >

                <div className="details-tech-icon">
                  {technology.icon}
                </div>

                <span>
                  {technology.name}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Features */}
        <div className="details-section">

          <div className="details-section-heading">

            <span>02</span>

            <div>
              <h3>
                Key Features
              </h3>

              <p>
                Major functionality implemented in the project.
              </p>
            </div>

          </div>


          <div className="details-features-grid">

            {features.map((feature) => (

              <div
                className="details-feature-card"
                key={feature}
              >

                <FaCheckCircle />

                <span>
                  {feature}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* My Role & Project Goal */}
        <div className="details-info-grid">

          <div className="details-info-card">

            <div className="details-info-icon">
              <FaCode />
            </div>

            <div>

              <span className="details-info-label">
                MY ROLE
              </span>

              <h3>
                Full Stack Developer
              </h3>

              <p>
                Designed and developed the frontend,
                backend APIs, weather API integration,
                database functionality and overall
                application features.
              </p>

            </div>

          </div>


          <div className="details-info-card">

            <div className="details-info-icon">
              <FaLightbulb />
            </div>

            <div>

              <span className="details-info-label">
                PROJECT GOAL
              </span>

              <h3>
                Simple Weather Information
              </h3>

              <p>
                To provide current weather information and
                forecasts in a simple and user-friendly
                application.
              </p>

            </div>

          </div>

        </div>


        {/* Challenges & Solutions */}
        <div className="details-challenges">

          <div className="challenge-card">

            <span className="challenge-number">
              03
            </span>

            <h3>
              Challenges
            </h3>

            <p>
              Connecting the React frontend with the backend
              weather API, handling city and current-location
              requests and displaying weather and forecast
              information properly.
            </p>

          </div>


          <div className="challenge-card">

            <span className="challenge-number">
              04
            </span>

            <h3>
              Solutions
            </h3>

            <p>
              Implemented Express.js API endpoints using
              OpenWeather API, integrated them with React and
              used local storage for favorite cities and
              MySQL for database functionality.
            </p>

          </div>

        </div>


        {/* Screenshot */}
        <div className="details-section screenshots-section">

          <div className="details-section-heading">

            <span>05</span>

            <div>
              <h3>
                Project Screenshot
              </h3>

              <p>
                Preview of the Weather Report application.
              </p>
            </div>

          </div>


          <div className="details-screenshot-card">

            <img
              src={weatherImage}
              alt="Weather Report"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default WeatherDetails;