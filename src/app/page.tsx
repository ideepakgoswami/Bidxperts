"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-item"><i className="ph-fill ph-map-pin"></i> 123 Digital Way, Tech Hub, HYD - 500081</div>
          <div className="top-bar-contact">
            <a href="tel:+919030312910" className="top-bar-item"><i className="ph-fill ph-phone"></i> +91 9030312910</a>
            <a href="mailto:bidxperts@gmail.com" className="top-bar-item"><i className="ph-fill ph-envelope"></i> bidxperts@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">Bid<span className="text-primary">xperts</span> <span className="dot"></span></a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#platform">Case Studies</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a href="#quote" className="btn btn-dark">Free Consultation</a>
          </div>
          <button className="mobile-menu-btn">
            <i className="ph ph-list"></i>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-split">
          <div className="container hero-split-container">
            
            {/* Left Content */}
            <div className="hero-split-text">
              <div className="hero-tagline">
                <span className="line"></span> TOP-RATED DIGITAL MARKETING PARTNER
              </div>
              <h1 className="hero-title">
                Accelerate Your <span className="text-primary">Business Growth</span> With Data-Driven Marketing
              </h1>
              <p className="hero-description">
                Bidxperts specializes in crafting tailored, high-performance campaigns across SEO, PPC, and Social Media. We empower your brand to reach the right audience and achieve measurable, scalable success.
              </p>
              <div className="hero-buttons">
                <a href="#audit" className="btn btn-primary btn-lg">Book Free Consultation <i className="ph ph-arrow-right"></i></a>
                <a href="#services" className="btn btn-outline btn-lg">View Case Studies</a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <h3 className="text-primary">150+</h3>
                  <p>Successful Projects</p>
                </div>
                <div className="stat">
                  <h3 className="text-primary">250%</h3>
                  <p>Average Growth</p>
                </div>
                <div className="stat">
                  <h3 className="text-primary">7+</h3>
                  <p>Years of Expertise</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="hero-split-visual">
              <div className="hero-form-card">
                <div className="form-badge-wrapper">
                  <div className="form-badge-pill"><i className="ph-fill ph-rocket-launch"></i> DISCOVER YOUR POTENTIAL</div>
                </div>
                <h3 className="form-title">Request a Custom Audit</h3>
                <p className="form-subtitle">Share your details below, and our growth specialists will connect with you shortly.</p>
                <form className="hero-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="e.g. Rahul Sharma" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="e.g. +91 98765 43210" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="e.g. rahul@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Company / Website</label>
                    <input type="url" placeholder="e.g. www.yourwebsite.com" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Service Needed</label>
                      <select>
                        <option>Select Service</option>
                        <option>SEO</option>
                        <option>PPC</option>
                        <option>Social Media</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Monthly Budget</label>
                      <select>
                        <option>Select Budget</option>
                        <option>Below $1000</option>
                        <option>$1000 - $5000</option>
                        <option>Above $5000</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tell Us About Your Goals</label>
                    <textarea placeholder="Goals..." rows={2}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">Get Your Custom Strategy <i className="ph ph-arrow-right"></i></button>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Services Showcase (Alternating Layout) */}
        <section id="services" className="services-showcase">
          <div className="container">
            
            {/* SEO Service */}
            <div className="service-row">
              <div className="service-text">
                <div className="service-badge">Search Engine Optimization</div>
                <h2>Climb to the Top.<br/>Unlock <span className="text-highlight">Organic Potential</span></h2>
                <p>Increase your visibility and attract high-intent visitors without paying for clicks.</p>
                <ul className="service-benefits">
                  <li><i className="ph ph-check"></i> Higher Rankings</li>
                  <li><i className="ph ph-check"></i> Technical Optimization</li>
                  <li><i className="ph ph-check"></i> Content Strategy</li>
                  <li><i className="ph ph-check"></i> Link Building</li>
                  <li><i className="ph ph-check"></i> Targeted Traffic</li>
                  <li><i className="ph ph-check"></i> Analytics Reporting</li>
                </ul>
                <a href="#" className="btn btn-dark btn-lg">Get started now</a>
              </div>
              <div className="service-visual mockup-container">
                <div className="dashboard-mockup">
                  <div className="mockup-header">
                    <div className="mockup-search"><i className="ph ph-magnifying-glass"></i></div>
                  </div>
                  <div className="mockup-body">
                    <h4>Performance on Search results</h4>
                    <div className="mockup-tags">
                      <span className="mockup-tag">Search type: Web <i className="ph ph-pencil-simple"></i></span>
                      <span className="mockup-tag">Date: 17 Jun 2023 - 10 May 2... <i className="ph ph-pencil-simple"></i></span>
                      <span className="mockup-tag-new"><i className="ph ph-plus"></i> New</span>
                    </div>
                    <div className="mockup-stats">
                      <div className="m-stat stat-blue">
                        <span className="m-label"><i className="ph-fill ph-check-square"></i> Total clicks</span>
                        <span className="m-value">149K</span>
                      </div>
                      <div className="m-stat stat-purple">
                        <span className="m-label"><i className="ph-fill ph-check-square"></i> Total impressions</span>
                        <span className="m-value">7.23M</span>
                      </div>
                      <div className="m-stat stat-white">
                        <span className="m-label"><i className="ph ph-square"></i> Average CTR</span>
                        <span className="m-value">2.1%</span>
                      </div>
                      <div className="m-stat stat-white">
                        <span className="m-label"><i className="ph ph-square"></i> Average position</span>
                        <span className="m-value">9</span>
                      </div>
                    </div>
                    <div className="mockup-chart">
                       <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="chart-line">
                          <path d="M0,28 L10,28 L20,27 L30,28 L40,26 L50,25 L60,24 L70,20 L80,18 L85,5 L88,15 L92,8 L95,12 L100,5" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                          <path d="M0,29 L10,29 L20,29 L30,29 L40,28 L50,27 L60,26 L70,25 L80,22 L85,10 L88,20 L92,12 L95,18 L100,10" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
                       </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PPC Service */}
            <div className="service-row reverse">
              <div className="service-text">
                <div className="service-badge">Pay-Per-Click Advertising</div>
                <h2>Instantly Connect with <span className="text-highlight">Ready Buyers</span></h2>
                <p>Deploy precision-targeted ad campaigns designed to minimize wasted spend and maximize your return on investment.</p>
                <ul className="service-benefits">
                  <li><i className="ph ph-check"></i> Targeted Ads</li>
                  <li><i className="ph ph-check"></i> Performance Tracking</li>
                  <li><i className="ph ph-check"></i> Fast Results</li>
                  <li><i className="ph ph-check"></i> Multiple Platforms</li>
                  <li><i className="ph ph-check"></i> Budget Control</li>
                  <li><i className="ph ph-check"></i> Conversion Focused</li>
                </ul>
                <a href="#" className="btn btn-dark btn-lg">Get started now</a>
              </div>
              <div className="service-visual mockup-container">
                <div className="dashboard-mockup">
                  <div className="mockup-header">
                    <div className="mockup-search"><i className="ph ph-magnifying-glass"></i></div>
                  </div>
                  <div className="mockup-body">
                    <h4>Campaign Overview</h4>
                    <div className="mockup-tags">
                      <span className="mockup-tag">Platform: Google Ads <i className="ph ph-pencil-simple"></i></span>
                      <span className="mockup-tag-new"><i className="ph ph-plus"></i> New</span>
                    </div>
                    <div className="mockup-stats">
                      <div className="m-stat stat-blue">
                        <span className="m-label"><i className="ph-fill ph-check-square"></i> Conversions</span>
                        <span className="m-value">2,450</span>
                      </div>
                      <div className="m-stat stat-purple">
                        <span className="m-label"><i className="ph-fill ph-check-square"></i> Cost / Conv</span>
                        <span className="m-value">$12.40</span>
                      </div>
                    </div>
                    <div className="mockup-chart">
                       <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="chart-line">
                          <path d="M0,25 L20,20 L40,15 L60,20 L80,10 L100,5" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                       </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SMM Service */}
            <div className="service-row">
              <div className="service-text">
                <div className="service-badge">Social Media Marketing</div>
                <h2>Build a Loyal <span className="text-highlight">Brand Community</span></h2>
                <p>Transform followers into loyal brand advocates through compelling content and strategic community management.</p>
                <ul className="service-benefits">
                  <li><i className="ph ph-check"></i> Audience Targeting</li>
                  <li><i className="ph ph-check"></i> Platform Strategy</li>
                  <li><i className="ph ph-check"></i> Brand Building</li>
                  <li><i className="ph ph-check"></i> Content Creation</li>
                  <li><i className="ph ph-check"></i> Engagement Growth</li>
                  <li><i className="ph ph-check"></i> Analytics Tracking</li>
                </ul>
                <a href="#" className="btn btn-dark btn-lg">Get started now</a>
              </div>
              <div className="service-visual mockup-container">
                <div className="dashboard-mockup">
                  <div className="mockup-header">
                    <div className="mockup-search"><i className="ph ph-magnifying-glass"></i></div>
                  </div>
                  <div className="mockup-body">
                    <h4>Audience Engagement</h4>
                    <div className="mockup-tags">
                      <span className="mockup-tag">Network: Instagram <i className="ph ph-pencil-simple"></i></span>
                    </div>
                    <div className="mockup-stats">
                      <div className="m-stat stat-blue">
                        <span className="m-label"><i className="ph-fill ph-check-square"></i> Followers</span>
                        <span className="m-value">84.2K</span>
                      </div>
                      <div className="m-stat stat-purple">
                        <span className="m-label"><i className="ph-fill ph-check-square"></i> Engagement</span>
                        <span className="m-value">6.8%</span>
                      </div>
                    </div>
                    <div className="mockup-chart">
                       <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="chart-line">
                          <path d="M0,28 L20,25 L40,18 L60,15 L80,8 L100,5" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
                       </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#" className="logo">Bid<span className="text-primary">xperts</span> <span className="dot"></span></a>
            <p>A digital Marketing agency executing end-to-end solutions with data-driven tactics that boost your brand&apos;s impact.</p>
            <div className="social-links">
              <a href="#"><i className="ph-fill ph-facebook-logo"></i></a>
              <a href="#"><i className="ph-fill ph-instagram-logo"></i></a>
              <a href="#"><i className="ph-fill ph-youtube-logo"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">SEO Services</a></li>
              <li><a href="#">PPC Management</a></li>
              <li><a href="#">Social Media Ads</a></li>
              <li><a href="#">Content Marketing</a></li>
              <li><a href="#">Design & Development</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Address</h4>
            <div className="contact-item">
              <span>Bidxperts Solutions. All Rights Reserved.</span>
            </div>
            <div className="footer-mini-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
