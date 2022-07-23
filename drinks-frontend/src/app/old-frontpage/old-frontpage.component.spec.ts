import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldFrontpageComponent } from './old-frontpage.component';

describe('OldFrontpageComponent', () => {
  let component: OldFrontpageComponent;
  let fixture: ComponentFixture<OldFrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldFrontpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
