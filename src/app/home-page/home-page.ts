import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaintingServices } from '../components/painting-services/painting-services';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, PaintingServices],
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Transform Your Space with Expert Painting</h1>
          <p class="tagline">You Choose the color - I bring it to life.</p>
          <p class="description">
            Professional painting services for both interior and exterior projects. Quality
            workmanship guaranteed.
          </p>
          <div class="hero-buttons">
            <a routerLink="/contact" class="btn btn-secondary">Get Free Estimate</a>
          </div>
        </div>
      </div>
    </section>
    <app-painting-services />
  `,
  styles: `
    .hero {
      padding: 2rem 1rem;
      background: linear-gradient(135deg, rgb(110, 11, 11) 0%, rgb(164, 55, 55) 100%);
    }
    
    .hero-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .hero-text h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: white;
      text-align: center;
    }
    
    .tagline {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #ffd700;
      text-align: center;
    }
    
    .description {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
      text-align: center;
    }
    
    .hero-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: transform 0.3s ease;
      text-align: center;
      width: 200px;
    }
    
    .btn-primary {
      background: #ffd700;
      color: #8b0000;
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .btn:hover {
      transform: translateY(-2px);
    }
    
    /* SM (576px) and up */
    @media (min-width: 576px) {
      .hero {
        padding: 2.5rem 1.5rem;
      }
      
      .hero-text h1 {
        font-size: 2.25rem;
      }
    }
    
    /* MD (768px) and up */
    @media (min-width: 768px) {
      .hero {
        padding: 3rem 2rem;
      }
      
      .hero-content {
        flex-direction: row;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .hero-text {
        flex: 1;
        text-align: left;
      }
      
      .hero-text h1 {
        text-align: left;
        font-size: 2.5rem;
      }
      
      .tagline,
      .description {
        text-align: left;
      }
      
      .hero-buttons {
        flex-direction: row;
        justify-content: flex-start;
      }
      
      .hero-image {
        flex: 1;
      }
    }
    
    /* LG (992px) and up */
    @media (min-width: 992px) {
      .hero-text h1 {
        font-size: 3rem;
      }
      
      .tagline {
        font-size: 1.5rem;
      }
      
      .description {
        font-size: 1.1rem;
      }
    }
    
    /* XL (1200px) and up */
    @media (min-width: 1200px) {
      .hero-content {
        gap: 3rem;
      }
    }
    
    /* XXL (1400px) and up */
    @media (min-width: 1400px) {
      .hero-content {
        max-width: 1400px;
      }
    }
  `,
})
export class HomePage {}
