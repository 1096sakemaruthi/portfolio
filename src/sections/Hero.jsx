import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaReact,
  FaJava,
  FaDatabase,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

import { SiSpringboot } from "react-icons/si";

import "./Hero.css";
import profileImage from "../assets/profile.png";

function Hero() {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Java Developer",
    "Problem Solver",
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
            I build intelligent digital experiences.
          </h2>

          {/* Typing Role */}
          <div className="hero-role">
            <span>I am a </span>
            <strong>{displayText}</strong>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            I build modern, responsive and user-friendly web
            applications using React, Java, Spring Boot and MySQL.
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

          <div className="tech-badge badge-react">
            <FaReact />
            <span>React</span>
          </div>

          <div className="tech-badge badge-java">
            <FaJava />
            <span>Java</span>
          </div>

          <div className="tech-badge badge-db">
            <FaDatabase />
            <span>MySQL</span>
          </div>

          <div className="tech-badge badge-code">
            <FaCode />
            <span>Code</span>
          </div>

          <div className="tech-badge badge-spring">
            <SiSpringboot />
            <span>Spring</span>
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