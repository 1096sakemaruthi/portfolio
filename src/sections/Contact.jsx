import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio Contact - ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    window.location.href = `mailto:1096sakemaruthi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-background">
        <div className="contact-orb contact-orb-one"></div>
        <div className="contact-orb contact-orb-two"></div>
      </div>

      <div className="container">
        <div className="contact-heading">
          <span className="contact-label">LET'S CONNECT</span>

          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p>
            Have a project idea, opportunity or just want to say hello?
            Feel free to reach out. I'd love to connect with you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-top">
              <span className="contact-small-label">CONTACT ME</span>

              <h3>
                Let's build something{" "}
                <span className="gradient-text">great together.</span>
              </h3>

              <p>
                I'm always open to discussing new projects, development
                opportunities and interesting ideas.
              </p>
            </div>

            <div className="contact-details">

              {/* Email */}
              <a
                href="mailto:1096sakemaruthi@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>1096sakemaruthi@gmail.com</strong>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:8309001292"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <FaPhone />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+91 8309001292</strong>
                </div>
              </a>

              {/* Location */}
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Andhra Pradesh, India</strong>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <span>MESSAGE ME</span>
              <h3>Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="contact-form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="contact-form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="contact-form-group">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-submit-btn"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;