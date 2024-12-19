import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonListComponent } from './ui-button-list.component';

describe('UiButtonListComponent', () => {
  let component: UiButtonListComponent;
  let fixture: ComponentFixture<UiButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButtonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
