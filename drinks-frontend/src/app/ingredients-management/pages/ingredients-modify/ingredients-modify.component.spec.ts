import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsModifyComponent } from './ingredients-modify.component';

describe('IngredientsModifyComponent', () => {
  let component: IngredientsModifyComponent;
  let fixture: ComponentFixture<IngredientsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
