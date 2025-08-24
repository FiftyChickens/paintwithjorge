import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="main-nav">
      <img src="logo.png" alt="Jorge's Painting" />
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">
          <span>JORGE'S PAINTING SERVICES</span>
        </a>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active">Home</a>
          <a routerLink="/gallery" routerLinkActive="active">Gallery</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="main-footer">
      <div class="footer-content">
        <p>Jorge's Painting Services LLC.</p>
        <p class="creator-link">
          Created by
          <a
            href="https://www.linkedin.com/in/bryan-vu-/"
            target="_blank"
            rel="noopener noreferrer"
            class="creator-anchor"
          >
            Bryan Vu
          </a>
        </p>
      </div>
    </footer>
  `,
  styles: `
    .main-nav {
      background: rgb(110, 11, 11);
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
    }
    
    .main-nav img {
      margin-right: 0.5rem;
      margin-left: auto;
      width: 50px;
      height: 50px;
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      transition: opacity 0.3s ease;
    }
    
    .nav-links a:hover,
    .nav-links a.active {
      opacity: 0.8;
      text-decoration: underline;
    }
    
    .main-content {
      min-height: calc(100vh - 200px);
    }
    
    .main-footer {
      background: rgb(110, 11, 11);
      padding: 2rem 0;
      text-align: center;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .footer-content p {
      margin: 0.5rem 0;
      color: white;
    }
    
    .creator-link {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      flex-wrap: wrap;
    }
    
    .creator-anchor {
      color: #ffd700 !important; /* Gold color for emphasis */
      text-decoration: none !important;
      font-weight: bold;
      transition: color 0.3s ease;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
    }
    
    .creator-anchor:hover {
      color: #ffffff !important;
      background: rgba(255, 255, 255, 0.2);
      text-decoration: none !important;
      opacity: 1 !important;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-links {
        gap: 1rem;
      }
    }
    
    @media (max-width: 576px) {
      
      .nav-logo span {
        font-size: 1rem;
      }
    }
  `,
})
export class App {}
