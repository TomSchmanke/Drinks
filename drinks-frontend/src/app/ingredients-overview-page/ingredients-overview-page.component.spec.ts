import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsOverviewPageComponent } from './ingredients-overview-page.component';

describe('IngredientsOverviewPageComponent', () => {
  let component: IngredientsOverviewPageComponent;
  let fixture: ComponentFixture<IngredientsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
