import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPage } from './contact-page';

describe('ContactPage', () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps phone and email contact links available', () => {
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('a[href="tel:+16123872972"]')).toBeTruthy();
    expect(page.querySelector('a[href="mailto:jorge@jorgespaintingservices.com"]')).toBeTruthy();
  });
});
