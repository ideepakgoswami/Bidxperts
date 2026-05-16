"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function AboutPage() {
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
            <Link href="/">Home</Link>
            <Link href="/about" className="active">About Us</Link>
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
            <a href="/#audit" className="btn btn-primary">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
          </div>
        </div>
      </header>
      <main>
        {/* About Hero */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <div className="breadcrumb">
                <Link href="/">Home</Link> <i className="ph-bold ph-caret-right"></i> <span>About Us</span>
              </div>
              <h1>Data-Driven Growth Experts Focused on Your ROI</h1>
              <p>We are a team of strategists, creatives, and technical experts dedicated to helping businesses scale through performance-driven digital marketing.</p>
              <div className="hero-stats" style={{ background: 'rgba(255,255,255,0.05)', marginTop: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="stat-item">
                  <div className="stat-text">
                    <h3 style={{color: '#fff'}}>50+</h3>
                    <p style={{color: '#cbd5e1'}}>Active Clients</p>
                  </div>
                </div>
                <div className="divider" style={{background: 'rgba(255,255,255,0.1)'}}></div>
                <div className="stat-item">
                  <div className="stat-text">
                    <h3 style={{color: '#fff'}}>3X</h3>
                    <p style={{color: '#cbd5e1'}}>Average ROI</p>
                  </div>
                </div>
                <div className="divider" style={{background: 'rgba(255,255,255,0.1)'}}></div>
                <div className="stat-item">
                  <div className="stat-text">
                    <h3 style={{color: '#fff'}}>₹10L+</h3>
                    <p style={{color: '#cbd5e1'}}>Ad Spend Managed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-hero-media">
               <div className="video-thumbnail-card" style={{height: '350px'}}>
                 <div className="thumbnail-content">
                   <div className="play-btn"><i className="ph-fill ph-users"></i></div>
                   <p>Our Agency Culture</p>
                 </div>
               </div>
            </div>
          </div>
        </section>
        {/* Our Story */}
        <section className="about-content-section" style={{ padding: '6rem 0' }}>
           <div className="container grid-2 align-center">
              <div className="about-image">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team working" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
              </div>
              <div className="about-text">
                 <div className="section-tag">OUR STORY</div>
                 <h2>From Strategy to Success</h2>
                 <p style={{ marginBottom: '1.5rem' }}>Bidxperts was founded with a simple goal: to help businesses navigate the complex world of digital marketing with transparency and results. We saw too many agencies focusing on "vanity metrics" like clicks and impressions, while business owners cared about leads and revenue.</p>
                 <p>Today, we are a full-service digital growth agency that prioritizes ROI above everything else. Our team combines deep technical expertise with creative strategy to build campaigns that don&apos;t just look good—they perform.</p>
                 <div className="about-values" style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div className="value-item">
                       <i className="ph-fill ph-shield-check" style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}></i>
                       <h4>Transparency</h4>
                       <p style={{ fontSize: '0.9rem' }}>Real reports, real data, no hidden fees.</p>
                    </div>
                    <div className="value-item">
                       <i className="ph-fill ph-chart-line-up" style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}></i>
                       <h4>Results-Driven</h4>
                       <p style={{ fontSize: '0.9rem' }}>We focus on metrics that impact your bottom line.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        {/* Mission/Vision Dark */}
        <section className="dark-services-section">
           <div className="container grid-2">
              <div className="ds-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '16px' }}>
                 <i className="ph-fill ph-rocket-launch" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}></i>
                 <h3>Our Mission</h3>
                 <p style={{ color: '#cbd5e1' }}>To empower businesses with data-driven marketing strategies that unlock their full growth potential and create sustainable competitive advantages.</p>
              </div>
              <div className="ds-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '16px' }}>
                 <i className="ph-fill ph-eye" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}></i>
                 <h3>Our Vision</h3>
                 <p style={{ color: '#cbd5e1' }}>To be the leading growth partner for businesses globally, recognized for our integrity, innovation, and unwavering commitment to client success.</p>
              </div>
           </div>
        </section>
        {/* CTA Banner */}
        <section className="cta-banner-wrapper" style={{ padding: '6rem 0' }}>
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-left">
                <div className="cta-icon"><i className="ph-fill ph-phone-call"></i></div>
                <div>
                  <h2>Want to Know More About Us?</h2>
                  <p>Book a free discovery call and let&apos;s see how we can help your business.</p>
                </div>
              </div>
              <Link href="/contact" className="btn btn-white btn-lg" style={{color: "var(--text-main)", whiteSpace: "nowrap"}}>Contact Us Today <i className="ph-bold ph-arrow-right"></i></Link>
            </div>
          </div>
        </section>
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
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about" style={{color: 'var(--primary)'}}>About Us</Link></li>
              <li><Link href="/services/google-ads">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
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
              <li><Link href="/about">About Us</Link></li>
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
