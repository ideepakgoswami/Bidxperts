"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CaseStudiesPage() {
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

  const cases = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555529733-0e670560f8e1?auto=format&fit=crop&w=600&q=80",
      logoText: "furniqo.",
      subText: "Furniture Store",
      tag: "E-COMMERCE",
      title: "How Furniqo Increased Revenue by 215% with Google Ads",
      desc: "We helped Furniqo scale their online sales by optimizing Google Ads campaigns, improving ROAS and reducing cost per conversion.",
      metrics: [
        { value: "215%", label: "Revenue Increase", icon: "ph-trend-up", color: "#3b82f6" },
        { value: "3.8x", label: "ROAS Achieved", icon: "ph-arrow-circle-down", color: "#10b981" },
        { value: "-42%", label: "Cost Per Conversion", icon: "ph-chart-line-down", color: "#8b5cf6" },
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
      logoText: "MediCare+",
      subText: "Healthcare",
      tag: "SEO",
      title: "MediCare+ Ranked #1 for 120+ High-Intent Keywords",
      desc: "Our SEO strategy helped MediCare+ improve organic visibility, leading to more appointments and growth in patient trust.",
      metrics: [
        { value: "248%", label: "Organic Traffic", icon: "ph-chart-bar", color: "#3b82f6" },
        { value: "120+", label: "Keywords in Top 3", icon: "ph-target", color: "#10b981" },
        { value: "3.2x", label: "New Appointments", icon: "ph-users", color: "#ec4899" },
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      logoText: "UrbanNest",
      subText: "Real Estate",
      tag: "LEAD GENERATION",
      title: "UrbanNest Generated 450+ Qualified Leads in 60 Days",
      desc: "With a targeted lead generation campaign, UrbanNest saw a massive boost in quality leads and conversions.",
      metrics: [
        { value: "450+", label: "Qualified Leads", icon: "ph-buildings", color: "#3b82f6" },
        { value: "60", label: "Days Campaign", icon: "ph-clock", color: "#10b981" },
        { value: "6.5x", label: "Increase in Sales Pipeline", icon: "ph-trend-up", color: "#8b5cf6" },
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      logoText: "EduSmart",
      subText: "EdTech Platform",
      tag: "META ADS",
      title: "EduSmart Achieved 70% More Enrollments with Meta Ads",
      desc: "Through data-driven Meta Ads strategy, EduSmart increased course enrollments and reduced CPL significantly.",
      metrics: [
        { value: "70%", label: "More Enrollments", icon: "ph-student", color: "#3b82f6" },
        { value: "-35%", label: "Cost Per Lead", icon: "ph-arrow-circle-down", color: "#10b981" },
        { value: "4.1x", label: "Return on Ad Spend", icon: "ph-chart-line-up", color: "#8b5cf6" },
      ]
    }
  ];

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
            <Link href="/services/google-ads">Services <i className="ph-bold ph-caret-down"></i></Link>
            <Link href="/case-studies" className="active">Case Studies</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact Us</Link>
          </nav>
          <div className="nav-actions">
            <a href="/#audit" className="btn btn-primary">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
          </div>
        </div>
      </header>

      <main className="cs-page-bg">
        {/* Hero Section */}
        <section className="cs-hero">
          <div className="container cs-hero-content">
            <div className="cs-hero-text">
              <div className="section-tag" style={{color: 'var(--primary)', backgroundColor: 'transparent', padding: 0, marginBottom: '1rem'}}>CASE STUDIES</div>
              <h1>Real Results.<br/>Real Growth.</h1>
              <p>Explore how we&apos;ve helped businesses across industries achieve measurable growth with data-driven digital marketing strategies.</p>
            </div>
            {/* The chart graphic is handled via a background image or abstract CSS in the right side */}
            <div className="cs-hero-graphic"></div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="cs-filter-section">
          <div className="container">
            <div className="cs-filter-bar">
               <button className="cs-filter-btn active">All Case Studies</button>
               <button className="cs-filter-btn"><i className="ph-bold ph-magnifying-glass"></i> SEO</button>
               <button className="cs-filter-btn"><i className="ph-bold ph-google-logo"></i> Google Ads</button>
               <button className="cs-filter-btn"><i className="ph-bold ph-facebook-logo"></i> Meta Ads</button>
               <button className="cs-filter-btn"><i className="ph-bold ph-users"></i> Lead Generation</button>
               <button className="cs-filter-btn"><i className="ph-bold ph-shopping-cart"></i> Ecommerce</button>
               <button className="cs-filter-btn"><i className="ph-bold ph-desktop"></i> Website Design</button>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="cs-list-section">
          <div className="container">
             <div className="cs-list">
                {cases.map(c => (
                  <div key={c.id} className="cs-card">
                     <div className="cs-card-image">
                        <img src={c.image} alt={c.title} />
                        <div className="cs-card-logo">
                           <h4>{c.logoText}</h4>
                           <p>{c.subText}</p>
                        </div>
                     </div>
                     <div className="cs-card-content">
                        <div className="cs-tag">{c.tag}</div>
                        <h3>{c.title}</h3>
                        <p>{c.desc}</p>
                        <Link href="#" className="cs-view-link">View Case Study <i className="ph-bold ph-arrow-right"></i></Link>
                     </div>
                     <div className="cs-card-metrics">
                        {c.metrics.map((m, i) => (
                           <div key={i} className="cs-metric">
                              <div className="cs-metric-icon" style={{color: m.color, backgroundColor: `${m.color}15`}}><i className={`ph-bold ${m.icon}`}></i></div>
                              <h4>{m.value}</h4>
                              <p>{m.label}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* CTA Section inside the page container */}
        <section className="cs-cta-section">
           <div className="container">
              <div className="cs-cta-card">
                 <div className="cs-cta-left">
                    <div className="section-tag" style={{color: 'var(--primary)', backgroundColor: 'transparent', padding: 0, marginBottom: '1rem'}}>LET&apos;S GROW TOGETHER</div>
                    <h2>Ready to Get Similar Results for Your Business?</h2>
                    <p>Get a free audit and roadmap tailored to your business goals. Let&apos;s unlock your growth potential.</p>
                    <div className="cs-cta-actions">
                       <a href="/#audit" className="btn btn-primary btn-lg">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
                       <div className="cs-cta-reviews">
                          <div className="avatars">
                             <img src="https://i.pravatar.cc/100?img=1" alt="User" />
                             <img src="https://i.pravatar.cc/100?img=2" alt="User" />
                             <img src="https://i.pravatar.cc/100?img=3" alt="User" />
                          </div>
                          <div className="review-text">
                             <div className="stars" style={{gap: '2px'}}><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i><i className="ph-fill ph-star text-primary"></i></div>
                             <p>4.9/5 from 120+ reviews</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="cs-cta-right">
                    <h3>Get Your Free Audit</h3>
                    <form className="cs-cta-form">
                       <div className="form-row">
                          <input type="text" placeholder="Your Name" required />
                          <input type="tel" placeholder="Your Phone Number" required />
                       </div>
                       <input type="email" placeholder="Your Email" required />
                       <input type="url" placeholder="Website URL (Optional)" />
                       <button type="submit" className="btn btn-primary btn-block btn-lg" style={{marginTop: '0.5rem'}}>Get Free Audit <i className="ph-bold ph-arrow-right"></i></button>
                       <div className="cs-cta-guarantees">
                          <span><i className="ph-bold ph-check-circle"></i> No Obligation</span>
                          <span><i className="ph-bold ph-check-circle"></i> 100% Confidential</span>
                       </div>
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
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/services/google-ads">Services</Link></li>
              <li><Link href="/case-studies" style={{color: 'var(--primary)'}}>Case Studies</Link></li>
              <li><Link href="/#testimonials">Testimonials</Link></li>
              <li><Link href="/blog">Blog</Link></li>
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
              <li><a href="/#about">About Us</a></li>
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
