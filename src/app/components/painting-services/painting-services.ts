import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-painting-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="services-section" [class.home-page]="isHomePage">
      <div class="services-header">
        <h2 class="services-title">
          {{ isHomePage ? 'Our Premium Services' : 'Professional Painting Services' }}
        </h2>
        <p class="services-subtitle">Transforming spaces with precision and expertise</p>
      </div>

      <div class="services-container">
        @for (service of services; track service.category) {
        <div class="service-card">
          <div class="service-icon">
            @if (service.category === 'interior') {
            <span>🏠</span>
            } @else {
            <span>🏡</span>
            }
          </div>

          <h3 class="service-title">{{ service.title }}</h3>

          <ul class="services-list">
            @for (item of service.items; track item; let i = $index) {
            <li class="service-item">
              <span class="item-number">{{ i + 1 }}.</span>
              <span class="item-text">{{ item }}</span>
            </li>
            }
          </ul>

          @if (isHomePage) {
          <div class="service-cta">
            <a routerLink="/services" class="cta-button">
              Learn More
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          }
        </div>
        }
      </div>

      @if (isHomePage) {
      <div class="all-services-cta">
        <a routerLink="/services" class="primary-button">
          View All Services
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      }
    </section>
  `,
  styles: `
    .services-section {
      padding: 4rem 1rem;
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    }
    
    .services-header {
      text-align: center;
      margin-bottom: 3rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .services-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #8b0000 0%, #c0392b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .services-subtitle {
      font-size: 1.2rem;
      color: #7f8c8d;
      font-weight: 400;
      line-height: 1.6;
    }
    
    .services-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .service-card {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid #e8e8e8;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #8b0000, #c0392b);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    }
    
    .service-card:hover::before {
      transform: scaleX(1);
    }
    
    .service-icon {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 3rem;
    }
    
    .service-title {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 2rem;
      position: relative;
    }
    
    .service-title::after {
      content: '';
      position: absolute;
      bottom: -0.75rem;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #8b0000, #c0392b);
      border-radius: 2px;
    }
    
    .services-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
    }
    
    .service-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #8b0000;
      transition: all 0.3s ease;
    }
    
    .service-item:hover {
      background: #e8f4f8;
      transform: translateX(5px);
    }
    
    .item-number {
      font-weight: 700;
      color: #8b0000;
      font-size: 1.1rem;
      min-width: 1.5rem;
    }
    
    .item-text {
      color: #2c3e50;
      line-height: 1.6;
      flex: 1;
    }
    
    .service-cta {
      text-align: center;
      margin-top: 1.5rem;
    }
    
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: transparent;
      color: #8b0000;
      text-decoration: none;
      border: 2px solid #8b0000;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .cta-button:hover {
      background: #8b0000;
      color: white;
      transform: translateY(-2px);
    }
    
    .all-services-cta {
      text-align: center;
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #e8e8e8;
    }
    
    .primary-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #8b0000 0%, #c0392b 100%);
      color: white;
      text-decoration: none;
      border-radius: 10px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 5px 20px rgba(139, 0, 0, 0.3);
    }
    
    .primary-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(139, 0, 0, 0.4);
    }
    
    /* Responsive Design */
    @media (max-width: 576px) {
      .services-section {
        padding: 2.5rem 1rem;
      }
      
      .services-title {
        font-size: 2rem;
      }
      
      .services-subtitle {
        font-size: 1.1rem;
      }
      
      .service-card {
        padding: 2rem 1.5rem;
      }
      
      .service-icon {
        font-size: 2.5rem;
      }
      
      .service-title {
        font-size: 1.3rem;
      }
    }
    
    @media (min-width: 768px) {
      .services-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
      }
      
      .services-title {
        font-size: 3rem;
      }
    }
    
    @media (min-width: 992px) {
      .services-section {
        padding: 5rem 2rem;
      }
      
      .services-container {
        gap: 3rem;
      }
      
      .service-card {
        padding: 3rem;
      }
    }
    
    @media (min-width: 1200px) {
      .services-container {
        gap: 4rem;
      }
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
        'Surface preparation: patching holes, sanding, repairing cracks, and cleaning walls/ceilings',
        'Painting and staining: applying primers, paint, and finishes on walls, ceilings, doors, trim, and cabinets',
        'Detailing work: ensuring clean edges, smooth finishes, and consistent color coverage throughout',
      ],
    },
    {
      category: 'exterior',
      title: 'Exterior Painting',
      items: [
        'Surface preparation: power washing, scraping loose paint, sanding, caulking gaps, and repairing wood/siding',
        'Protective coatings: applying weather-resistant paints, stains, and sealers for durability against elements',
        'Large-scale application: professional painting of siding, decks, fences, garages, and exterior trim',
      ],
    },
  ];
}
