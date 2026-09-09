import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleLinkClick}
        >
          <span>S.MARUTHI</span>
          <span className="logo-star">✦</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="navbar-actions">

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="resume-btn"
          >
            <span className="resume-shine"></span>

            <FaDownload />

            <span className="resume-text">
              Resume
            </span>
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-btn"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label="Toggle navigation menu"
          >
            <span className="menu-icon">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </span>
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;