"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GoogleAdsService() {
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
            <Link href="/services/google-ads" className="active">Services <i className="ph-bold ph-caret-down"></i></Link>
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
                <Link href="/">Home</Link> <i className="ph-bold ph-caret-right"></i> <Link href="/#services">Services</Link> <i className="ph-bold ph-caret-right"></i> <span>Google Ads</span>
              </div>
              <h1>Google Ads Built for Service Based Businesses</h1>
              <p>We build data-driven Google Ads campaigns that generate high-quality leads, lower your cost-per-acquisition, and maximize your return on ad spend.</p>
              <div className="hero-actions" style={{ marginBottom: 0, marginTop: '2rem' }}>
                <a href="#audit" className="btn btn-white btn-lg">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
              </div>
              <div className="service-hero-badges" style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                 <div className="badge"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/512px-Google_Ads_logo.svg.png" alt="Google Partner" style={{height: 24, filter: 'brightness(0) invert(1)'}} /></div>
                 <div className="badge"><i className="ph-fill ph-star text-primary"></i> <span style={{color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginLeft: '0.5rem'}}>4.9/5 Rating</span></div>
              </div>
            </div>
            <div className="service-hero-media">
               <div className="video-thumbnail-card">
                 <div className="thumbnail-content">
                   <div className="play-btn"><i className="ph-fill ph-play"></i></div>
                   <p>Learn how we generate ROI</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Lead Gen Section */}
        <section id="audit" className="lead-gen-section">
          <div className="container grid-2">
            <div className="lead-left">
              <h2>Ready to Get More Leads From Google Ads in Perth Metro?</h2>
              <p>Stop wasting money on clicks that don&apos;t convert. We build high-performance campaigns designed specifically for service-based businesses to dominate their local market.</p>
              <ul className="service-benefits" style={{ gridTemplateColumns: '1fr', margin: '2rem 0' }}>
                  <li><i className="ph-fill ph-check-circle"></i> Generate exclusive, high-intent leads</li>
                  <li><i className="ph-fill ph-check-circle"></i> Transparent reporting with no hidden fees</li>
                  <li><i className="ph-fill ph-check-circle"></i> Proven strategies tailored to your industry</li>
              </ul>
              <button className="btn btn-dark btn-lg">Start Growing with Bidxperts <i className="ph-bold ph-arrow-right"></i></button>
            </div>
            <div className="lead-right">
              <div className="hero-form-card" style={{ background: 'var(--dark-navy)', color: '#fff', boxShadow: '0 20px 40px rgba(11, 17, 32, 0.15)' }}>
                 <h2 style={{ color: '#fff', textAlign: 'left', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Let&apos;s Grow Your Business</h2>
                 <form className="hero-form dark-theme-form">
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group"><input type="text" placeholder="First Name" required /></div>
                      <div className="form-group"><input type="text" placeholder="Last Name" required /></div>
                    </div>
                    <div className="form-group"><input type="email" placeholder="Email Address" required /></div>
                    <div className="form-group"><input type="tel" placeholder="Phone Number" required /></div>
                    <div className="form-group"><input type="url" placeholder="Website URL" required /></div>
                    <div className="form-group">
                      <select required>
                         <option value="" disabled selected>What are you looking for?</option>
                         <option value="google-ads">Google Ads Management</option>
                         <option value="seo">SEO</option>
                         <option value="other">Other</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-white btn-block btn-lg" style={{ marginTop: '1rem', color: 'var(--dark-navy)' }}>Get Free Audit <i className="ph-bold ph-arrow-right"></i></button>
                    <div className="privacy-guarantee" style={{ color: '#94a3b8', marginTop: '1.5rem' }}><i className="ph-fill ph-lock-key"></i> We respect your privacy.</div>
                 </form>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Services Grid */}
        <section className="dark-services-section">
          <div className="container grid-2">
            <div className="ds-left">
              <h2>Digital Marketing Agency Services</h2>
              <p>We provide a comprehensive suite of digital marketing services designed to work together to maximize your growth and ROI.</p>
              <a href="/#services" className="btn btn-white" style={{ marginTop: '1.5rem', color: 'var(--dark-navy)' }}>See All Services</a>
            </div>
            <div className="ds-right">
              <div className="ds-grid">
                <div className="ds-card">
                  <h4>Google Ads</h4>
                  <p>Capture high-intent search traffic and convert them into paying customers.</p>
                </div>
                <div className="ds-card">
                  <h4>Meta Ads</h4>
                  <p>Reach your ideal audience on Facebook & Instagram to generate demand.</p>
                </div>
                <div className="ds-card">
                  <h4>SEO</h4>
                  <p>Build long-term organic visibility and dominate search engine results.</p>
                </div>
                <div className="ds-card">
                  <h4>Web Design</h4>
                  <p>High-converting landing pages and websites optimized for conversions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="industries-section">
           <div className="container text-center">
             <h2>Perth Industries We Specialise In</h2>
             <p className="subtitle">Proven strategies tailored to service-based businesses in the Perth metro.</p>
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
             <a href="#" className="btn btn-dark" style={{ marginTop: '3rem' }}>See All Industries We Help Grow <i className="ph-bold ph-arrow-right"></i></a>
           </div>
        </section>

        {/* How We Work Vertical */}
        <section className="how-we-work-section">
          <div className="container grid-2 align-start">
             <div className="hww-left">
                <h2>How We Work</h2>
                <div className="stars"><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i></div>
                <p>A proven, systematic approach to scaling your business with Google Ads.</p>
             </div>
             <div className="hww-right">
                <div className="vertical-steps">
                  <div className="v-step">
                     <div className="v-step-num">1</div>
                     <div className="v-step-content">
                        <h4>Discovery & Audit</h4>
                        <p>We analyze your business, competitors, and current account performance.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">2</div>
                     <div className="v-step-content">
                        <h4>Strategy Formulation</h4>
                        <p>We build a customized, data-driven strategy tailored to your specific goals.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">3</div>
                     <div className="v-step-content">
                        <h4>Campaign Build & Launch</h4>
                        <p>We create high-converting ad copy, landing pages, and launch your campaigns.</p>
                     </div>
                  </div>
                  <div className="v-step">
                     <div className="v-step-num">4</div>
                     <div className="v-step-content">
                        <h4>Ongoing Optimization</h4>
                        <p>Continuous monitoring, testing, and refinement to maximize ROI.</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Case Studies / Results */}
        <section className="results-section">
           <div className="container">
              <h3 className="section-title">Local lead generation for trades</h3>
              <div className="results-grid">
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span><span className="tag-ads">Google Ads</span></div>
                    <div className="result-icon text-primary"><i className="ph-bold ph-trend-up"></i></div>
                    <h4>Plumbing Company</h4>
                    <p>Increased local leads by 150% while reducing cost per acquisition by 30%.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-ads">Google Ads</span></div>
                    <div className="result-icon" style={{color: '#10b981'}}><i className="ph-bold ph-chart-bar"></i></div>
                    <h4>Electrical Services</h4>
                    <p>Achieved a 4x ROI within the first 3 months of campaign launch.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#f43f5e'}}><i className="ph-bold ph-target"></i></div>
                    <h4>HVAC Contractor</h4>
                    <p>Dominating local search results with 200+ organic leads per month.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
              </div>

              <h3 className="section-title" style={{marginTop: '4rem'}}>Lead generation built for service-based growth</h3>
              <div className="results-grid">
                 <div className="result-card">
                    <div className="tags"><span className="tag-ads">Google Ads</span></div>
                    <div className="result-icon" style={{color: '#eab308'}}><i className="ph-bold ph-currency-circle-dollar"></i></div>
                    <h4>Law Firm</h4>
                    <p>Lowered cost per lead by 45% while increasing overall consultation bookings.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#8b5cf6'}}><i className="ph-bold ph-users"></i></div>
                    <h4>Dental Clinic</h4>
                    <p>Ranked #1 for high-value keywords, driving 30+ new patient calls monthly.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon" style={{color: '#ec4899'}}><i className="ph-bold ph-chat-centered-text"></i></div>
                    <h4>Cleaning Agency</h4>
                    <p>Generated over 500 targeted leads through an optimized Facebook ad funnel.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
              </div>

              <h3 className="section-title" style={{marginTop: '4rem'}}>Ecommerce campaigns built to grow, not just spend</h3>
              <div className="results-grid">
                 <div className="result-card">
                    <div className="tags"><span className="tag-ads">Google Ads</span><span className="tag-meta">Meta Ads</span></div>
                    <div className="result-icon" style={{color: '#8b5cf6'}}><i className="ph-bold ph-shopping-bag"></i></div>
                    <h4>Apparel Brand</h4>
                    <p>Scaled ROAS from 2x to 5.5x while doubling monthly ad spend.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-seo">SEO</span></div>
                    <div className="result-icon" style={{color: '#0ea5e9'}}><i className="ph-bold ph-shopping-cart"></i></div>
                    <h4>Tech Accessories</h4>
                    <p>120% increase in organic revenue over 6 months through technical SEO.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
                 <div className="result-card">
                    <div className="tags"><span className="tag-ads">Google Ads</span></div>
                    <div className="result-icon" style={{color: '#10b981'}}><i className="ph-bold ph-currency-dollar"></i></div>
                    <h4>Home Decor Store</h4>
                    <p>Achieved a record-breaking $100k month with optimized Performance Max campaigns.</p>
                    <a href="#" className="read-more">Read Case Study <i className="ph-bold ph-arrow-right"></i></a>
                 </div>
              </div>
           </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="stars"><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i></div>
            <div className="section-tag" style={{marginTop: '1rem'}}>WHAT CUSTOMERS SAY</div>
            <h2>Loved by Businesses in Perth</h2>
            
            <div className="testimonials-slider">
              <button className="slider-arrow"><i className="ph-bold ph-caret-left"></i></button>
              
              <div className="testimonial-card">
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
        <section id="faq" className="faq-section" style={{ background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>Frequently Asked Questions</h2>
            <div className="faq-right" style={{ textAlign: 'left' }}>
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

        {/* Let's Connect */}
        <section className="cta-banner-wrapper" style={{ padding: 0 }}>
          <div className="cta-banner" style={{ borderRadius: 0, padding: '4rem 2rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div className="cta-banner-left" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Let&apos;s Connect</h2>
                <p>Ready to start scaling? Get in touch with our expert team today.</p>
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
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#cases">Case Studies</Link></li>
              <li><Link href="/#blog">Blog</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
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
