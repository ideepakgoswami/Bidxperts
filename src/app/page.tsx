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
            <Link href="/about">About Us</Link>
            <div className="nav-dropdown">
              <Link href="#">Services <i className="ph-bold ph-caret-down"></i></Link>
              <div className="dropdown-content">
                <Link href="/services/google-ads">Google Ads</Link>
                <Link href="/services/seo">SEO Services</Link>
                <Link href="/services/meta-ads">Meta Ads</Link>
                <Link href="/services/web-design">Web Design</Link>
              </div>
            </div>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact Us</Link>
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
                Stop Wasting Money on Ads That Don’t Generate Qualified Leads. <span className="text-primary">That&apos;s Bidxperts.</span>
              </h1>
              <p>
                We help service-based businesses generate high-quality leads through strategic Google Ads, Meta Ads, SEO, and conversion-focused landing pages designed to increase enquiries and reduce wasted ad spend.
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
                <h2>Get Your <span className="text-primary">FREE</span> Audit Now</h2>
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
              <h2>Why <span className="text-primary">Businesses</span> Choose Bidxperts</h2>
              <p>We combine performance-driven marketing strategies, conversion-focused optimization, and real industry experience to help businesses generate better quality leads and achieve sustainable growth.</p>
              <a href="#about" className="btn btn-dark">Learn More About Us <i className="ph-bold ph-arrow-right"></i></a>
            </div>
            <div className="why-right features-grid">
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-bold ph-target"></i></div>
                <div className="feature-text">
                  <h4>Real Lead Generation Experience</h4>
                  <p>We work with businesses focused on generating real enquiries, calls, and bookings — not just clicks.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-fill ph-file-text"></i></div>
                <div className="feature-text">
                  <h4>Data-Driven Strategy</h4>
                  <p>Every campaign decision is backed by data, conversion tracking, and performance insights.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-fill ph-user-circle"></i></div>
                <div className="feature-text">
                  <h4>Transparent Communication</h4>
                  <p>No confusing reports or hidden strategies. We keep everything transparent and growth-focused.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-fill ph-star"></i></div>
                <div className="feature-text">
                  <h4>Performance Optimization</h4>
                  <p>We continuously optimize campaigns to improve lead quality and reduce acquisition costs.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-bold ph-puzzle-piece"></i></div>
                <div className="feature-text">
                  <h4>Conversion-Focused Approach</h4>
                  <p>We optimize both the ads and the landing pages to maximize conversions.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="ph-bold ph-headset"></i></div>
                <div className="feature-text">
                  <h4>International Market Experience</h4>
                  <p>Experience working with competitive international markets helps us build strategies focused on high-quality leads and scalable growth.</p>
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
              <h2>Built to drive leads, sales, and growth.</h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-magnifying-glass"></i></div>
                <h4>SEO Services</h4>
                <p>Everything your business needs to generate more leads, improve visibility, and grow online with confidence.</p>
                <a href="#" className="service-link">Learn More <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-desktop"></i></div>
                <h4>Website Design</h4>
                <p>We design modern websites and landing pages that not only look professional but are built to convert visitors into leads.</p>
                <a href="#" className="service-link">Learn More <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-paper-plane-tilt"></i></div>
                <h4>Google Ads</h4>
                <p>We create high-converting Google Ads campaigns designed to attract customers actively searching for your services.</p>
                <a href="#" className="service-link">Learn More <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-card">
                <div className="service-card-icon"><i className="ph-bold ph-chart-bar"></i></div>
                <h4>Meta Ads</h4>
                <p>We build strategic Facebook & Instagram campaigns that help businesses increase brand awareness, generate leads, and retarget potential customers.</p>
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
                <h4>Strategy & Research</h4>
                <p>We analyze your business, competitors, audience, and market opportunities.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-bold ph-clipboard-text text-white"></i></div>
                <span className="process-num">02</span>
                <h4>Campaign Setup</h4>
                <p>We build optimized campaigns with proper targeting, tracking, and conversion-focused structure.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-bold ph-paper-plane-tilt text-white"></i></div>
                <span className="process-num">03</span>
                <h4>Landing Page Optimization</h4>
                <p>We improve user experience and conversion elements to increase lead generation.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-bold ph-chart-line-up text-white"></i></div>
                <span className="process-num">04</span>
                <h4>Optimize</h4>
                <p>We monitor, test, and optimize campaigns regularly for better performance.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><i className="ph-fill ph-trophy text-white"></i></div>
                <span className="process-num">05</span>
                <h4>Scale Growth</h4>
                <p>Once profitable performance is achieved, we focus on scaling campaigns strategically.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-tag">WHAT OUR CLIENTS SAY</div>
            <h2>What Businesses Value About Working With Us</h2>
            <div className="testimonials-slider">
              <button className="slider-arrow"><i className="ph-bold ph-caret-left"></i></button>
              <div className="testimonial-card">
                <div className="stars">
                  <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <i className="ph-fill ph-quotes quote-icon"></i>
                <p>Bidxperts helped improve our lead quality and reduced wasted ad spend significantly. Their communication and optimization process made a huge difference!</p>
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
                <span>Why am I getting clicks but no conversions from Google Ads?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>How can I reduce wasted ad spend on Google Ads?</span>
                <i className="ph-bold ph-plus"></i>
          </div>
              <div className="faq-item">
                <span>What is causing high cost per lead in my campaigns?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>How do you improve lead quality from paid ads?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>What makes a high-converting landing page?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Why is my website getting traffic but no enquiries?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Can SEO help generate consistent long-term leads?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>How do you track leads and conversions accurately?</span>
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
              <li><Link href="/services/seo">SEO Services</Link></li>
              <li><Link href="/services/web-design">Website Design</Link></li>
              <li><Link href="/services/google-ads">Google Ads</Link></li>
              <li><Link href="/services/meta-ads">Meta Ads</Link></li>
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
        <div className="footer-bottom">
          <p>© 2024 Bidxperts. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
