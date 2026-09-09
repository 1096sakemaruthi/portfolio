import React from "react";
import {
  FaArrowUp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-orb footer-orb-one"></div>
        <div className="footer-orb footer-orb-two"></div>
      </div>

      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>S.MARUTHI</span>
              <span className="footer-star">✦</span>
            </a>

            <p>
              B.Tech CSE Student & Full Stack Developer passionate about
              building modern and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <span className="footer-heading">QUICK LINKS</span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <span className="footer-heading">CONTACT</span>

            <a href="mailto:1096sakemaruthi@gmail.com">
              <FaEnvelope />
              <span>1096sakemaruthi@gmail.com</span>
            </a>

            <a href="tel:8309001292">
              <FaPhone />
              <span>+91 8309001292</span>
            </a>
          </div>

          {/* Back To Top */}
          <div className="footer-top-wrapper">
            <a href="#home" className="footer-top-btn">
              <FaArrowUp />
            </a>

            <span>BACK TO TOP</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>S.Maruthi</strong>. All rights reserved.
          </p>

          <p className="footer-made">
            Designed & Built with <span>♥</span> by S.Maruthi
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;