import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPosterComponent } from './view-poster.component';

describe('PosterComponent', () => {
  let component: ViewPosterComponent;
  let fixture: ComponentFixture<ViewPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
