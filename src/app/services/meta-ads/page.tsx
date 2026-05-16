"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function MetaAdsService() {
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
                <Link href="/">Home</Link> <i className="ph-bold ph-caret-right"></i> <Link href="/#services">Services</Link> <i className="ph-bold ph-caret-right"></i> <span>Meta Ads</span>
              </div>
              <h1>Meta Ads That Drive Demand & Sales</h1>
              <p>Scale your business with laser-targeted Facebook and Instagram ads that reach your ideal customers and drive measurable ROI through expert demand generation.</p>
              <div className="hero-actions" style={{ marginBottom: 0, marginTop: '2rem' }}>
                <a href="#audit" className="btn btn-white btn-lg">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-hero-badges" style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                 <div className="badge"><i className="ph-fill ph-meta-logo" style={{fontSize: '1.5rem'}}></i> <span style={{marginLeft: '0.5rem'}}>Meta Certified</span></div>
                 <div className="badge"><i className="ph-fill ph-star text-primary"></i> <span style={{color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginLeft: '0.5rem'}}>4.8/5 Conversion Rate</span></div>
              </div>
            </div>
            <div className="service-hero-media">
               <div className="video-thumbnail-card">
                 <div className="thumbnail-content">
                   <div className="play-btn"><i className="ph-fill ph-play"></i></div>
                   <p>Learn our Meta funnel</p>
                 </div>
               </div>
            </div>
          </div>
        </section>
        {/* Lead Gen Section */}
        <section id="audit" className="lead-gen-section">
          <div className="container grid-2">
            <div className="lead-left">
              <h2>Ready to Scale with Social Advertising?</h2>
              <p>Facebook and Instagram are where your customers spend their time. We help you find them, stop their scroll with winning creative, and convert them into loyal customers.</p>
              <ul className="service-benefits" style={{ gridTemplateColumns: '1fr', margin: '2rem 0' }}>
                  <li><i className="ph-fill ph-check-circle"></i> High-impact creative and ad copy</li>
                  <li><i className="ph-fill ph-check-circle"></i> Advanced audience targeting & retargeting</li>
                  <li><i className="ph-fill ph-check-circle"></i> Scalable lead generation funnels</li>
              </ul>
              <button className="btn btn-dark btn-lg">Start Scaling with Bidxperts <i className="ph-bold ph-arrow-right"></i></button>
            </div>
            <div className="lead-right">
              <div className="hero-form-card">
                <h2>Get Your <span className="text-primary">FREE</span> Meta Ads Audit</h2>
                <p>Fill out the form and our social media experts will review your account within 24 hours.</p>
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
                    <input type="url" placeholder="Facebook Page (if any)" />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="meta" selected>Meta Ads</option>
                      <option value="google">Google Ads</option>
                      <option value="both">Multi-Channel</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Tell us about your target audience" rows={2} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    Get Free Meta Audit <i className="ph-bold ph-arrow-right"></i>
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
              <h2>Data-Driven Social Solutions</h2>
              <p>Our Meta Ads strategy focuses on the entire customer journey, from first awareness to final conversion and repeat business.</p>
              <a href="/#services" className="btn btn-white" style={{ marginTop: '1.5rem', color: 'var(--dark-navy)' }}>See All Services</a>
            </div>
            <div className="ds-right">
              <div className="ds-grid">
                <div className="ds-card">
                  <h4>Audience Research</h4>
                  <p>Finding your perfect customer using Meta&apos;s advanced targeting.</p>
                </div>
                <div className="ds-card">
                  <h4>Creative Strategy</h4>
                  <p>Designing ads that stop the scroll and drive engagement.</p>
                </div>
                <div className="ds-card">
                  <h4>Retargeting</h4>
                  <p>Bringing back visitors who didn&apos;t convert the first time.</p>
                </div>
                <div className="ds-card">
                  <h4>A/B Testing</h4>
                  <p>Continuous testing of copy, visuals, and audiences for peak ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Industries */}
        <section className="industries-section">
           <div className="container text-center">
             <h2>Meta Ads for Every Growth Stage</h2>
             <p className="subtitle">We specialize in scaling B2C and service-based brands using social platforms.</p>
             <div className="industries-grid">
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-shopping-bag"></i></div>
                   <h4>eCommerce</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-house"></i></div>
                   <h4>Home Services</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-briefcase"></i></div>
                   <h4>SaaS / Tech</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-palette"></i></div>
                   <h4>Creative Arts</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-cake"></i></div>
                   <h4>Food & Beverage</h4>
                </div>
                <div className="industry-card">
                   <div className="ind-icon"><i className="ph-fill ph-heart"></i></div>
                   <h4>Wellness</h4>
                </div>
             </div>
             <a href="#" className="btn btn-dark" style={{ marginTop: '3rem' }}>See Success Stories <i className="ph-bold ph-arrow-right"></i></a>
           </div>
        </section>
        {/* How We Work Vertical */}
        <section className="how-we-work-section">
          <div className="container grid-2 align-start">
             <div className="hww-left">
                <h2>Our Meta Roadmap</h2>
                <div className="stars"><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i></div>
                <p>A systematic approach to social scaling that prioritizes profitability.</p>
             </div>
             <div className="hww-right">
                <div className="vertical-steps">
                  <div className="v-step">
                     <div className="v-step-num">1</div>
                     <div className="v-step-content">
                        <h4>Funnel Strategy</h4>
                        <p>Defining the top, middle, and bottom of your ad funnel.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">2</div>
                     <div className="v-step-content">
                        <h4>Creative Testing</h4>
                        <p>Testing multiple creative angles to find your high-ROI winners.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">3</div>
                     <div className="v-step-content">
                        <h4>Scaling & Budget</h4>
                        <p>Aggressively scaling winning campaigns while maintaining efficiency.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">4</div>
                     <div className="v-step-content">
                        <h4>Full Attribution</h4>
                        <p>Tracking every dollar spent to its impact on your bottom line.</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </section>
        {/* Case Studies / Results */}
        <section className="results-section">
           <div className="container">
              <h3 className="section-title">Meta Success Stories</h3>
              <div className="results-grid">
                 <div className="result-card">
                    <div className="tags"><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon text-primary"><i className="ph-bold ph-facebook-logo"></i></div>
                    <h4>Skin Care Brand</h4>
                    <p>Generated $50k in revenue from a $5k ad spend in one month.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon" style={{color: '#10b981'}}><i className="ph-bold ph-instagram-logo"></i></div>
                    <h4>Fitness App</h4>
                    <p>Acquired 5,000+ new users at a cost per install 40% below target.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon" style={{color: '#f43f5e'}}><i className="ph-bold ph-chat-centered-dots"></i></div>
                    <h4>E-learning Platform</h4>
                    <p>3x increase in webinar registrations with an optimized retargeting funnel.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon" style={{color: '#8b5cf6'}}><i className="ph-bold ph-users-three"></i></div>
                    <h4>Recruitment Agency</h4>
                    <p>Generated 200+ qualified candidate leads weekly for high-demand roles.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon" style={{color: '#f97316'}}><i className="ph-bold ph-shopping-cart-simple"></i></div>
                    <h4>Home Decor Store</h4>
                    <p>Achieved a consistent 4.5x ROAS over 12 consecutive months.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon" style={{color: '#06b6d4'}}><i className="ph-bold ph-trend-up"></i></div>
                    <h4>B2B SaaS</h4>
                    <p>Lowered cost per demo booking by 55% with a strategic creative refresh.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
              </div>
           </div>
        </section>
        {/* FAQs */}
        <section id="faq" className="faq-section" style={{ background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>Meta Ads FAQs</h2>
            <div className="faq-right" style={{ textAlign: 'left' }}>
              <div className="faq-item">
                <span>What is the minimum budget for Meta Ads?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Do you create the ad visuals and videos?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>How do you handle iOS 14+ tracking issues?</span>
                <i className="ph-bold ph-plus"></i>
              </div>
              <div className="faq-item">
                <span>Which is better, Facebook or Instagram?</span>
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
                <h2 style={{ fontSize: '2.5rem' }}>Let&apos;s Scale Your Social Presence</h2>
                <p>Ready to dominate social feeds? Get in touch with our expert Meta team today.</p>
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
