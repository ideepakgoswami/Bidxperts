"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function WebDesignService() {
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
            <Link href="/#about">About Us</Link>
            <div className="nav-dropdown">
              <Link href="#" className="active">Services <i className="ph-bold ph-caret-down"></i></Link>
              <div className="dropdown-content">
                <Link href="/services/google-ads">Google Ads</Link>
                <Link href="/services/seo">SEO Services</Link>
                <Link href="/services/meta-ads">Meta Ads</Link>
                <Link href="/services/web-design">Web Design</Link>
              </div>
            </div>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact Us</Link>
          </nav>
          <div className="nav-actions">
            <a href="/#audit" className="btn btn-primary">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
          </div>
        </div>
      </header>

      <main>
        {/* Service Hero */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <div className="breadcrumb">
                <Link href="/">Home</Link> <i className="ph-bold ph-caret-right"></i> <Link href="/#services">Services</Link> <i className="ph-bold ph-caret-right"></i> <span>Web Design</span>
              </div>
              <h1>High-Converting Web Design for Your Business</h1>
              <p>We build fast, responsive, and beautiful websites designed to turn visitors into customers and reflect your brand&apos;s excellence in the digital space.</p>
              <div className="hero-actions" style={{ marginBottom: 0, marginTop: '2rem' }}>
                <a href="#audit" className="btn btn-white btn-lg">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-hero-badges" style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                 <div className="badge"><i className="ph-fill ph-layout" style={{fontSize: '1.5rem'}}></i> <span style={{marginLeft: '0.5rem'}}>Custom Design</span></div>
                 <div className="badge"><i className="ph-fill ph-star text-primary"></i> <span style={{color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginLeft: '0.5rem'}}>5.0/5 Excellence</span></div>
              </div>
            </div>
            <div className="service-hero-media">
               <div className="video-thumbnail-card">
                 <div className="thumbnail-content">
                   <div className="play-btn"><i className="ph-fill ph-play"></i></div>
                   <p>See our design process</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Lead Gen Section */}
        <section id="audit" className="lead-gen-section">
          <div className="container grid-2">
            <div className="lead-left">
              <h2>Ready for a Website That Actually Works?</h2>
              <p>Your website is your 24/7 salesperson. If it&apos;s slow, outdated, or confusing, you&apos;re losing money. We build sites that look premium and convert high-value leads.</p>
              <ul className="service-benefits" style={{ gridTemplateColumns: '1fr', margin: '2rem 0' }}>
                  <li><i className="ph-fill ph-check-circle"></i> Fast-loading and mobile-responsive</li>
                  <li><i className="ph-fill ph-check-circle"></i> Conversion-focused user experience (UX)</li>
                  <li><i className="ph-fill ph-check-circle"></i> SEO-friendly architecture</li>
              </ul>
              <button className="btn btn-dark btn-lg">Start Building with Bidxperts <i className="ph-bold ph-arrow-right"></i></button>
            </div>
            <div className="lead-right">
              <div className="hero-form-card">
                <h2>Get a <span className="text-primary">FREE</span> Design Consultation</h2>
                <p>Fill out the form and our design team will reach out to discuss your project.</p>
                
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
                    <input type="url" placeholder="Current Website (if any)" />
                  </div>
                  
                  <div className="form-group">
                    <select required>
                      <option value="web" selected>Web Design</option>
                      <option value="seo">SEO</option>
                      <option value="ads">Paid Ads</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <textarea placeholder="Tell us about your dream website" rows={2} required></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    Request Consultation <i className="ph-bold ph-arrow-right"></i>
                  </button>
                  
                  <div className="privacy-guarantee">
                    <i className="ph-fill ph-lock-key"></i> 100% Privacy Guaranteed
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Services Grid */}
        <section className="dark-services-section">
          <div className="container grid-2">
            <div className="ds-left">
              <h2>Modern Web Design Solutions</h2>
              <p>We combine creativity with technical expertise to build websites that aren&apos;t just digital brochures, but powerful growth engines.</p>
              <a href="/#services" className="btn btn-white" style={{ marginTop: '1.5rem', color: 'var(--dark-navy)' }}>See All Services</a>
            </div>
            <div className="ds-right">
              <div className="ds-grid">
                <div className="ds-card">
                  <h4>Custom UI/UX</h4>
                  <p>Unique designs tailored to your brand and user needs.</p>
                </div>
                <div className="ds-card">
                  <h4>Landing Pages</h4>
                  <p>High-converting pages built for specific ad campaigns.</p>
                </div>
                <div className="ds-card">
                  <h4>E-commerce</h4>
                  <p>Secure and scalable online stores that drive sales.</p>
                </div>
                <div className="ds-card">
                  <h4>WordPress/CMS</h4>
                  <p>Easy-to-manage sites built on industry-standard platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="industries-section">
           <div className="container text-center">
             <h2>Web Design for Every Industry</h2>
             <p className="subtitle">We specialize in creating niche-specific designs that resonate with your audience.</p>
             <div className="industries-grid">
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-house"></i></div>
                   <h4>Home Services</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-stethoscope"></i></div>
                   <h4>Healthcare</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-briefcase"></i></div>
                   <h4>Professional Services</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-shopping-cart"></i></div>
                   <h4>eCommerce</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-wrench"></i></div>
                   <h4>Trades</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-car"></i></div>
                   <h4>Automotive</h4>
                </div>
             </div>
             <a href="#" className="btn btn-dark" style={{ marginTop: '3rem' }}>See Portfolio <i className="ph-bold ph-arrow-right"></i></a>
           </div>
        </section>

        {/* How We Work Vertical */}
        <section className="how-we-work-section">
          <div className="container grid-2 align-start">
             <div className="hww-left">
                <h2>Our Design Process</h2>
                <div className="stars"><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i></div>
                <p>From wireframes to launch, we follow a rigorous process to ensure perfection.</p>
             </div>
             <div className="hww-right">
                <div className="vertical-steps">
                  <div className="v-step">
                     <div className="v-step-num">1</div>
                     <div className="v-step-content">
                        <h4>Discovery & Planning</h4>
                        <p>Defining goals, audience, and sitemap for your project.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">2</div>
                     <div className="v-step-content">
                        <h4>UI/UX Design</h4>
                        <p>Creating beautiful, intuitive mockups for your approval.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">3</div>
                     <div className="v-step-content">
                        <h4>Development</h4>
                        <p>Coding your site with the latest standards and performance in mind.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">4</div>
                     <div className="v-step-content">
                        <h4>QA & Launch</h4>
                        <p>Rigorous testing across devices followed by a smooth launch.</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Case Studies / Results */}
        <section className="results-section">
           <div className="container">
              <h3 className="section-title">Design Success Stories</h3>
              <div className="results-grid">
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">Design</span></div>
                    <div className="result-icon text-primary"><i className="ph-bold ph-layout"></i></div>
                    <h4>Luxury Real Estate</h4>
                    <p>Modernized the brand with a sleek, high-end portal that doubled leads.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">Design</span></div>
                    <div className="result-icon" style={{color: '#10b981'}}><i className="ph-bold ph-shopping-cart"></i></div>
                    <h4>Fashion Retailer</h4>
                    <p>Redesigned the e-commerce experience, increasing checkout rates by 40%.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">Design</span></div>
                    <div className="result-icon" style={{color: '#f43f5e'}}><i className="ph-bold ph-rocket"></i></div>
                    <h4>SaaS Startup</h4>
                    <p>Built a fast-loading landing page that achieved a 15% conversion rate.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">Design</span></div>
                    <div className="result-icon" style={{color: '#8b5cf6'}}><i className="ph-bold ph-devices"></i></div>
                    <h4>MedTech Co</h4>
                    <p>Simplified complex navigation for a patient-centric healthcare portal.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">Design</span></div>
                    <div className="result-icon" style={{color: '#f97316'}}><i className="ph-bold ph-paints-brush"></i></div>
                    <h4>Creative Agency</h4>
                    <p>Won multiple design awards for a bold, interactive portfolio site.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">Design</span></div>
                    <div className="result-icon" style={{color: '#06b6d4'}}><i className="ph-bold ph-monitor"></i></div>
                    <h4>Logistics Firm</h4>
                    <p>Built a custom tracking dashboard integrated into a clean public site.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="faq-section" style={{ background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>Web Design FAQs</h2>
            <div className="faq-right" style={{ textAlign: 'left' }}>
              <div className="faq-item">
                <span>How long does it take to build a website?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Will my website be mobile-friendly?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Do you offer hosting and maintenance?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Can I update the website myself?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect */}
        <section className="cta-banner-wrapper" style={{ padding: 0 }}>
          <div className="cta-banner" style={{ borderRadius: 0, padding: '4rem 2rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div className="cta-banner-left" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Let&apos;s Build Your Digital Presence</h2>
                <p>Ready to stand out? Get in touch with our expert design team today.</p>
              </div>
              <a href="#audit" className="btn btn-white btn-lg" style={{ color: 'var(--dark-navy)' }}>Get Your Free Audit <i className="ph-bold ph-arrow-right"></i></a>
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
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/services/google-ads">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
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
              <li><Link href="/#about">About Us</Link></li>
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
