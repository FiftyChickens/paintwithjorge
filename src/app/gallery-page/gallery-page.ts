import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryCard } from '../components/gallery-card/gallery-card';
import { GalleryProject } from '../components/gallery-card/gallery-project';
import { GalleryPreview } from '../components/gallery-preview/gallery-preview';
import { GALLERY_PROJECTS } from './gallery-projects';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryCard, GalleryPreview],
  template: `
    <section class="gallery" aria-labelledby="gallery-heading">
      <div class="gallery-header">
        <p class="eyebrow">THE DETAILS MAKE THE DIFFERENCE</p>
        <h1 id="gallery-heading">Painting &amp; Restoration Projects</h1>
        <p class="gallery-intro">Explore interior, exterior, and restoration projects by Jorge’s Painting Services in the Greater Twin Cities.</p>
      </div>
      <ul *ngIf="galleryProjects.length; else noImages" class="gallery-grid">
        <li *ngFor="let project of galleryProjects">
          <app-gallery-card [project]="project" (view)="selectedProject = $event" />
        </li>
      </ul>
      <ng-template #noImages>
        <p class="no-images">No images to display</p>
      </ng-template>
    </section>

    <app-gallery-preview
      *ngIf="selectedProject as project"
      [project]="project"
      (closed)="selectedProject = null"
    />
  `,
  styles: `
    .gallery { padding: clamp(4rem, 8vw, 7rem) 2rem; background: var(--paper); min-height: 65vh; }
    .gallery-header { max-width: 1200px; margin: 0 auto 3rem; }
    .eyebrow { margin: 0 0 0.8rem; color: var(--brand); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    .gallery-header h1 { margin: 0 0 1rem; font-family: var(--heading-font); font-size: clamp(2.8rem, 5vw, 4.4rem); line-height: 1.1; letter-spacing: -0.04em; font-weight: 400; }
    .gallery-intro { margin: 0; color: var(--muted); line-height: 1.6; }
    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0;
      list-style: none;
    }
    .no-images { text-align: center; color: #666; font-style: italic; }
    @media (min-width: 576px) {
      .gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.75rem; }
    }
    @media (min-width: 992px) {
      .gallery-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; }
    }
    @media (max-width: 600px) { .gallery { padding: 4rem 1.25rem; } }
  `,
})
export class GalleryPage {
  galleryProjects: GalleryProject[] = GALLERY_PROJECTS;

  selectedProject: GalleryProject | null = null;
}
