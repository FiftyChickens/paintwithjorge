import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingServices } from './painting-services';

describe('PaintingServices', () => {
  let component: PaintingServices;
  let fixture: ComponentFixture<PaintingServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintingServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('advertises painting, restoration, and specialty finishing services', () => {
    const page: HTMLElement = fixture.nativeElement;
    const content = page.textContent ?? '';

    expect(page.querySelectorAll('.service-card').length).toBe(4);
    expect(content).toContain('Historic Restoration');
    expect(content).toContain('rustic cabins');
    expect(content).toContain('Deck & Outdoor Wood Restoration');
    expect(content).toContain('Outdoor wood furniture restoration');
    expect(content).toContain('Custom garage cabinet transformations');
    expect(content).toContain('Elevator interior restoration');
  });
});
