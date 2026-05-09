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
      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Bidxperts Logo" className="logo-img" />
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services <i className="ph-bold ph-caret-down"></i></a>
            <a href="#cases">Case Studies</a>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a href="#quote" className="btn btn-primary">Book Strategy Call <i className="ph-bold ph-arrow-right"></i></a>
          </div>
          <button className="mobile-menu-btn">
            <i className="ph ph-list"></i>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container hero-container">
            
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-tagline">
                <span className="line"></span> PERFORMANCE MARKETING AGENCY
              </div>
              <h1 className="hero-title">
                We Grow Businesses With Marketing That <span className="text-primary">Drives Real Results</span>
              </h1>
              <p className="hero-description">
                We help brands generate high-quality leads, increase ROAS, and scale profitably through Google Ads, Meta Ads, SEO, and conversion-focused strategies.
              </p>
              
              <div className="hero-buttons">
                <a href="#audit" className="btn btn-primary btn-lg">Get Free Growth Audit <i className="ph-bold ph-arrow-right"></i></a>
                <a href="#cases" className="btn-link">View Case Studies <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              
              <div className="trust-badges">
                <div className="trust-badge">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/512px-Google_Ads_logo.svg.png" alt="Google Ads" className="badge-icon-img" />
                  <span>Google Ads<br/>Certified</span>
                </div>
                <div className="trust-badge">
                  <i className="ph-fill ph-meta-logo text-blue-600"></i>
                  <span>Meta Business<br/>Partner</span>
                </div>
                <div className="trust-badge">
                  <i className="ph-fill ph-seal-check text-primary"></i>
                  <span>7+ Years<br/>Experience</span>
                </div>
                <div className="trust-badge">
                  <i className="ph-fill ph-target text-primary"></i>
                  <span>ROI-Focused<br/>Strategies</span>
                </div>
              </div>
              
              <div className="hero-stats-card">
                <div className="stat">
                  <div className="stat-icon"><i className="ph-fill ph-users"></i></div>
                  <div>
                    <h3>300+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="stat">
                  <div className="stat-icon"><i className="ph-bold ph-trend-up"></i></div>
                  <div>
                    <h3>300%+</h3>
                    <p>Average ROAS</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="stat">
                  <div className="stat-icon"><i className="ph-fill ph-wallet"></i></div>
                  <div>
                    <h3>₹10Cr+</h3>
                    <p>Ad Spend Managed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="hero-form-wrapper">
              <div className="hero-form-card">
                <div className="form-badge-pill">
                  <i className="ph-fill ph-phone-call"></i> FREE STRATEGY CALL
                </div>
                <h3 className="form-title">Let&apos;s Discuss Your Growth Goals</h3>
                <p className="form-subtitle">Fill out the form and our team will get back to you within 2 hours.</p>
                
                <form className="hero-form">
                  <div className="form-row">
                    <div className="form-group with-icon">
                      <i className="ph ph-user"></i>
                      <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="form-group with-icon">
                      <i className="ph ph-envelope-simple"></i>
                      <input type="email" placeholder="Email Address" required />
                    </div>
                  </div>
                  
                  <div className="form-group with-icon">
                    <i className="ph ph-phone"></i>
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Service Needed</label>
                      <select>
                        <option>Select Service</option>
                        <option>Google Ads</option>
                        <option>Meta Ads</option>
                        <option>SEO</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Monthly Budget</label>
                      <select>
                        <option>Select Budget</option>
                        <option>Below ₹50,000</option>
                        <option>₹50,000 - ₹2,00,000</option>
                        <option>Above ₹2,00,000</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Tell Us About Your Goals</label>
                    <textarea placeholder="Write your goals here..." rows={3}></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    Get Free Consultation <i className="ph-bold ph-arrow-right"></i>
                  </button>
                  
                  <p className="secure-text">
                    <i className="ph-fill ph-lock-key"></i> Your information is 100% secure and confidential.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Services Showcase */}
        <section id="services" className="services-showcase">
          <div className="container">
            
            {/* SEO Service */}
            <div className="service-row">
              <div className="service-text">
                <div className="service-badge">Search Engine Optimization</div>
                <h2>Climb to the Top.<br/>Unlock <span className="text-primary">Organic Potential</span></h2>
                <p>Increase your visibility and attract high-intent visitors without paying for clicks.</p>
                <ul className="service-benefits">
                  <li><i className="ph ph-check"></i> Higher Rankings</li>
                  <li><i className="ph ph-check"></i> Technical Optimization</li>
                  <li><i className="ph ph-check"></i> Content Strategy</li>
                  <li><i className="ph ph-check"></i> Link Building</li>
                  <li><i className="ph ph-check"></i> Targeted Traffic</li>
                  <li><i className="ph ph-check"></i> Analytics Reporting</li>
                </ul>
                <a href="#" className="btn btn-primary btn-lg">Get started now</a>
              </div>
              <div className="service-visual mockup-container">
                <div className="dashboard-mockup">
                  <div className="mockup-header">
                    <div className="mockup-search"><i className="ph ph-magnifying-glass"></i></div>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-tags">
                      <span className="mockup-tag">Search type: Web <i className="ph ph-pencil-simple"></i></span>
                    </div>
                    <div className="mockup-stats">
                      <div className="m-stat">
                        <span className="m-label">Total clicks</span>
                        <span className="m-value">149K</span>
                      </div>
                      <div className="m-stat">
                        <span className="m-label">Total impressions</span>
                        <span className="m-value">7.23M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PPC Service */}
            <div className="service-row reverse">
              <div className="service-text">
                <div className="service-badge">Pay-Per-Click Advertising</div>
                <h2>Instantly Connect with <span className="text-primary">Ready Buyers</span></h2>
                <p>Deploy precision-targeted ad campaigns designed to minimize wasted spend and maximize your return on investment.</p>
                <ul className="service-benefits">
                  <li><i className="ph ph-check"></i> Targeted Ads</li>
                  <li><i className="ph ph-check"></i> Performance Tracking</li>
                  <li><i className="ph ph-check"></i> Fast Results</li>
                  <li><i className="ph ph-check"></i> Multiple Platforms</li>
                  <li><i className="ph ph-check"></i> Budget Control</li>
                  <li><i className="ph ph-check"></i> Conversion Focused</li>
                </ul>
                <a href="#" className="btn btn-primary btn-lg">Get started now</a>
              </div>
              <div className="service-visual mockup-container">
                <div className="dashboard-mockup">
                  <div className="mockup-header">
                    <div className="mockup-search"><i className="ph ph-magnifying-glass"></i></div>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-tags">
                      <span className="mockup-tag">Platform: Google Ads <i className="ph ph-pencil-simple"></i></span>
                    </div>
                    <div className="mockup-stats">
                      <div className="m-stat">
                        <span className="m-label">Conversions</span>
                        <span className="m-value">2,450</span>
                      </div>
                      <div className="m-stat">
                        <span className="m-label">Cost / Conv</span>
                        <span className="m-value">$12.40</span>
                      </div>
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
            <a href="#" className="logo">
              <img src="/logo.png" alt="Bidxperts Logo" className="logo-img" />
            </a>
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
        </div>
      </footer>
    </>
  );
}
