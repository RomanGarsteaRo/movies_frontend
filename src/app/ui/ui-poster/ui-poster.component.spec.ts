import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPosterComponent } from './ui-poster.component';

describe('UiPosterComponent', () => {
  let component: UiPosterComponent;
  let fixture: ComponentFixture<UiPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
