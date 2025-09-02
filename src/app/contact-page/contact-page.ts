import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  template: `
    <section class="contact">
      <div class="contact-container">
        <div class="contact-header">
          <h2>Get Your Free Estimate</h2>
          <p class="contact-subtitle">
            Ready to transform your space? Let's discuss your painting project
          </p>
        </div>

        <div class="contact-grid">
          <!-- Phone Contact -->
          <div class="contact-card">
            <div class="contact-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>
            <h3>Call Us Directly</h3>
            <p>Speak with Jorge for immediate assistance and quick estimates</p>
            <a href="tel:+16123872972" class="contact-link">
              <span class="link-text">(612) 387-2972</span>
              <span class="link-arrow">→</span>
            </a>
          </div>

          <!-- Email Contact -->
          <div class="contact-card">
            <div class="contact-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>Send Us an Email</h3>
            <p>Detailed project inquiries? Email us for comprehensive estimates</p>
            <a href="mailto:jorge@jorgespaintingservices.com" class="contact-link">
              <span class="link-text">jorge@jorgespaintingservices.com</span>
              <span class="link-arrow">→</span>
            </a>
          </div>

          <!-- Service Area -->
          <div class="contact-card">
            <div class="contact-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Service Area</h3>
            <p>
              Proudly serving the Greater Minneapolis, St. Paul Area community with quality painting
              services. Working out of Osseo/Dayton MN.
            </p>
          </div>

          <!-- Website Creator -->
          <div class="contact-card creator-card">
            <h3>Website Development</h3>
            <p>Professional website designed and developed by</p>
            <div class="creator-info">
              <a
                href="https://www.linkedin.com/in/bryan-vu-/"
                target="_blank"
                rel="noopener noreferrer"
                class="creator-link"
              >
                <span class="creator-name">Bryan Vu</span>
                <span class="creator-title">Web Developer & Designer</span>
              </a>
              <div class="creator-tags">
                <span class="tag">Angular</span>
                <span class="tag">Responsive Design</span>
                <span class="tag">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      color: #333;
      padding: 4rem 1rem;
      min-height: 100vh;
    }
    
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .contact-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .contact-header h2 {
      font-size: 3rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #8b0000 0%, #c0392b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .contact-subtitle {
      font-size: 1.3rem;
      color: #7f8c8d;
      font-weight: 400;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .contact-card {
      background: white;
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid #e8e8e8;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .contact-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #8b0000, #c0392b);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    .contact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    }
    
    .contact-card:hover::before {
      transform: scaleX(1);
    }
    
    .contact-icon {
      color: #8b0000;
      margin-bottom: 1.5rem;
    }
    
    .contact-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    
    .contact-card p {
      color: #7f8c8d;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .contact-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #8b0000;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      padding: 0.75rem 1.5rem;
      border: 2px solid #8b0000;
      border-radius: 10px;
    }
    
    .contact-link:hover {
      background: #8b0000;
      color: white;
      transform: translateY(-2px);
    }
    
    .contact-link:hover .link-arrow {
      transform: translateX(3px);
    }
    
    /* Creator Card Specific Styles */
    .creator-card {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
    }
    
    .creator-card::before {
      background: linear-gradient(90deg, #ffd700, #ffed4e);
    }
    
    .creator-card .contact-icon {
      color: #ffd700;
    }
    
    .creator-card h3 {
      color: white;
    }
    
    .creator-card p {
      color: rgba(255, 255, 255, 0.8);
    }
    
    .creator-info {
      margin-top: 1.5rem;
    }
    
    .creator-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: white !important;
      padding: 1rem;
      border: 2px solid #ffd700;
      border-radius: 12px;
      transition: all 0.3s ease;
      margin-bottom: 1rem;
    }
    
    .creator-link:hover {
      background: rgba(255, 215, 0, 0.1);
      transform: translateY(-2px);
    }
    
    .creator-name {
      font-size: 1.3rem;
      font-weight: 700;
      color: #ffd700;
      margin-bottom: 0.25rem;
    }
    
    .creator-title {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 0.5rem;
    }
    
    .creator-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
    
    .tag {
      background: rgba(255, 255, 255, 0.1);
      color: #ffd700;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(255, 215, 0, 0.3);
    }
    
    /* Responsive Design */
    @media (max-width: 576px) {
      .contact {
        padding: 2rem 1rem;
      }
      
      .contact-header h2 {
        font-size: 2.2rem;
      }
      
      .contact-subtitle {
        font-size: 1.1rem;
      }
      
      .contact-card {
        padding: 2rem 1.5rem;
      }
      
      .creator-tags {
        gap: 0.25rem;
      }
      
      .tag {
        font-size: 0.7rem;
        padding: 0.2rem 0.5rem;
      }
    }
    
    @media (min-width: 768px) {
      .contact-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .contact {
        padding: 5rem 2rem;
      }
      
      .contact-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
      }
      
      .contact-card {
        padding: 3rem;
      }
    }
    
    @media (min-width: 1200px) {
      .contact-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
})
export class ContactPage {}
