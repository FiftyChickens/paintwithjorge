import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery" aria-labelledby="gallery-heading">
      <h1 id="gallery-heading">Our Work Gallery</h1>
      <div class="gallery-grid-wrapper">
        <ng-container *ngIf="galleryImages.length; else noImages">
          <ul class="gallery-grid">
            <li class="gallery-item" *ngFor="let image of galleryImages">
              <figure>
                <img [src]="image.src" [alt]="image.alt" loading="lazy" class="gallery-image" />
                <figcaption class="gallery-caption">{{ image.caption }}</figcaption>
                <div class="gallery-overlay">
                  <button type="button" class="view-btn" (click)="openLightbox(image)">
                    View Larger
                  </button>
                </div>
              </figure>
            </li>
          </ul>
        </ng-container>
        <ng-template #noImages>
          <p class="no-images">No images to display</p>
        </ng-template>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div
      *ngIf="selectedImage"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      (click)="closeLightbox()"
    >
      <div class="lightbox-content" (click)="$event.stopPropagation()">
        <h2 id="lightbox-title" class="visually-hidden">Image preview</h2>
        <button
          type="button"
          class="close-btn"
          (click)="closeLightbox()"
          aria-label="Close image preview"
        >
          ×
        </button>
        <img [src]="selectedImage.src" [alt]="selectedImage.alt" class="lightbox-image" />
        <div class="lightbox-caption">{{ selectedImage.caption }}</div>
      </div>
    </div>
  `,
  styles: `
    .gallery {
      padding: 2rem 1rem;
      background: white;
      color: #333;
      min-height: 100vh;
    }

    .gallery h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #8b0000;
      font-size: 2rem;
    }

    .gallery-grid-wrapper {
      display: grid;
      gap: 1.5rem;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .gallery-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }

    .gallery-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery-item:hover .gallery-image {
      transform: scale(1.05);
    }

    .gallery-caption {
      background: rgba(139, 0, 0, 0.9);
      color: white;
      padding: 0.75rem;
      text-align: center;
      font-weight: bold;
      font-size: 0.9rem;
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .view-btn {
      background: #ffd700;
      color: #8b0000;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: bold;
      cursor: pointer;
      font-size: 0.9rem;
    }

    .view-btn:hover {
      background: #ffed4e;
    }

    .no-images {
      text-align: center;
      grid-column: 1 / -1;
      color: #666;
      font-style: italic;
    }

    /* Lightbox Styles */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }

    .lightbox-content {
      position: relative;
      max-width: 95%;
      max-height: 95%;
      background: white;
      border-radius: 8px;
      overflow: hidden;
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 60vh;
      object-fit: contain;
    }

    .lightbox-caption {
      padding: 0.75rem;
      text-align: center;
      background: #8b0000;
      color: white;
      font-weight: bold;
    }

    .close-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-size: 1.2rem;
      cursor: pointer;
      z-index: 1001;
    }

    .close-btn:hover {
      background: rgba(0, 0, 0, 0.9);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
      border: 0;
    }

    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* SM (576px) and up */
    @media (min-width: 576px) {
      .gallery {
        padding: 2.5rem 1.5rem;
      }

      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.75rem;
      }

      .gallery-image {
        height: 220px;
      }
    }

    /* MD (768px) and up */
    @media (min-width: 768px) {
      .gallery {
        padding: 3rem 2rem;
      }

      .gallery h2 {
        font-size: 2.25rem;
        margin-bottom: 2.5rem;
      }

      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .gallery-image {
        height: 250px;
      }

      .gallery-caption {
        font-size: 1rem;
        padding: 1rem;
      }

      .view-btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
    }

    /* LG (992px) and up */
    @media (min-width: 992px) {
      .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .gallery-image {
        height: 280px;
      }
    }

    /* XL (1200px) and up */
    @media (min-width: 1200px) {
      .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
      }

      .gallery-image {
        height: 300px;
      }
    }

    /* XXL (1400px) and up */
    @media (min-width: 1400px) {
      .gallery-grid {
        grid-template-columns: repeat(4, 1fr);
        max-width: 1400px;
      }

      .lightbox-content {
        max-width: 90%;
        max-height: 90%;
      }

      .lightbox-image {
        max-height: 70vh;
      }
    }
  `,
})
export class GalleryPage {
  galleryImages = [
    {
      src: 'photos/firePlace_before.jpg',
      alt: 'Interior painting/Fireplace before painting',
      caption: 'Fireplace Before',
    },
    {
      src: 'photos/firePlace_after.jpg',
      alt: 'Interior painting/Fireplace after painting',
      caption: 'Fireplace After',
    },
    {
      src: 'photos/porch_before.jpg',
      alt: 'Exterior painting/Porch before painting',
      caption: 'Porch Before ',
    },
    {
      src: 'photos/porch_after.jpg',
      alt: 'Exterior painting/Porch after painting',
      caption: 'Porch After',
    },
  ];

  selectedImage: any = null;

  openLightbox(image: any) {
    this.selectedImage = image;
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    // Re-enable body scrolling
    document.body.style.overflow = '';
  }
}
