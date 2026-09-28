import React from "react";
import {
  FaUser,
  FaCode,
  FaArrowRight,
  FaLaptopCode,
  FaProjectDiagram,
  FaRocket,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCodeBranch,
  FaLightbulb,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
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
                  maruthi.py
                </span>

              </div>


              {/* Code Area */}
              <div className="visual-code">

                <div className="code-row">
                  <span className="line-number">01</span>

                  <span className="code-purple">
                    profile
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
                    {" "}Fresher
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

              <div className="tech-orbit tech-orbit-python">
                <FaPython />
              </div>

              <div className="tech-orbit tech-orbit-git">
                <FaGitAlt />
              </div>

              <div className="tech-orbit tech-orbit-github">
                <FaGithub />
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
              Fresher &amp; Technology Learner
            </div>


            {/* Description */}
            <div className="profile-description">

              <div className="description-indicator">
                <span></span>
              </div>

              <p>
                I am a B.Tech Computer Science and Engineering student
                and a passionate learner. I have a foundation in Python
                and MySQL, and I am continuously improving my technical
                skills, problem-solving abilities and practical knowledge
                through learning and projects.
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

                {/* Python */}
                <div className="focus-card focus-python">

                  <FaPython />

                  <span>Python</span>

                </div>


                {/* MySQL */}
                <div className="focus-card focus-mysql">

                  <SiMysql />

                  <span>MySQL</span>

                </div>


                {/* Git */}
                <div className="focus-card focus-git">

                  <FaGitAlt />

                  <span>Git</span>

                </div>


                {/* GitHub */}
                <div className="focus-card focus-github">

                  <FaGithub />

                  <span>GitHub</span>

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
                Skills &amp; Tools
              </span>

              <small>
                I am learning
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


          {/* Learning */}
          <div className="about-stat">

            <div className="stat-icon stat-pink">
              <FaRocket />
            </div>

            <div className="stat-info">

              <strong>100%</strong>

              <span>
                Focus on
              </span>

              <small>
                Learning &amp; Growth
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