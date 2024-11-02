import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFiltersComponent } from './ui-filters.component';

describe('UiFiltersComponent', () => {
  let component: UiFiltersComponent;
  let fixture: ComponentFixture<UiFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
