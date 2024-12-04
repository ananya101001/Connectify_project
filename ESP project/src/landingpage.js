import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './landingpage.css';
import company1 from './assests/abid-shah-cxAV7aUesIQ-unsplash.jpg';
import company2 from './assests/boliviainteligente-z7ICBEMUJfw-unsplash.jpg';
import company3 from './assests/shutter-speed-RoqC4Bw5B8A-unsplash.jpg';


function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="landing-header">
        <div className="logo">Connectify</div>
        <nav className="nav-menu">
          <div className="button-container">
            <button className="signup-btn">Profile</button>
          </div>
        </nav>
      </header>

      <nav className="navbar-main">
        <ul className="nav-list-main">
          <li><a href="#">Find Jobs</a></li>
          <li><a href="#">Salary Tools</a></li>
          <li><a href="#">Career Advice</a></li>
          <li><a href="#">Resume Help</a></li>
          <li><a href="#">Upload Resume</a></li>
          <li>
            {/* Use Link to navigate to jobs.html */}
            <Link to="/jobs">Employers / Post Job</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Next Job with Connectify</h1>
          <p>Explore thousands of job listings and discover your dream career today.</p>
          <form className="job-search-form">
            <input type="text" placeholder="Job title or keyword" />
            <input type="text" placeholder="Location" />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section id="companies" className="featured-companies">
        <h2>Featured Companies</h2>
        <div className="company-logos">
          <div className="company-logo">
            <img src={company1} alt="Company 1" className="company-logo img" />
            <img src={company2} alt="Company 2" className="company-logo img" />
            <img src={company3} alt="Company 3" className="company-logo img" />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources-section">
        <h2>Career Resources</h2>
        <ul>
          <li><a href="#">Resume Writing Tips</a></li>
          <li><a href="#">Interview Preparation</a></li>
          <li><a href="#">Salary Negotiation</a></li>
          <li><a href="#">Career Development</a></li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="landing-footer">
        <p>&copy; 2024 Connectify. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default LandingPage;
