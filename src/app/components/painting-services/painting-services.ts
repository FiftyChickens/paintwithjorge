import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-painting-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="services-section" [class.home-page]="isHomePage" aria-labelledby="services-heading">
      <div class="services-header">
        <div>
          <p class="eyebrow">WHAT WE DO</p>
          <h2 id="services-heading">{{ isHomePage ? 'Painting & Restoration Services' : 'Professional Painting & Restoration' }}</h2>
        </div>
        <p class="services-subtitle">Thoughtful preparation, skilled painting, and restoration for homes and the details that make them yours.</p>
      </div>
      <div class="services-container">
        <article class="service-card" *ngFor="let service of services; let serviceIndex = index">
          <div class="card-top">
            <span class="service-number">0{{ serviceIndex + 1 }} / {{ service.category }}</span>
            <span class="card-mark" aria-hidden="true">↗</span>
          </div>
          <h3>{{ service.title }}</h3>
          <ul class="services-list">
            <li *ngFor="let item of service.items"><span class="item-mark" aria-hidden="true"></span><span>{{ item }}</span></li>
          </ul>
          <a *ngIf="isHomePage" routerLink="/contact" class="cta-button">Learn More <span aria-hidden="true">→</span></a>
        </article>
      </div>
      <div class="all-services-cta" *ngIf="isHomePage">
        <a routerLink="/contact" class="cta-button">View All Services <span aria-hidden="true">→</span></a>
      </div>
    </section>
  `,
  styles: `
    .services-section { padding: clamp(4rem, 7vw, 6.5rem) 2rem; background: #fff; }
    .services-header, .services-container, .all-services-cta { max-width: 1200px; margin-left: auto; margin-right: auto; }
    .services-header { display: flex; justify-content: space-between; align-items: end; gap: 2rem; margin-bottom: 2.5rem; }
    .eyebrow { color: var(--brand); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; margin: 0 0 0.8rem; }
    h2 { font-family: var(--heading-font); font-size: clamp(2.2rem, 4vw, 3.4rem); line-height: 1.1; letter-spacing: -0.035em; font-weight: 400; margin: 0; }
    .services-subtitle { max-width: 310px; color: var(--muted); margin: 0; }
    .services-container { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
    .service-card { padding: 2rem; background: var(--paper); border: 1px solid var(--line); border-radius: 4px; }
    .card-top { display: flex; justify-content: space-between; align-items: center; }
    .service-number { color: var(--brand); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    .card-mark { color: var(--brand); font-size: 1.3rem; }
    h3 { margin: 1.2rem 0 1.5rem; font-family: var(--heading-font); font-size: 1.8rem; font-weight: 400; }
    .services-list { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--line); }
    .services-list li { display: flex; gap: 0.8rem; padding: 1rem 0; color: var(--muted); border-bottom: 1px solid var(--line); font-size: 0.93rem; }
    .item-mark { flex: 0 0 5px; width: 5px; height: 5px; margin-top: 0.65rem; border-radius: 50%; background: var(--brand); }
    .cta-button { display: inline-flex; gap: 1rem; margin-top: 1.5rem; color: var(--brand); font-weight: 700; text-decoration: none; }
    .cta-button:hover { text-decoration: underline; }
    @media (max-width: 760px) {
      .services-section { padding: 4rem 1.25rem; }
      .services-header { align-items: start; flex-direction: column; gap: 1rem; }
      .services-container { grid-template-columns: 1fr; }
      .service-card { padding: 1.5rem; }
    }
  `,
})
export class PaintingServices {
  @Input() isHomePage: boolean = false;

  services = [
    {
      category: 'interior',
      title: 'Interior Painting',
      items: [
        'Careful preparation, including patching, sanding, crack repair, and cleaning',
        'Painting walls, ceilings, doors, and trim with primers and finishes suited to each surface',
        'Clean edges and consistent color for a polished room-by-room result',
      ],
    },
    {
      category: 'exterior',
      title: 'Exterior Painting & Historic Restoration',
      items: [
        'Exterior repaints for homes and rustic cabins, including siding, doors, and trim',
        'Historic home restoration with detailed paint scraping, siding repairs, thorough preparation, and a fresh finish that respects the home’s character',
        'Protective coatings, caulking, and surface repairs to help finishes stand up to the elements',
      ],
    },
    {
      category: 'wood restoration',
      title: 'Deck & Outdoor Wood Restoration',
      items: [
        'Deck restoration with careful cleaning, preparation, and renewed protective finishes',
        'Outdoor wood furniture restoration to refresh and protect well-used pieces',
        'Staining and sealing options to bring out the natural character of exterior wood',
      ],
    },
    {
      category: 'specialty finishes',
      title: 'Cabinet & Specialty Finishing',
      items: [
        'Custom garage cabinet transformations, professionally finished and painted',
        'Elevator interior restoration with detailed surface preparation and a refreshed finish',
        'Thoughtful coatings and finish work for distinctive interior projects',
      ],
    },
  ];
}
