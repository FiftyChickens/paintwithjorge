import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="main-nav">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">
          <img src="logo.png" alt="Jorge's Painting" class="logo-image" />
          <span class="logo-text">JORGE'S PAINTING SERVICES</span>
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
      padding: 0.5rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .nav-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 0 1rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      font-weight: bold;
      gap: 0.5rem;
    }
    
    .logo-image {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    
    .logo-text {
      font-size: 1rem;
      white-space: nowrap;
    }
    
    .nav-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .nav-links a:hover,
    .nav-links a.active {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-1px);
    }
    
    .nav-links a.active {
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
    }
    
    .main-content {
      min-height: calc(100vh - 200px);
    }
    
    .main-footer {
      background: rgb(110, 11, 11);
      padding: 1.5rem 0;
      text-align: center;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .footer-content p {
      margin: 0.5rem 0;
      color: white;
      font-size: 0.9rem;
    }
    
    .creator-link {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      flex-wrap: wrap;
    }
    
    .creator-anchor {
      color: #ffd700 !important;
      text-decoration: none !important;
      font-weight: bold;
      transition: all 0.3s ease;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
      font-size: 0.9rem;
    }
    
    .creator-anchor:hover {
      color: #ffffff !important;
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }
    
    @media (max-width: 575px) {
      .nav-container {
        padding: 0 0.5rem;
      }
      
      .logo-text {
        font-size: 0.9rem;
      }
      
      .nav-links {
        gap: 0.5rem;
      }
      
      .nav-links a {
        padding: 0.4rem 0.6rem;
        font-size: 0.85rem;
      }
    }
    
    @media (min-width: 576px) {
      .main-nav {
        padding: 0.75rem 0;
      }
      
      .nav-container {
        padding: 0 1.5rem;
      }
      
      .logo-text {
        font-size: 1.1rem;
      }
      
      .nav-links {
        gap: 1.25rem;
      }
      
      .nav-links a {
        padding: 0.5rem 0.75rem;
        font-size: 0.95rem;
      }
    }
    
    @media (min-width: 768px) {
      .nav-container {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 2rem;
      }
      
      .logo-image {
        width: 45px;
        height: 45px;
      }
      
      .logo-text {
        font-size: 1.2rem;
      }
      
      .nav-links {
        gap: 1.5rem;
      }
      
      .nav-links a {
        font-size: 1rem;
      }
      
      .footer-content {
        padding: 0 2rem;
      }
    }
    
    @media (min-width: 992px) {
      .main-nav {
        padding: 1rem 0;
      }
      
      .nav-container {
        padding: 0 2.5rem;
      }
      
      .logo-image {
        width: 50px;
        height: 50px;
      }
      
      .logo-text {
        font-size: 1.3rem;
      }
      
      .nav-links {
        gap: 2rem;
      }
      
      .nav-links a {
        padding: 0.6rem 1rem;
        font-size: 1.05rem;
      }
      
      .footer-content {
        padding: 0 2.5rem;
      }
    }
    
    @media (min-width: 1200px) {
      .nav-container {
        padding: 0 3rem;
      }
      
      .logo-text {
        font-size: 1.4rem;
      }
      
      .nav-links {
        gap: 2.5rem;
      }
      
      .nav-links a {
        padding: 0.7rem 1.25rem;
        font-size: 1.1rem;
      }
      
      .footer-content {
        padding: 0 3rem;
      }
      
      .footer-content p {
        font-size: 1rem;
      }
    }
    
    @media (min-width: 1400px) {
      .nav-container {
        padding: 0 4rem;
      }
      
      .logo-image {
        width: 55px;
        height: 55px;
      }
      
      .logo-text {
        font-size: 1.5rem;
      }
      
      .nav-links {
        gap: 3rem;
      }
      
      .nav-links a {
        padding: 0.8rem 1.5rem;
        font-size: 1.15rem;
      }
      
      .footer-content {
        padding: 0 4rem;
      }
      
      .main-footer {
        padding: 2rem 0;
      }
    }
    
    @media (max-width: 380px) {
      .logo-text {
        font-size: 0.8rem;
      }
      
      .nav-links {
        gap: 0.25rem;
      }
      
      .nav-links a {
        padding: 0.3rem 0.5rem;
        font-size: 0.8rem;
      }
    }
  `,
})
export class App {}
