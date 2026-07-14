import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <nav class="main-nav" aria-label="Primary navigation">
        <div class="nav-container">
          <a routerLink="/" class="nav-logo" aria-label="Jorge's Painting Services home">
            <img src="logo.png" alt="Jorge's Painting" class="logo-image" />
            <span class="logo-text">JORGE'S PAINTING SERVICES</span>
          </a>
          <ul class="nav-links">
            <li>
              <a
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li><a routerLink="/gallery" routerLinkActive="active">Gallery</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="main-footer">
      <div class="footer-content">
        <p>Jorge's Painting Services LLC.</p>
        <a
          href="https://www.linkedin.com/in/bryan-vu-/"
          target="_blank"
          rel="noopener noreferrer"
          class="creator-link"
          >Website Developer</a
        >
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
      background: white;
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
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-links li {
      margin: 0;
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
      width: 100%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
    }

    .footer-content p {
      grid-column: 2;
      justify-self: center;
      margin: 0;
    }

    .footer-content a {
      grid-column: 3;
      justify-self: end;
      padding-right: 2rem;
    }

    .footer-content p,
    a {
      margin: 0.5rem 0;
      color: white;
      font-size: 0.9rem;
      text-decoration: none;
    }

    .footer-content a:hover {
      cursor: pointer;
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

      .footer-content p,
      a {
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
