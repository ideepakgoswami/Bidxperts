"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function SEOService() {
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
              <Link href="#" className="active">Services <i className="ph-bold ph-caret-down"></i></Link>
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
        {/* Service Hero */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <div className="breadcrumb">
                <Link href="/">Home</Link> <i className="ph-bold ph-caret-right"></i> <Link href="/#services">Services</Link> <i className="ph-bold ph-caret-right"></i> <span>SEO</span>
              </div>
              <h1>SEO Built for Long-Term Growth</h1>
              <p>We help you dominate search results, drive organic traffic, and build authority in your industry with proven, data-driven SEO strategies.</p>
              <div className="hero-actions" style={{ marginBottom: 0, marginTop: '2rem' }}>
                <a href="#audit" className="btn btn-white btn-lg">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-hero-badges" style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                 <div className="badge"><i className="ph-fill ph-google-logo" style={{fontSize: '1.5rem'}}></i> <span style={{marginLeft: '0.5rem'}}>SEO Certified</span></div>
                 <div className="badge"><i className="ph-fill ph-star text-primary"></i> <span style={{color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginLeft: '0.5rem'}}>4.9/5 Rating</span></div>
              </div>
            </div>
            <div className="service-hero-media">
               <div className="video-thumbnail-card">
                 <div className="thumbnail-content">
                   <div className="play-btn"><i className="ph-fill ph-play"></i></div>
                   <p>Learn our SEO strategy</p>
                 </div>
               </div>
            </div>
          </div>
        </section>
        {/* Lead Gen Section */}
        <section id="audit" className="lead-gen-section">
          <div className="container grid-2">
            <div className="lead-left">
              <h2>Ready to Dominate Search Results?</h2>
              <p>Stop disappearing in search. We build organic growth strategies designed specifically for service-based businesses to rank higher and stay there.</p>
              <ul className="service-benefits" style={{ gridTemplateColumns: '1fr', margin: '2rem 0' }}>
                  <li><i className="ph-fill ph-check-circle"></i> Sustainable, long-term organic traffic</li>
                  <li><i className="ph-fill ph-check-circle"></i> High-intent keyword targeting</li>
                  <li><i className="ph-fill ph-check-circle"></i> Technical SEO and content optimization</li>
              </ul>
              <button className="btn btn-dark btn-lg">Start Ranking with Bidxperts <i className="ph-bold ph-arrow-right"></i></button>
            </div>
            <div className="lead-right">
              <div className="hero-form-card">
                <h2>Get Your <span className="text-primary">FREE</span> SEO Audit</h2>
                <p>Fill out the form and our SEO experts will analyze your site within 24 hours.</p>
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
                    <input type="url" placeholder="Website URL" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="seo" selected>SEO Services</option>
                      <option value="ads">Paid Ads</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Tell us about your business goals" rows={2} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    Get Free SEO Audit <i className="ph-bold ph-arrow-right"></i>
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
              <h2>Comprehensive SEO Solutions</h2>
              <p>Our multi-layered approach to SEO ensures every aspect of your online presence is optimized for search engines and users alike.</p>
              <a href="/#services" className="btn btn-white" style={{ marginTop: '1.5rem', color: 'var(--dark-navy)' }}>See All Services</a>
            </div>
            <div className="ds-right">
              <div className="ds-grid">
                <div className="ds-card">
                  <h4>On-Page SEO</h4>
                  <p>Content and HTML optimization to improve relevance and ranking.</p>
                </div>
                <div className="ds-card">
                  <h4>Off-Page SEO</h4>
                  <p>Building authority through quality backlinks and digital PR.</p>
                </div>
                <div className="ds-card">
                  <h4>Technical SEO</h4>
                  <p>Ensuring your site is fast, crawlable, and secure for engines.</p>
                </div>
                <div className="ds-card">
                  <h4>Local SEO</h4>
                  <p>Dominating local maps and search for area-based businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Industries */}
        <section className="industries-section">
           <div className="container text-center">
             <h2>Industries We Scale with SEO</h2>
             <p className="subtitle">Proven organic strategies tailored to competitive industries.</p>
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
             <a href="#" className="btn btn-dark" style={{ marginTop: '3rem' }}>See All Industries <i className="ph-bold ph-arrow-right"></i></a>
           </div>
        </section>
        {/* How We Work Vertical */}
        <section className="how-we-work-section">
          <div className="container grid-2 align-start">
             <div className="hww-left">
                <h2>Our SEO Process</h2>
                <div className="stars"><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i></div>
                <p>A transparent, results-driven SEO roadmap designed for long-term success.</p>
             </div>
             <div className="hww-right">
                <div className="vertical-steps">
                  <div className="v-step">
                     <div className="v-step-num">1</div>
                     <div className="v-step-content">
                        <h4>Audit & Keywords</h4>
                        <p>In-depth technical audit and high-value keyword research.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">2</div>
                     <div className="v-step-content">
                        <h4>On-Site Strategy</h4>
                        <p>Content optimization and technical fixes to boost rankings.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">3</div>
                     <div className="v-step-content">
                        <h4>Authority Building</h4>
                        <p>Link building and content marketing to improve domain authority.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">4</div>
                     <div className="v-step-content">
                        <h4>Reporting & Growth</h4>
                        <p>Transparent monthly reports and continuous strategy refinement.</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </section>
        {/* Case Studies / Results */}
        <section className="results-section">
           <div className="container">
              <h3 className="section-title">SEO Success Stories</h3>
              <div className="results-grid">
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon text-primary"><i className="ph-bold ph-trend-up"></i></div>
                    <h4>Legal Firm</h4>
                    <p>Ranked #1 for 50+ high-competition legal keywords in 6 months.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#10b981'}}><i className="ph-bold ph-chart-bar"></i></div>
                    <h4>Dental Clinic</h4>
                    <p>Increased organic patient inquiries by 200% with Local SEO.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#f43f5e'}}><i className="ph-bold ph-target"></i></div>
                    <h4>Software Agency</h4>
                    <p>Dominating niche B2B keywords with a 300% traffic increase.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#8b5cf6'}}><i className="ph-bold ph-lightning"></i></div>
                    <h4>Real Estate Group</h4>
                    <p>Improved keyword rankings by 40 positions across all core listings.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#f97316'}}><i className="ph-bold ph-house-line"></i></div>
                    <h4>Construction Co</h4>
                    <p>150% increase in qualified organic leads for custom home builds.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#06b6d4'}}><i className="ph-bold ph-wrench"></i></div>
                    <h4>Industrial Supplier</h4>
                    <p>Scaled national reach with content-driven authority building.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
              </div>
           </div>
        </section>
        {/* FAQs */}
        <section id="faq" className="faq-section" style={{ background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>SEO Frequently Asked Questions</h2>
            <div className="faq-right" style={{ textAlign: 'left' }}>
              <div className="faq-item">
                <span>How long does it take to see SEO results?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Do you guarantee #1 rankings?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>What is the difference between On-Page and Off-Page SEO?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>How do you track SEO success?</span>
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
                <h2 style={{ fontSize: '2.5rem' }}>Let&apos;s Build Your Organic Growth</h2>
                <p>Ready to start ranking? Get in touch with our expert SEO team today.</p>
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
              <li><Link href="/about">About Us</Link></li>
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
