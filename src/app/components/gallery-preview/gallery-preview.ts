import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { GalleryProject } from '../gallery-card/gallery-project';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <dialog
      #dialog
      class="preview"
      aria-labelledby="preview-title"
      (close)="closed.emit()"
      (click)="closeOnBackdrop($event)"
    >
      <div class="preview-header">
        <div>
          <p class="eyebrow">Our work</p>
          <h2 id="preview-title">{{ project.title }}</h2>
        </div>
        <button
          type="button"
          class="close"
          aria-label="Close image preview"
          (click)="dialog.close()"
          autofocus
        >
          &times;
        </button>
      </div>
      <div class="image-frame">
        <img [src]="project.photos[selectedIndex].src" [alt]="project.photos[selectedIndex].alt" />
      </div>
      <div class="preview-footer">
        <p aria-live="polite">
          {{ project.photos[selectedIndex].label }} · {{ selectedIndex + 1 }} /
          {{ project.photos.length }}
        </p>
        <div
          *ngIf="project.photos.length > 1"
          class="photo-navigation"
          role="group"
          aria-label="Project photo navigation"
        >
          <button
            type="button"
            class="nav-button"
            aria-label="Previous photo"
            (click)="showPreviousPhoto()"
          >
            Previous
          </button>
          <div class="slide-indicators" aria-hidden="true">
            <span
              *ngFor="let photo of project.photos; let i = index"
              class="slide-dot"
              [class.active]="selectedIndex === i"
            ></span>
          </div>
          <button
            type="button"
            class="nav-button"
            aria-label="Next photo"
            (click)="showNextPhoto()"
          >
            Next
          </button>
        </div>
      </div>
    </dialog>
  `,
  styles: `
    .preview {
      width: min(900px, calc(100vw - 2rem));
      max-width: none;
      max-height: calc(100dvh - 2rem);
      box-sizing: border-box;
      padding: 0;
      border: 0;
      border-radius: 14px;
      color: var(--ink);
      background: #fff;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
    }
    .preview::backdrop {
      background: rgba(20, 17, 16, 0.84);
    }
    .preview-header,
    .preview-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.25rem;
    }
    .eyebrow {
      margin: 0 0 0.2rem;
      color: var(--brand);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h2 {
      margin: 0;
      font-family: var(--heading-font);
      font-size: 1.4rem;
      font-weight: 400;
    }
    .close {
      flex: 0 0 auto;
      width: 2.5rem;
      height: 2.5rem;
      border: 0;
      border-radius: 50%;
      background: #f3efed;
      color: #2c3e50;
      font-size: 1.75rem;
      cursor: pointer;
    }
    .image-frame {
      display: flex;
      align-items: center;
      justify-content: center;
      height: min(65dvh, 650px);
      background: #211e1d;
    }
    .image-frame img {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .preview-footer p {
      margin: 0;
      font-weight: 600;
    }
    .preview-footer {
      flex-wrap: wrap;
    }
    .photo-navigation {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .nav-button {
      padding: 0.55rem 0.75rem;
      border: 0;
      border-radius: 6px;
      background: #f3efed;
      color: var(--brand);
      font-weight: 600;
      cursor: pointer;
    }
    .nav-button:hover {
      background: #e8dfdc;
    }
    .slide-indicators {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0 0.35rem;
    }
    .slide-dot {
      width: 0.5rem;
      height: 0.5rem;
      border: 1px solid var(--brand);
      border-radius: 50%;
    }
    .slide-dot.active {
      background: var(--brand);
    }
    button:focus-visible {
      outline: 3px solid #c0392b;
      outline-offset: 2px;
    }
    @media (max-width: 480px) {
      .preview-header,
      .preview-footer {
        padding: 0.8rem;
      }
      .image-frame {
        height: 55dvh;
      }
      .preview-footer {
        flex-wrap: wrap;
      }
    }
  `,
})
export class GalleryPreview implements AfterViewInit {
  @Input({ required: true }) project!: GalleryProject;
  @Output() closed = new EventEmitter<void>();
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  selectedIndex = 0;

  showPreviousPhoto(): void {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.project.photos.length) % this.project.photos.length;
  }

  showNextPhoto(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.project.photos.length;
  }

  ngAfterViewInit(): void {
    this.dialog.nativeElement.showModal();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target === this.dialog.nativeElement) {
      this.dialog.nativeElement.close();
    }
  }
}
