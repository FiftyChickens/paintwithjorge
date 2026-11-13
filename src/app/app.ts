import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <nav class="main-nav" aria-label="Primary navigation">
        <a routerLink="/" class="nav-logo" aria-label="Jorge's Painting Services home">
          <img src="logo.png" alt="" class="logo-image" />
          <span class="logo-text"><strong>JORGE'S</strong><span>PAINTING SERVICES</span></span>
        </a>
        <ul class="nav-links">
          <li>
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
              >Home</a
            >
          </li>
          <li><a routerLink="/gallery" routerLinkActive="active">Gallery</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
        <a routerLink="/contact" class="nav-cta"
          >Get a free estimate <span aria-hidden="true">↗</span></a
        >
      </nav>
    </header>

    <main id="main-content" class="main-content"><router-outlet /></main>

    <footer class="main-footer">
      <div class="footer-content">
        <div>
          <p class="footer-brand">Jorge's Painting Services LLC.</p>
          <p class="footer-note">
            Painting &amp; restoration in Osseo, Dayton, and the Greater Twin Cities.
          </p>
        </div>
        <div class="footer-links">
          <a routerLink="/gallery">Our work</a>
          <a routerLink="/contact">Contact</a>
          <a href="https://www.linkedin.com/in/bryan-vu-" target="_blank" rel="noopener noreferrer"
            >Developer</a
          >
        </div>
      </div>
    </footer>
  `,
  styles: `
    .site-header {
      background: #fff;
      border-bottom: 1px solid var(--line);
    }
    .main-nav {
      max-width: 1280px;
      min-height: 88px;
      margin: auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--ink);
      text-decoration: none;
      margin-right: auto;
    }
    .logo-image {
      width: 52px;
      height: 52px;
      object-fit: contain;
    }
    .logo-text {
      display: flex;
      flex-direction: column;
      font-size: 0.61rem;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: 0.12em;
    }
    .logo-text strong {
      font-family: var(--heading-font);
      font-size: 1.25rem;
      letter-spacing: 0.02em;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .nav-links a {
      display: block;
      padding: 0.5rem 0;
      border-bottom: 2px solid transparent;
      color: #514d48;
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
    }
    .nav-links a:hover,
    .nav-links a.active {
      color: var(--brand);
      border-color: var(--brand);
    }
    .nav-cta {
      padding: 0.75rem 1rem;
      color: white;
      background: var(--brand);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 700;
      border-radius: 4px;
    }
    .nav-cta:hover {
      background: var(--brand-dark);
    }
    .nav-cta span {
      margin-left: 0.4rem;
    }
    .main-content {
      min-height: 60vh;
    }
    .main-footer {
      background: #292a27;
      color: #fff;
      padding: 2.5rem 2rem;
    }
    .footer-content {
      max-width: 1200px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    .footer-brand {
      margin: 0;
      font-family: var(--heading-font);
      font-size: 1.2rem;
    }
    .footer-note {
      color: #d0cbc4;
      font-size: 0.85rem;
      margin: 0.3rem 0 0;
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    .footer-links a {
      color: #e5e0d9;
      font-size: 0.85rem;
      text-decoration: none;
    }
    .footer-links a:hover {
      color: white;
      text-decoration: underline;
    }
    @media (max-width: 760px) {
      .main-nav {
        min-height: 0;
        padding: 0.75rem 1rem;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
      }
      .nav-logo {
        width: 100%;
        justify-content: center;
        margin: 0;
      }
      .logo-image {
        width: 42px;
        height: 42px;
      }
      .nav-links {
        justify-content: center;
        flex: 1;
        gap: 1.25rem;
      }
      .nav-cta {
        padding: 0.55rem 0.7rem;
        font-size: 0.75rem;
      }
      .footer-content {
        align-items: flex-start;
        flex-direction: column;
      }
    }
    @media (max-width: 370px) {
      .nav-links {
        gap: 0.8rem;
      }
      .nav-links a {
        font-size: 0.8rem;
      }
    }
  `,
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.updateSeoMetadata());
  }

  private updateSeoMetadata(): void {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;

    const { title, description } = route.data;
    if (typeof title !== 'string' || typeof description !== 'string') return;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    const canonicalUrl = new URL(this.router.url, this.document.baseURI);
    canonicalUrl.search = '';
    canonicalUrl.hash = '';
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl.href });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.append(canonical);
    }
    canonical.href = canonicalUrl.href;
  }
}
