import React from "react";

import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaBookOpen,
} from "react-icons/fa";

import "./Education.css";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">

        {/* Section Heading */}
        <div className="education-heading">

          <span className="education-label">
            EDUCATION
          </span>

          <h2 className="section-title">
            My Academic{" "}
            <span className="gradient-text">
              Journey
            </span>
          </h2>

          <p>
            My academic journey has helped me build a strong
            foundation in Computer Science, programming and
            software development.
          </p>

        </div>


        {/* Education Timeline */}
        <div className="education-timeline">

          {/* Timeline Line */}
          <div className="education-line"></div>


          {/* ================================
              B.TECH
          ================================= */}

          <div className="education-item">

            <div className="education-dot">
              <FaGraduationCap />
            </div>


            <div className="education-card">

              <div className="education-card-top">

                <div className="education-icon">
                  <FaUniversity />
                </div>

                <span className="education-status">
                  CURRENT
                </span>

              </div>


              <div className="education-content">

                <span className="education-year">
                  <FaCalendarAlt />
                  2023 - 2027
                </span>

                <h3>
                  B.Tech — Computer Science and Engineering
                </h3>

                <h4>
                  Final Year
                </h4>

                <p>
                  Sri Venkatesa Perumal College of Engineering
                  &amp; Technology, Puttur, Tirupati District.
                </p>

                <div className="education-tags">

                  <span>
                    2023 - 2027
                  </span>

                  <span>
                    78%
                  </span>

                  <span>
                    CSE
                  </span>

                  <span>
                    Final Year
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ================================
              INTERMEDIATE
          ================================= */}

          <div className="education-item">

            <div className="education-dot">
              <FaBookOpen />
            </div>


            <div className="education-card">

              <div className="education-card-top">

                <div className="education-icon">
                  <FaBookOpen />
                </div>

                <span className="education-status completed">
                  COMPLETED
                </span>

              </div>


              <div className="education-content">

                <span className="education-year">
                  <FaCalendarAlt />
                  2023
                </span>

                <h3>
                  Intermediate
                </h3>

                <h4>
                  Swamy Vivekananda Junior College, Anantapur
                </h4>

                <p>
                  Completed Intermediate education under the
                  Intermediate Board with a total of 849 marks.
                </p>

                <div className="education-tags">

                  <span>
                    2023
                  </span>

                  <span>
                    849 Marks
                  </span>

                  <span>
                    Intermediate Board
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ================================
              SSC
          ================================= */}

          <div className="education-item">

            <div className="education-dot">
              <FaGraduationCap />
            </div>


            <div className="education-card">

              <div className="education-card-top">

                <div className="education-icon">
                  <FaGraduationCap />
                </div>

                <span className="education-status completed">
                  COMPLETED
                </span>

              </div>


              <div className="education-content">

                <span className="education-year">
                  <FaCalendarAlt />
                  2021
                </span>

                <h3>
                  SSC
                </h3>

                <h4>
                  Z.P. High School, Siddarampuram
                </h4>

                <p>
                  Completed Secondary School Certificate
                  education at Z.P. High School, Siddarampuram,
                  Bukkarayasamudram Mandal, Anantapur District,
                  with 526 marks.
                </p>

                <div className="education-tags">

                  <span>
                    2021
                  </span>

                  <span>
                    526 Marks
                  </span>

                  <span>
                    SSC
                  </span>

                </div>

              </div>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
}

export default Education;