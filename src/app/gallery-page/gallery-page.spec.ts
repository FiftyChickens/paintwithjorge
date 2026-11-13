import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryProject } from '../components/gallery-card/gallery-project';
import { GalleryPage } from './gallery-page';

describe('GalleryPage', () => {
  let component: GalleryPage;
  let fixture: ComponentFixture<GalleryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [GalleryPage] }).compileComponents();
    fixture = TestBed.createComponent(GalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('groups the available photos into project cards without the removed porch set', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-gallery-card');
    expect(cards.length).toBe(8);
    expect(cards[0].querySelectorAll('img').length).toBe(2);
    expect(cards[0].querySelector('img').getAttribute('src')).toBe('photos/firePlace_before.jpg');
    expect(cards[0].querySelector('.second-photo').getAttribute('src')).toBe('photos/firePlace_after.jpg');
    expect(cards[1].querySelector('img').getAttribute('src')).toBe('photos/door_before.jpg');
    expect(cards[1].querySelector('.second-photo').getAttribute('src')).toBe('photos/door_after.jpg');
    expect(component.galleryProjects.map((project) => project.title)).toEqual([
      'Fireplace',
      'Front Door',
      'Deck Restoration',
      'Historic Home Exterior Restoration',
      'Rustic Cabin Exterior Repaint',
      'Elevator Interior Restoration',
      'Outdoor Wood Furniture Restoration',
      'Garage Cabinet Finishing',
    ]);
    expect(component.galleryProjects.flatMap((project) => project.photos).some((photo) => photo.src.includes('porch'))).toBeFalse();
  });

  it('loads every gallery image, including images in project folders', async () => {
    const photos = component.galleryProjects.flatMap((project) => project.photos);
    expect(new Set(photos.map((photo) => photo.src)).size).toBe(photos.length);

    await Promise.all(photos.map((photo) => new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = () => reject(new Error(`Failed to load gallery image: ${photo.src}`));
      image.src = photo.src;
    })));
  });

  it('includes the garage cabinet project and keeps before photos out of the after slideshow', () => {
    const cabinet = component.galleryProjects.find((project) => project.title === 'Garage Cabinet Finishing');
    expect(cabinet?.photos.length).toBe(4);
    const historic = component.galleryProjects.find((project) => project.title === 'Historic Home Exterior Restoration');
    const before = historic?.photos.find((photo) => photo.src.endsWith('historic_before1.PNG'));
    expect(before?.label).toBe('Before');
    expect(before?.isAfter).not.toBeTrue();
  });

  it('displays all cabin views, including the replacement after photo', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-gallery-card');
    cards[4].querySelector('button').click();
    fixture.detectChanges();

    const dialog: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    const next = dialog.querySelector<HTMLButtonElement>('[aria-label="Next photo"]');
    const paths = [
      'photos/cabin-exterior/cabin_before.PNG',
      'photos/cabin-exterior/cabin_after.PNG',
      'photos/cabin-exterior/cabin_before1.PNG',
      'photos/cabin-exterior/cabin_after1.PNG',
    ];
    paths.forEach((path, index) => {
      expect(dialog.querySelector('img')?.getAttribute('src')).toBe(path);
      if (index < paths.length - 1) {
        next?.click();
        fixture.detectChanges();
      }
    });
    expect(dialog.querySelector('.preview-footer')?.textContent).toContain('After · 4 / 4');
    dialog.close();
  });

  it('opens the first photo and switches between both photos', () => {
    fixture.nativeElement.querySelector('app-gallery-card button').click();
    fixture.detectChanges();

    const dialog: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    expect(dialog.open).toBeTrue();
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe('photos/firePlace_before.jpg');
    expect(dialog.querySelector('.switcher')).toBeNull();
    expect(dialog.querySelectorAll('.slide-dot').length).toBe(2);
    expect(dialog.querySelector('.preview-footer')?.textContent).toContain('Before · 1 / 2');
    dialog.querySelector<HTMLButtonElement>('[aria-label="Next photo"]')?.click();
    fixture.detectChanges();
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe('photos/firePlace_after.jpg');
    expect(dialog.querySelector('img')?.getAttribute('alt')).toBe('Fireplace after painting');
    expect(dialog.querySelector('.preview-footer')?.textContent).toContain('After · 2 / 2');

    dialog.querySelector<HTMLButtonElement>('[aria-label="Previous photo"]')?.click();
    fixture.detectChanges();
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe('photos/firePlace_before.jpg');
    dialog.close();
  });

  it('renders a single photo without a hover image or switcher', () => {
    const project: GalleryProject = {
      title: 'Single project',
      photos: [{ src: 'photos/door_after.jpg', alt: 'A single project', label: 'Finished' }],
    };
    component.galleryProjects = [project];
    fixture.detectChanges();

    const card = fixture.nativeElement.querySelector('app-gallery-card');
    expect(card.querySelectorAll('img').length).toBe(1);
    expect(card.querySelector('.second-photo')).toBeNull();
    card.querySelector('button').click();
    fixture.detectChanges();

    const dialog: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe('photos/door_after.jpg');
    expect(dialog.querySelector('.switcher')).toBeNull();
    dialog.close();
  });

  it('lets visitors select all four perspectives of a project', () => {
    component.galleryProjects = [{
      title: 'Four perspectives',
      photos: [
        { src: 'photos/door_before.jpg', alt: 'Door front', label: 'Front' },
        { src: 'photos/door_after.jpg', alt: 'Door side', label: 'Side' },
        { src: 'photos/cabin-exterior/cabin_before.PNG', alt: 'Cabin detail', label: 'Detail' },
        { src: 'photos/cabin-exterior/cabin_after.PNG', alt: 'Cabin wide view', label: 'Wide' },
      ],
    }];
    fixture.detectChanges();

    const card = fixture.nativeElement.querySelector('app-gallery-card');
    expect(card.querySelector('.hint').textContent).toContain('4 photos');
    expect(card.querySelectorAll('img').length).toBe(2);
    card.querySelector('button').click();
    fixture.detectChanges();
    const dialog: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    expect(dialog.querySelectorAll('.slide-dot').length).toBe(4);
    expect(dialog.querySelectorAll('.nav-button').length).toBe(2);
    for (let i = 0; i < 3; i++) {
      dialog.querySelector<HTMLButtonElement>('[aria-label="Next photo"]')?.click();
    }
    fixture.detectChanges();
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe('photos/cabin-exterior/cabin_after.PNG');
    expect(dialog.querySelector('img')?.getAttribute('alt')).toBe('Cabin wide view');
    expect(dialog.querySelector('.preview-footer')?.textContent).toContain('Wide · 4 / 4');
    dialog.querySelector<HTMLButtonElement>('[aria-label="Next photo"]')?.click();
    fixture.detectChanges();
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe('photos/door_before.jpg');
    dialog.close();
  });

  it('clears the selection when the close button closes the preview', async () => {
    fixture.nativeElement.querySelector('app-gallery-card button').click();
    fixture.detectChanges();
    const dialog: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    const closed = new Promise<void>((resolve) => dialog.addEventListener('close', () => resolve(), { once: true }));
    dialog.querySelector<HTMLButtonElement>('.close')?.click();
    await closed;
    fixture.detectChanges();
    expect(component.selectedProject).toBeNull();
    expect(fixture.nativeElement.querySelector('dialog')).toBeNull();
  });
});
