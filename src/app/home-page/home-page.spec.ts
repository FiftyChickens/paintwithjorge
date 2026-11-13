import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomePage } from './home-page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('offers estimate and gallery links alongside the services', () => {
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('a[href="/contact"]')).toBeTruthy();
    expect(page.querySelector('a[href="/gallery"]')).toBeTruthy();
    expect(page.querySelectorAll('.service-card').length).toBe(4);
  });

  it('cycles through marked after photos and can pause and resume', fakeAsync(() => {
    const noPreference = window.matchMedia('not all');
    spyOn(window, 'matchMedia').and.returnValue(noPreference);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(component.afterPhotos.map((photo) => photo.src)).toEqual([
      'photos/deck-restoration/deck_after1.PNG',
      'photos/historic-home-restoration/historic_after.PNG',
      'photos/cabin-exterior/cabin_after.PNG',
      'photos/elevator-restoration/elevator_after.PNG',
      'photos/wooden-furniture-restoration/furniture_after.PNG',
    ]);
    expect(component.afterPhotos.length).toBe(5);
    expect(page.querySelector('.hero-image img')?.getAttribute('src')).toBe('photos/deck-restoration/deck_after1.PNG');
    tick(5000);
    fixture.detectChanges();
    expect(page.querySelector('.hero-image img')?.getAttribute('src')).toBe('photos/historic-home-restoration/historic_after.PNG');
    page.querySelector<HTMLButtonElement>('.slideshow-control')?.click();
    tick(10000);
    fixture.detectChanges();
    expect(component.currentPhotoIndex).toBe(1);
    page.querySelector<HTMLButtonElement>('.slideshow-control')?.click();
    tick(5000);
    fixture.detectChanges();
    expect(component.currentPhotoIndex).toBe(2);
    fixture.destroy();
  }));

  it('starts paused for reduced motion and permits manual playback', fakeAsync(() => {
    const reducedMotion = window.matchMedia('all');
    spyOn(window, 'matchMedia').and.returnValue(reducedMotion);
    fixture.detectChanges();
    tick(5000);
    expect(component.currentPhotoIndex).toBe(0);
    expect(component.isPlaying).toBeFalse();
    fixture.nativeElement.querySelector('.slideshow-control').click();
    tick(5000);
    expect(component.currentPhotoIndex).toBe(1);
    fixture.destroy();
  }));

  it('updates indicators as slides advance and pauses when a photo is selected', fakeAsync(() => {
    const noPreference = window.matchMedia('not all');
    spyOn(window, 'matchMedia').and.returnValue(noPreference);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    const dots = page.querySelectorAll<HTMLButtonElement>('.slide-dot');
    expect(dots.length).toBe(5);
    expect(dots[0].getAttribute('aria-current')).toBe('true');
    expect(dots[1].getAttribute('aria-label')).toContain('Historic home exterior after restoration');
    tick(5000);
    fixture.detectChanges();
    expect(dots[0].hasAttribute('aria-current')).toBeFalse();
    expect(dots[1].getAttribute('aria-current')).toBe('true');
    dots[0].click();
    fixture.detectChanges();
    expect(component.isPlaying).toBeFalse();
    expect(page.querySelector('.hero-image img')?.getAttribute('src')).toBe('photos/deck-restoration/deck_after1.PNG');
    expect(dots[0].getAttribute('aria-current')).toBe('true');
    dots[1].click();
    fixture.detectChanges();
    tick(5000);
    expect(component.currentPhotoIndex).toBe(1);
    expect(dots[1].getAttribute('aria-current')).toBe('true');
    fixture.destroy();
  }));

  it('does not show slideshow controls for one or no after photos', () => {
    component.afterPhotos = component.afterPhotos.slice(0, 1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.hero-image img')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.slideshow-control')).toBeNull();
    expect(fixture.nativeElement.querySelector('.slide-indicators')).toBeNull();
    component.afterPhotos = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.hero-image')).toBeNull();
  });
});
