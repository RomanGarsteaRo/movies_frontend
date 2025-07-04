import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListComponent } from './view-list.component';

describe('MoviesListComponent', () => {
  let component: ViewListComponent;
  let fixture: ComponentFixture<ViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
