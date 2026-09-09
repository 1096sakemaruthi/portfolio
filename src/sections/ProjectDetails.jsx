import React from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaCheckCircle,
  FaCode,
  FaLightbulb,
  FaArrowLeft,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

import "./ProjectDetails.css";
import cdmsImage from "../assets/cdms.png";

function ProjectDetails() {
  const technologies = [
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
  ];

  const features = [
    "User Registration and Login",
    "Product Browsing",
    "Product Management",
    "Customer Management",
    "Order Placement",
    "Order Tracking",
    "Order Cancellation",
    "Admin Dashboard",
  ];

  return (
    <section
      className="project-details section"
      id="project-details"
    >
      <div className="container">

        {/* Back to Projects */}
        <a
          href="/"
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
            Chocolate Distribution{" "}
            <span className="gradient-text">
              Management System
            </span>
          </h2>

          <p className="project-details-intro">
            A complete full-stack web application developed to
            simplify chocolate distribution, product management,
            customer management and order processing.
          </p>

        </div>


        {/* Project Overview */}
        <div className="project-details-overview">

          <div className="project-details-image">

            <div className="project-details-image-glow"></div>

            <img
              src={cdmsImage}
              alt="Chocolate Distribution Management System"
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
              The Chocolate Distribution Management System is
              designed to provide an efficient platform for
              managing chocolate products, customers and orders.
            </p>

            <p>
              The application contains a modern React frontend
              connected with a Java Spring Boot backend and MySQL
              database for reliable data management.
            </p>

            <div className="project-details-buttons">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="details-btn details-btn-primary"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://cdms-frontend-3bom.onrender.com"
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
                backend APIs, database integration and
                overall application functionality.
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
                Simplify Distribution
              </h3>

              <p>
                To create a centralized system that makes
                product, customer and order management easier
                and more efficient.
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
              Managing communication between the React
              frontend, Spring Boot backend and MySQL database
              while keeping the application responsive and
              user-friendly.
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
              Implemented REST APIs with Spring Boot,
              connected the application with MySQL and used
              React state management and API integration to
              create a smooth user experience.
            </p>

          </div>

        </div>


        {/* Screenshots */}
        <div className="details-section screenshots-section">

          <div className="details-section-heading">

            <span>05</span>

            <div>
              <h3>
                Project Screenshot
              </h3>

              <p>
                Preview of the Chocolate Distribution
                Management System.
              </p>
            </div>

          </div>


          <div className="details-screenshot-card">

            <img
              src={cdmsImage}
              alt="RK Choco Distributors"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;