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
});
