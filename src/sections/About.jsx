import React from "react";
import {
  FaUser,
  FaCode,
  FaArrowRight,
  FaLaptopCode,
  FaProjectDiagram,
  FaRocket,
  FaReact,
  FaJava,
  FaLightbulb,
} from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">

      {/* Background */}
      <div className="about-background">
        <div className="about-grid"></div>

        <div className="about-bg-glow about-bg-glow-left"></div>
        <div className="about-bg-glow about-bg-glow-right"></div>
      </div>

      <div className="about-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="about-heading">

          <div className="about-heading-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="about-heading-subtitle">
            <span></span>
            <p>PROFILE INTERFACE</p>
            <span></span>
          </div>

        </div>


        {/* =========================
            MAIN ABOUT CONTENT
        ========================= */}

        <div className="about-main">


          {/* =========================
              LEFT TECH VISUAL
          ========================= */}

          <div className="about-visual">

            <div className="visual-card">

              {/* Browser Header */}
              <div className="visual-header">

                <div className="browser-dots">
                  <span className="browser-red"></span>
                  <span className="browser-yellow"></span>
                  <span className="browser-green"></span>
                </div>

                <span className="visual-file">
                  developer.js
                </span>

              </div>


              {/* Code Area */}
              <div className="visual-code">

                <div className="code-row">
                  <span className="line-number">01</span>

                  <span className="code-purple">
                    const
                  </span>

                  <span className="code-white">
                    {" "}developer
                  </span>

                  <span className="code-blue">
                    {" "}=
                  </span>

                  <span className="code-green">
                    {" {"}
                  </span>
                </div>


                <div className="code-row code-indent">
                  <span className="line-number">02</span>

                  <span className="code-blue">
                    name:
                  </span>

                  <span className="code-orange">
                    {" "}S.Maruthi
                  </span>
                </div>


                <div className="code-row code-indent">
                  <span className="line-number">03</span>

                  <span className="code-blue">
                    role:
                  </span>

                  <span className="code-orange">
                    {" "}Full Stack Developer
                  </span>
                </div>


                <div className="code-row code-indent">
                  <span className="line-number">04</span>

                  <span className="code-blue">
                    degree:
                  </span>

                  <span className="code-orange">
                    {" "}B.Tech CSE
                  </span>
                </div>


                <div className="code-row code-indent">
                  <span className="line-number">05</span>

                  <span className="code-blue">
                    status:
                  </span>

                  <span className="code-orange">
                    {" "}Learning & Building
                  </span>
                </div>


                <div className="code-row">
                  <span className="line-number">06</span>

                  <span className="code-green">
                    {"}"}
                  </span>
                </div>

              </div>


              {/* Center Developer Icon */}
              <div className="visual-center">

                <div className="visual-center-glow"></div>

                <div className="visual-center-icon">
                  <FaCode />
                </div>

              </div>


              {/* Floating Tech Icons */}

              <div className="tech-orbit tech-orbit-react">
                <FaReact />
              </div>

              <div className="tech-orbit tech-orbit-java">
                <FaJava />
              </div>

              <div className="tech-orbit tech-orbit-spring">
                <SiSpringboot />
              </div>

              <div className="tech-orbit tech-orbit-mysql">
                <SiMysql />
              </div>


              {/* Bottom Text */}
              <div className="visual-footer">

                <span>
                  <FaCode />
                  CODE
                </span>

                <i></i>

                <span>
                  <FaLightbulb />
                  LEARN
                </span>

                <i></i>

                <span>
                  <FaLaptopCode />
                  BUILD
                </span>

              </div>

            </div>

          </div>


          {/* =========================
              RIGHT PROFILE PANEL
          ========================= */}

          <div className="about-profile-panel">

            <div className="panel-top-line"></div>


            {/* Name */}
            <div className="profile-name">

              <div className="profile-user-icon">
                <FaUser />
              </div>

              <h3>S.Maruthi</h3>

              <div className="student-badge">
                <span></span>
                B.Tech CSE Student
              </div>

            </div>


            {/* Role */}
            <div className="profile-role">
              Full Stack Developer &amp; Tech Enthusiast
            </div>


            {/* Description */}
            <div className="profile-description">

              <div className="description-indicator">
                <span></span>
              </div>

              <p>
                I am a passionate Computer Science and Engineering student
                interested in full stack web development. I enjoy building
                modern, responsive and user-friendly web applications and
                turning ideas into practical real-world solutions.
              </p>

            </div>


            {/* Focus */}
            <div className="profile-focus">

              <div className="focus-title">

                <span>
                  <FaCode />
                </span>

                <h4>What I'm Focused On</h4>

              </div>


              <div className="focus-items">

                {/* React */}
                <div className="focus-card focus-react">

                  <FaReact />

                  <span>React</span>

                </div>


                {/* Java */}
                <div className="focus-card focus-java">

                  <FaJava />

                  <span>Java</span>

                </div>


                {/* Spring Boot */}
                <div className="focus-card focus-spring">

                  <SiSpringboot />

                  <span>Spring Boot</span>

                </div>


                {/* MySQL */}
                <div className="focus-card focus-mysql">

                  <SiMysql />

                  <span>MySQL</span>

                </div>

              </div>

            </div>


            {/* Connect */}
            <div className="profile-connect-row">

              <a
                href="#contact"
                className="about-connect-button"
              >
                <span>Let's Connect</span>
                <FaArrowRight />
              </a>

              <span className="connect-text">
                Open to opportunities &amp; collaborations
              </span>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM STATS
        ========================= */}

        <div className="about-stats">


          {/* Technologies */}
          <div className="about-stat">

            <div className="stat-icon stat-blue">
              <FaLaptopCode />
            </div>

            <div className="stat-info">

              <strong>04+</strong>

              <span>
                Technologies
              </span>

              <small>
                I work with
              </small>

            </div>

          </div>


          <div className="stat-divider"></div>


          {/* Projects */}
          <div className="about-stat">

            <div className="stat-icon stat-purple">
              <FaProjectDiagram />
            </div>

            <div className="stat-info">

              <strong>01+</strong>

              <span>
                Major Project
              </span>

              <small>
                Completed
              </small>

            </div>

          </div>


          <div className="stat-divider"></div>


          {/* Passion */}
          <div className="about-stat">

            <div className="stat-icon stat-pink">
              <FaRocket />
            </div>

            <div className="stat-info">

              <strong>100%</strong>

              <span>
                Passion for
              </span>

              <small>
                Building
              </small>

            </div>

          </div>

        </div>


        {/* Bottom Glow Line */}
        <div className="about-bottom-line">
          <span></span>
        </div>

      </div>

    </section>
  );
}

export default About;