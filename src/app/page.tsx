"use client";

import { useEffect } from "react";
import Link from "next/link";

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
          <Link href="/" className="logo">
            <img src="/logo.png" alt="Bidxperts Logo" className="logo-img" />
          </Link>
          <nav className="nav-links">
            <Link href="/" className="active">Home</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/services/google-ads">Services <i className="ph-bold ph-caret-down"></i></Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact Us</Link>
          </nav>
          <div className="nav-actions">
            <a href="#audit" className="btn btn-primary">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-tagline">RESULTS-FOCUSED DIGITAL MARKETING</div>
              <h1>
                Data-Driven Marketing That Converts Clicks Into Customers. <span className="text-primary">That&apos;s Bidxperts.</span>
              </h1>
              <p>
                We help businesses attract the right audience, generate quality leads,
                and maximize ROI with performance-driven marketing strategies.
              </p>
              
              <div className="hero-actions">
                <a href="#audit" className="btn btn-white btn-lg">Get Your Free Audit <i className="ph-bold ph-arrow-right"></i></a>
                <a href="#process" className="btn btn-outline-transparent btn-lg"><i className="ph-fill ph-play-circle text-white" style={{fontSize: "1.2rem"}}></i> See How We Do It</a>
              </div>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-icon"><i className="ph-fill ph-users-three"></i></div>
                  <div className="stat-text">
                    <h3>50+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                  <div className="stat-icon"><i className="ph-bold ph-trend-up"></i></div>
                  <div className="stat-text">
                    <h3>3X</h3>
                    <p>Average ROI</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                  <div className="stat-icon"><i className="ph-fill ph-wallet"></i></div>
                  <div className="stat-text">
                    <h3>10L+</h3>
                    <p>Ad Spend Managed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="hero-form-wrapper" id="audit">
              <div className="hero-form-card">
                <h2>Get Your <span className="text-primary">FREE</span> Marketing Audit</h2>
                <p>Fill out the form and our experts will get back to you within 24 hours.</p>
                
                <form className="hero-form">
                  <div className="form-group with-icon">
                    <i className="ph ph-user"></i>
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="form-group with-icon">
                    <i className="ph ph-envelope-simple"></i>
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-group with-icon">
                    <i className="ph ph-phone"></i>
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group with-icon">
                    <i className="ph ph-globe"></i>
                    <input type="url" placeholder="Website (if any)" />
                  </div>
                  
                  <div className="form-group">
                    <select required>
                      <option value="" disabled selected>What are you looking for?</option>
                      <option value="seo">SEO</option>
                      <option value="ads">Paid Ads</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="" disabled selected>Monthly Marketing Budget</option>
                      <option value="<50k">Below ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value=">1L">Above ₹1,00,000</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <textarea placeholder="Tell us about your business" rows={2} required></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    Get Free Audit <i className="ph-bold ph-arrow-right"></i>
                  </button>
                  
                  <div className="privacy-guarantee">
                    <i className="ph-fill ph-lock-key"></i> 100% Privacy Guaranteed
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Why Businesses Choose Us */}
        <section id="about" className="why-choose-us">
          <div className="container grid-2">
            <div className="why-left">
              <div className="section-tag">WHY BUSINESSES CHOOSE US</div>
              <h2>Your <span className="text-primary">Growth</span> Is Our Responsibility</h2>
              <p>We don&apos;t believe in one-size-fits-all. Every strategy we build is customized to your goals, your audience, and your industry.</p>
              <a href="#about" className="btn btn-dark">Learn More About Us <i className="ph-bold ph-arrow-right"></i></a>
            </div>
            <div className="why-right features-grid">
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-bold ph-target"></i></div>
                <div className="feature-text">
                  <h4>ROI-First Approach</h4>
                  <p>We focus on what matters - measurable results that drive business growth.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-fill ph-file-text"></i></div>
                <div className="feature-text">
                  <h4>Transparent Reporting</h4>
                  <p>Real-time reports and clear insights to track every rupee you invest.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-fill ph-user-circle"></i></div>
                <div className="feature-text">
                  <h4>Dedicated Experts</h4>
                  <p>A skilled team that works as an extension of your business.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-fill ph-star"></i></div>
                <div className="feature-text">
                  <h4>Proven Strategies</h4>
                  <p>Data-backed strategies that have delivered exceptional results across industries.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-bold ph-puzzle-piece"></i></div>
                <div className="feature-text">
                  <h4>End-to-End Solutions</h4>
                  <p>From strategy to execution, we handle everything so you can focus on growth.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-bold ph-headset"></i></div>
                <div className="feature-text">
                  <h4>24/7 Support</h4>
                  <p>We&apos;re always here to solve your problems and answer your questions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">OUR SERVICES</div>
              <h2>Digital Marketing Solutions That Drive Real Results</h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-magnifying-glass"></i></div>
                <h4>SEO Services</h4>
                <p>Rank higher on Google, get more organic traffic and generate consistent leads.</p>
                <a href="#" className="service-link">Learn More <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-desktop"></i></div>
                <h4>Website Design</h4>
                <p>We design fast, responsive and conversion-focused websites that turn visitors into customers.</p>
                <a href="#" className="service-link">Learn More <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-paper-plane-tilt"></i></div>
                <h4>Google Ads</h4>
                <p>Get high-intent leads and maximize ROI with data-driven Google Ads campaigns.</p>
                <a href="#" className="service-link">Learn More <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-chart-bar"></i></div>
                <h4>Meta Ads</h4>
                <p>Reach the right audience on Facebook & Instagram and turn them into customers.</p>
                <a href="#" className="service-link">Learn More <i className="ph-bold ph-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="process-section">
          <div className="container">
            <div className="section-header">
              <div className="section-tag text-white" style={{opacity: 0.8}}>OUR PROCESS</div>
              <h2>A Simple Process That Drives Big Results</h2>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="process-icon"><i className="ph-bold ph-magnifying-glass text-white"></i></div>
                <span className="process-num">01</span>
                <h4>Discover</h4>
                <p>We understand your business, audience & competition.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-bold ph-clipboard-text text-white"></i></div>
                <span className="process-num">02</span>
                <h4>Plan</h4>
                <p>We create a customized strategy tailored to your goals.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-bold ph-paper-plane-tilt text-white"></i></div>
                <span className="process-num">03</span>
                <h4>Execute</h4>
                <p>We launch campaigns with precision and best practices.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-bold ph-chart-line-up text-white"></i></div>
                <span className="process-num">04</span>
                <h4>Optimize</h4>
                <p>We monitor, test and optimize for better performance.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-fill ph-trophy text-white"></i></div>
                <span className="process-num">05</span>
                <h4>Scale</h4>
                <p>We scale what works to maximize ROI and business growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-tag">WHAT OUR CLIENTS SAY</div>
            <h2>Loved by Businesses, Proven by Results</h2>
            
            <div className="testimonials-slider">
              <button className="slider-arrow"><i className="ph-bold ph-caret-left"></i></button>
              
              <div className="testimonial-card">
                <div className="stars">
                  <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <i className="ph-fill ph-quotes quote-icon"></i>
                <p>Bidxperts delivered more leads in 3 months than we got in the entire last year. Highly professional and results-driven team!</p>
                <div className="client-info">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Rohit Malhotra" />
                  <div>
                    <h5>Rohit Malhotra</h5>
                    <span>Founder, Urban Planter</span>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="stars">
                  <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <i className="ph-fill ph-quotes quote-icon"></i>
                <p>Their Google Ads strategy has completely transformed our business. ROI is better than ever before!</p>
                <div className="client-info">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Neha Verma" />
                  <div>
                    <h5>Neha Verma</h5>
                    <span>Marketing Head, The Sleep Company</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="stars">
                  <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <i className="ph-fill ph-quotes quote-icon"></i>
                <p>Transparent communication, real reports and amazing support. Highly recommend Bidxperts for serious business growth.</p>
                <div className="client-info">
                  <img src="https://i.pravatar.cc/150?img=8" alt="Amit Sharma" />
                  <div>
                    <h5>Amit Sharma</h5>
                    <span>Director, FitLife</span>
                  </div>
                </div>
              </div>

              <button className="slider-arrow"><i className="ph-bold ph-caret-right"></i></button>
            </div>
            
            <div className="slider-dots">
              <div className="slider-dot active"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="faq-section">
          <div className="container faq-grid">
            <div className="faq-left">
              <div className="section-tag">FAQS</div>
              <h2>Frequently<br/>Asked Questions</h2>
              <div className="faq-dots">. . . . . .</div>
            </div>
            <div className="faq-right">
              <div className="faq-item">
                <span>How long does it take to see results?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Will you guarantee leads or sales?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Which services are best for my business?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>What industries do you work with?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Do you work with small businesses?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Do I need to sign a long-term contract?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="cta-banner-wrapper">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-left">
                <div className="cta-icon"><i className="ph-fill ph-phone-call"></i></div>
                <div>
                  <h2>Ready to Grow Your Business?</h2>
                  <p>Book a free consultation call with our experts and get a custom strategy.</p>
                </div>
              </div>
              <a href="#audit" className="btn btn-white btn-lg" style={{color: "var(--text-main)", whiteSpace: "nowrap"}}>Book Free Consultation <i className="ph-bold ph-arrow-right"></i></a>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-grid">
          <div className="footer-about">
            <img src="/logo.png" alt="Bidxperts Logo" className="footer-logo" />
            <p>We help businesses grow with data-driven marketing strategies that generate quality leads and maximize ROI.</p>
            <div className="social-links">
              <a href="#"><i className="ph-fill ph-facebook-logo"></i></a>
              <a href="#"><i className="ph-fill ph-instagram-logo"></i></a>
              <a href="#"><i className="ph-fill ph-linkedin-logo"></i></a>
              <a href="#"><i className="ph-fill ph-youtube-logo"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#cases">Case Studies</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">SEO Services</a></li>
              <li><a href="#">Website Design</a></li>
              <li><a href="#">Google Ads</a></li>
              <li><a href="#">Meta Ads</a></li>
              <li><a href="#">Content Marketing</a></li>
              <li><a href="#">Landing Pages</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <i className="ph-fill ph-phone"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <i className="ph-fill ph-envelope-simple"></i>
              <span>hello@bidxperts.com</span>
            </div>
            <div className="contact-item">
              <i className="ph-fill ph-map-pin"></i>
              <span>123, Business Street,<br/>Gurugram, Haryana - 122001</span>
            </div>
          </div>
          
        </div>
        <div className="container">
          <div className="footer-col" style={{borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div className="newsletter" style={{display: "flex", alignItems: "center", gap: "2rem", width: "100%"}}>
               <div>
                  <h4 style={{marginBottom: "0.5rem"}}>Newsletter</h4>
                  <p style={{marginBottom: 0}}>Subscribe to get the latest tips, insights & updates.</p>
               </div>
               <form className="newsletter-form" style={{maxWidth: "400px", flexGrow: 1}}>
                 <input type="email" placeholder="Enter your email" required />
                 <button type="submit"><i className="ph-bold ph-paper-plane-right"></i></button>
               </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Bidxperts. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

