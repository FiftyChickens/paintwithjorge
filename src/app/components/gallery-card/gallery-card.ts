import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryProject } from './gallery-project';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="card"
      [attr.aria-label]="'View larger: ' + project.title"
      (click)="view.emit(project)"
    >
      <span class="image-frame">
        <img [src]="project.photos[0].src" [alt]="project.photos[0].alt" loading="lazy" />
        <img
          *ngIf="project.photos[1] as secondPhoto"
          class="second-photo"
          [src]="secondPhoto.src"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <span class="view-label" aria-hidden="true">View project <span>↗</span></span>
      </span>
      <span class="card-footer">
        <span class="title">{{ project.title }}</span>
        <span class="hint">{{ photoHint }}</span>
      </span>
    </button>
  `,
  styles: `
    :host { display: block; height: 100%; }
    .card {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 4px;
      background: #fff;
      text-align: left;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(44, 32, 27, 0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover, .card:focus-visible {
      transform: translateY(-5px);
      box-shadow: 0 14px 32px rgba(44, 32, 27, 0.18);
    }
    .card:focus-visible { outline: 3px solid var(--brand); outline-offset: 4px; }
    .image-frame {
      position: relative;
      display: block;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: #eeeae7;
    }
    .image-frame img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .image-frame .second-photo {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .card:hover .second-photo, .card:focus-visible .second-photo { opacity: 1; }
    .view-label {
      position: absolute;
      right: 0.75rem;
      bottom: 0.75rem;
      padding: 0.45rem 0.7rem;
      border-radius: 3px;
      color: #fff;
      background: rgba(32, 25, 23, 0.8);
      font-size: 0.8rem;
      font-weight: 600;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem 1.1rem;
    }
    .title { color: var(--ink); font-family: var(--heading-font); font-size: 1.25rem; font-weight: 400; }
    .hint { color: var(--muted); font-size: 0.8rem; }
    @media (prefers-reduced-motion: reduce) {
      .card, .image-frame .second-photo { transition: none; }
      .card:hover, .card:focus-visible { transform: none; }
    }
  `,
})
export class GalleryCard {
  @Input({ required: true }) project!: GalleryProject;
  @Output() view = new EventEmitter<GalleryProject>();

  get photoHint(): string {
    if (this.project.photos.length === 1) return 'View photo';
    if (this.project.photos.length === 2 && this.project.photos[0].label.toLowerCase() === 'before' && this.project.photos[1].isAfter) {
      return 'Before & after';
    }
    return `${this.project.photos.length} photos`;
  }
}
