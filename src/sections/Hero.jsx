
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPython,
  FaGitAlt,
  FaGithubAlt,
  FaCode,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

import "./Hero.css";
import profileImage from "../assets/profile.png";

function Hero() {
  const roles = [
    "Fresher",
    "Quick Learner",
    "Problem Solver",
    "Learning New Technical Skills",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 55 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentRole.substring(0, displayText.length + 1)
        );

        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length - 1)
        );

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-background">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-orb hero-orb-three"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>
        <span className="particle particle-6"></span>
        <span className="particle particle-7"></span>
        <span className="particle particle-8"></span>
      </div>

      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-greeting">
            <span className="greeting-line"></span>
            <span>HELLO, I'M</span>
            <span className="greeting-star">✦</span>
          </div>

          {/* S.MARUTHI */}
          <h1 className="hero-title">
            <span className="name-full">
              <span className="name-s">S.</span>
              <span className="name-maruthi">MARUTHI</span>
            </span>
          </h1>

          {/* MAIN TITLE */}
          <h2 className="hero-main-title">
            I am a passionate learner building my technical skills.
          </h2>

          {/* Typing Role */}
          <div className="hero-role">
            <span>I am a </span>
            <strong>{displayText}</strong>
            <span className="typing-cursor">|</span>
          </div>

          {/* Description */}
          <p className="hero-description">
            I am a passionate learner with a foundation in Python
            and MySQL, continuously developing my technical skills
            and problem-solving abilities.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
            >
              View My Work
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn-secondary"
            >
              Let's Connect
            </a>

          </div>

          {/* Social Icons */}
          <div className="hero-socials">

            <a
              href="https://github.com/1096sakemaruthi"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/maruthi5f9/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:1096sakemaruthi@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="photo-glow"></div>

          {/* STATIC RINGS */}
          <div className="static-ring ring-one"></div>
          <div className="static-ring ring-two"></div>
          <div className="static-ring ring-three"></div>

          {/* PROFILE */}
          <div className="profile-wrapper">

            <div className="profile-backdrop"></div>

            <img
              src={profileImage}
              alt="S.Maruthi"
              className="profile-image"
            />

          </div>

          {/* TECH BADGES */}

          <div className="tech-badge badge-python">
            <FaPython />
            <span>Python</span>
          </div>

          <div className="tech-badge badge-mysql">
            <SiMysql />
            <span>MySQL</span>
          </div>

          <div className="tech-badge badge-git">
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div className="tech-badge badge-github">
            <FaGithubAlt />
            <span>GitHub</span>
          </div>

          <div className="tech-badge badge-vscode">
            <FaCode />
            <span>VS Code</span>
          </div>

          <div className="tech-badge badge-linkedin">
            <FaLinkedin />
            <span>LinkedIn</span>
          </div>

        </div>
      </div>

      {/* Scroll */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;

