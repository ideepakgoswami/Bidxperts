"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BlogPage() {
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

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80",
      tag: "GOOGLE ADS",
      title: "Google Ads Trends to Watch in 2024 for Maximum ROI",
      date: "May 8, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
      tag: "SEO",
      title: "How AI Has Changed On-Page and Off-Page SEO in 2024: A Beginner's Guide",
      date: "May 4, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      tag: "HYDERABAD",
      title: "How to Get a Digital Marketing Job in Hyderabad in 2024: An Action Plan for Students",
      date: "May 1, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      tag: "CAREERS",
      title: "Digital Marketing Course vs an MBA in Marketing: Which should you Invest in?",
      date: "Apr 28, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      tag: "SEO",
      title: "How to Set up Meta Pixel: A Step-by-step Guide",
      date: "Apr 25, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      tag: "ANALYTICS",
      title: "GA4 (Google Analytics 4) For Beginners: An Introduction for Digital Marketers",
      date: "Apr 22, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      tag: "GOOGLE ADS, META ADS",
      title: "Google Ads vs Meta Ads: Which is the Right Fit for Your Brand in 2024?",
      date: "Apr 14, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80",
      tag: "GOOGLE ADS",
      title: "How to Run a Google Ads Campaign: A Guide for Beginners in 2024",
      date: "Apr 8, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      tag: "HYDERABAD",
      title: "Why Students After Class 12 Should Learn Digital Marketing",
      date: "Mar 25, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      tag: "HYDERABAD",
      title: "Why Should You Learn Digital Marketing after Class 10th?",
      date: "Mar 23, 2024",
      author: "Rohit Malhotra",
      comments: "No Comments Yet"
    }
  ];

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img src="/logo.png" alt="Bidxperts Logo" className="logo-img" />
          </Link>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#about">About Us</Link>
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
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/blog" className="active">Blog</Link>
            <Link href="/#contact">Contact Us</Link>
          </nav>
          <div className="nav-actions">
            <a href="/#audit" className="btn btn-primary">Get Free Audit <i className="ph-bold ph-arrow-right"></i></a>
          </div>
        </div>
      </header>

      <main className="blog-page-bg">
        <section className="blog-header">
          <div className="container">
            <h1>Blog & Insights</h1>
            <p>Stay updated with the latest digital marketing trends, strategies, <br/>and insights to grow your business.</p>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-card-horizontal">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-tag">{post.tag}</div>
                    <h3><Link href="#">{post.title}</Link></h3>
                    <div className="blog-meta">
                      {post.date} &bull; {post.author} &bull; {post.comments}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pagination">
              <a href="#" className="page-link active">1</a>
              <a href="#" className="page-link">2</a>
              <a href="#" className="page-link">3</a>
              <span className="page-dots">...</span>
              <a href="#" className="page-link">5</a>
              <a href="#" className="page-link next-link">Next <i className="ph-bold ph-arrow-right"></i></a>
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
              <li><Link href="/blog" style={{color: 'var(--primary)'}}>Blog</Link></li>
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


        <div className="footer-bottom">
          <p>© 2024 Bidxperts. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
