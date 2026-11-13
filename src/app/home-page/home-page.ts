import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaintingServices } from '../components/painting-services/painting-services';
import { GALLERY_PROJECTS } from '../gallery-page/gallery-projects';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PaintingServices],
  template: `
    <section class="hero" aria-labelledby="home-hero-heading">
      <div class="hero-inner">
        <div class="hero-text">
          <p class="eyebrow"><span></span> INTERIOR &amp; EXTERIOR PAINTING</p>
          <h1 id="home-hero-heading">Twin Cities Painting &amp; Home Restoration</h1>
          <p class="tagline">You choose the color. I bring it to life.</p>
          <p class="description">Interior and exterior painting, historic home restoration, and wood refinishing in Osseo, Dayton, and communities across the Greater Twin Cities.</p>
          <div class="hero-buttons">
            <a routerLink="/contact" class="button primary">Get a free estimate <span aria-hidden="true">↗</span></a>
            <a routerLink="/gallery" class="button secondary">View our work <span aria-hidden="true">→</span></a>
          </div>
          <p class="service-area">SERVING THE GREATER TWIN CITIES AREA</p>
        </div>
        <div class="hero-gallery" *ngIf="afterPhotos.length">
          <div class="hero-image">
            <img *ngFor="let photo of [afterPhotos[currentPhotoIndex]]" [src]="photo.src" [alt]="photo.alt" />
            <div class="image-caption"><span>THE FINISHED DETAILS</span><strong>Made to feel like home.</strong></div>
            <button *ngIf="afterPhotos.length > 1" type="button" class="slideshow-control" (click)="toggleSlideshow()">
              {{ isPlaying ? 'Pause' : 'Play' }} slideshow
            </button>
          </div>
          <div *ngIf="afterPhotos.length > 1" class="slide-indicators" role="group" aria-label="Choose a slideshow photo">
            <button
              *ngFor="let photo of afterPhotos; let i = index"
              type="button"
              class="slide-dot"
              [class.active]="i === currentPhotoIndex"
              [attr.aria-current]="i === currentPhotoIndex ? 'true' : null"
              [attr.aria-label]="'Show photo ' + (i + 1) + ' of ' + afterPhotos.length + ': ' + photo.alt"
              (click)="selectPhoto(i)"
            ><span aria-hidden="true"></span></button>
          </div>
        </div>
      </div>
    </section>
    <app-painting-services />
  `,
  styles: `
    .hero { background: #f3efe8; padding: clamp(2rem, 5vw, 5rem) 2rem; }
    .hero-inner { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(2rem, 6vw, 6rem); max-width: 1200px; margin: auto; }
    .eyebrow { display: flex; align-items: center; gap: 0.7rem; color: var(--brand); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    .eyebrow span { width: 28px; height: 2px; background: var(--brand); }
    h1 { max-width: 12ch; margin: 1.3rem 0; color: var(--ink); font-family: var(--heading-font); font-size: clamp(3rem, 5.7vw, 5.2rem); font-weight: 400; letter-spacing: -0.045em; line-height: 1.04; }
    .tagline { color: var(--brand); font-size: 1.1rem; font-weight: 700; margin: 0 0 0.7rem; }
    .description { max-width: 450px; color: var(--muted); font-size: 1.05rem; margin: 0; }
    .hero-buttons { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; margin-top: 2rem; }
    .button { display: inline-flex; align-items: center; gap: 1rem; padding: 0.9rem 1.2rem; border: 1px solid var(--brand); border-radius: 4px; font-size: 0.88rem; font-weight: 700; text-decoration: none; transition: background 0.2s ease, color 0.2s ease; }
    .primary { color: white; background: var(--brand); }
    .primary:hover { background: var(--brand-dark); }
    .secondary { color: var(--brand); background: transparent; }
    .secondary:hover { background: #fff; }
    .service-area { margin: 2.6rem 0 0; color: #77716a; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.13em; }
    .hero-image { position: relative; min-width: 0; }
    .hero-image img { display: block; width: 100%; aspect-ratio: 1.05; object-fit: cover; border-radius: 4px; }
    .hero-image img { animation: reveal-photo 0.6s ease; }
    .image-caption { position: absolute; bottom: 1rem; left: 1rem; padding: 0.8rem 1rem; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
    .image-caption span, .image-caption strong { display: block; }
    .image-caption span { color: var(--brand); font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em; }
    .image-caption strong { font-family: var(--heading-font); font-size: 1rem; font-weight: 400; }
    .slideshow-control { position: absolute; top: 1rem; right: 1rem; padding: 0.5rem 0.7rem; border: 0; border-radius: 3px; background: rgba(32, 25, 23, 0.85); color: white; font-size: 0.75rem; font-weight: 600; cursor: pointer; }
    .slide-indicators { display: flex; flex-wrap: wrap; justify-content: center; margin-top: 0.4rem; }
    .slide-dot { display: grid; place-items: center; width: 32px; height: 32px; padding: 0; border: 0; background: transparent; cursor: pointer; }
    .slide-dot span { width: 9px; height: 9px; border: 1px solid var(--brand); border-radius: 50%; background: transparent; }
    .slide-dot.active span { background: var(--brand); box-shadow: 0 0 0 2px var(--paper), 0 0 0 3px var(--brand); }
    .slide-dot:hover span { background: var(--brand); }
    @keyframes reveal-photo { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .hero-image img { animation: none; } }
    @media (max-width: 760px) {
      .hero { padding: 3rem 1.25rem; }
      .hero-inner { grid-template-columns: 1fr; }
      h1 { font-size: clamp(2.8rem, 11vw, 4.5rem); }
      .service-area { margin-top: 1.8rem; }
      .hero-image img { aspect-ratio: 1.3; }
    }
  `,
})
export class HomePage implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private slideshowTimer: ReturnType<typeof setInterval> | undefined;
  afterPhotos = GALLERY_PROJECTS.filter((project) => project.featureInSlideshow)
    .flatMap((project) => project.photos.filter((photo) => photo.isAfter).slice(0, 1))
    .slice(0, 5);
  currentPhotoIndex = 0;
  isPlaying = false;

  ngOnInit(): void {
    const window = this.document.defaultView;
    if (window && this.afterPhotos.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.startSlideshow();
    }
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  toggleSlideshow(): void {
    if (this.isPlaying) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  }

  selectPhoto(index: number): void {
    this.stopSlideshow();
    this.currentPhotoIndex = index;
  }

  private startSlideshow(): void {
    if (this.isPlaying || this.afterPhotos.length < 2) return;
    this.isPlaying = true;
    this.slideshowTimer = setInterval(() => {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.afterPhotos.length;
    }, 5000);
  }

  private stopSlideshow(): void {
    if (this.slideshowTimer !== undefined) clearInterval(this.slideshowTimer);
    this.slideshowTimer = undefined;
    this.isPlaying = false;
  }
}
