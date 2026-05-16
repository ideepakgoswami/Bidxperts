"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function ContactPage() {
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
            <Link href="/contact" className="active">Contact Us</Link>
          </nav>
          <div className="nav-actions">
            <a href="/#audit" className="btn btn-primary">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
          </div>
        </div>
      </header>
      <main>
        {/* Contact Hero */}
        <section className="service-hero">
          <div className="container text-center">
             <div className="breadcrumb" style={{justifyContent: 'center'}}>
                <Link href="/">Home</Link> <i className="ph-bold ph-caret-right"></i> <span>Contact Us</span>
              </div>
              <h1 style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>Let&apos;s Start Your Growth Journey</h1>
              <p style={{maxWidth: '800px', margin: '0 auto'}}>Ready to take your business to the next level? Fill out the form below or reach out to us directly. Our team is ready to help you scale.</p>
          </div>
        </section>
        {/* Contact Grid */}
        <section className="contact-section" style={{ padding: '6rem 0', background: '#f8fafc' }}>
          <div className="container grid-2">
             <div className="contact-info-wrapper">
                <div className="section-tag">GET IN TOUCH</div>
                <h2>How Can We Help You?</h2>
                <p style={{ marginBottom: '3rem' }}>Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
                <div className="contact-cards" style={{ display: 'grid', gap: '2rem' }}>
                   <div className="contact-card-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                      <div className="icon" style={{ width: '50px', height: '50px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem' }}>
                         <i className="ph-fill ph-phone"></i>
                      </div>
                      <div>
                         <h4 style={{ marginBottom: '0.2rem' }}>Call Us</h4>
                         <p>+91 98765 43210</p>
                      </div>
                   </div>
                   <div className="contact-card-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                      <div className="icon" style={{ width: '50px', height: '50px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem' }}>
                         <i className="ph-fill ph-envelope-simple"></i>
                      </div>
                      <div>
                         <h4 style={{ marginBottom: '0.2rem' }}>Email Us</h4>
                         <p>hello@bidxperts.com</p>
                      </div>
                   </div>
                   <div className="contact-card-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                      <div className="icon" style={{ width: '50px', height: '50px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem' }}>
                         <i className="ph-fill ph-map-pin"></i>
                      </div>
                      <div>
                         <h4 style={{ marginBottom: '0.2rem' }}>Visit Us</h4>
                         <p>123, Business Street, Gurugram, India</p>
                      </div>
                   </div>
                </div>
                <div className="social-connect" style={{ marginTop: '3rem' }}>
                   <h4 style={{ marginBottom: '1rem' }}>Follow Our Journey</h4>
                   <div className="social-links" style={{ justifyContent: 'flex-start' }}>
                      <a href="#" style={{ background: 'var(--dark-navy)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph-fill ph-facebook-logo"></i></a>
                      <a href="#" style={{ background: 'var(--dark-navy)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph-fill ph-instagram-logo"></i></a>
                      <a href="#" style={{ background: 'var(--dark-navy)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph-fill ph-linkedin-logo"></i></a>
                   </div>
                </div>
             </div>
             <div className="contact-form-wrapper">
                <div className="hero-form-card" style={{ background: '#fff', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                   <h2 style={{ color: 'var(--text-main)' }}>Send Us a <span className="text-primary">Message</span></h2>
                   <p style={{ color: 'var(--text-muted)' }}>Fill out the form and we&apos;ll get back to you within 24 hours.</p>
                   <form className="hero-form" style={{ marginTop: '2rem' }}>
                      <div className="form-group with-icon">
                        <i className="ph ph-user" style={{ color: 'var(--text-muted)' }}></i>
                        <input type="text" placeholder="Full Name" required style={{ border: '1px solid #e2e8f0', color: 'var(--text-main)' }} />
                      </div>
                      <div className="form-group with-icon">
                        <i className="ph ph-envelope-simple" style={{ color: 'var(--text-muted)' }}></i>
                        <input type="email" placeholder="Email Address" required style={{ border: '1px solid #e2e8f0', color: 'var(--text-main)' }} />
                      </div>
                      <div className="form-group with-icon">
                        <i className="ph ph-phone" style={{ color: 'var(--text-muted)' }}></i>
                        <input type="tel" placeholder="Phone Number" required style={{ border: '1px solid #e2e8f0', color: 'var(--text-main)' }} />
                      </div>
                      <div className="form-group with-icon">
                        <i className="ph ph-globe" style={{ color: 'var(--text-muted)' }}></i>
                        <input type="url" placeholder="Website (if any)" style={{ border: '1px solid #e2e8f0', color: 'var(--text-main)' }} />
                      </div>
                      <div className="form-group">
                        <select required style={{ border: '1px solid #e2e8f0', color: 'var(--text-main)' }}>
                          <option value="" disabled selected>Interested In...</option>
                          <option value="seo">SEO Services</option>
                          <option value="web">Web Design</option>
                          <option value="google">Google Ads</option>
                          <option value="meta">Meta Ads</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea placeholder="Your Message" rows={4} required style={{ border: '1px solid #e2e8f0', color: 'var(--text-main)' }}></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary btn-block btn-lg">
                        Send Message <i className="ph-bold ph-arrow-right"></i>
                      </button>
                   </form>
                </div>
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
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services/google-ads">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact" style={{color: 'var(--primary)'}}>Contact Us</Link></li>
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
