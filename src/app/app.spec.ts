import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the primary navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')?.textContent).toContain('JORGE');
    expect(compiled.querySelector('a[href="/gallery"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="/contact"]')).toBeTruthy();
  });

  it('updates titles, descriptions, and canonical URLs when navigating', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    await TestBed.inject(Router).navigateByUrl('/gallery');
    fixture.detectChanges();

    expect(document.title).toBe("Painting & Restoration Projects | Jorge's Painting Services LLC");
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Greater Twin Cities',
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toMatch(/\/gallery$/);
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toMatch(/\/gallery$/);
  });
});
