import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFormsTabComponent } from './multi-forms-tab.component';

describe('MultiFormsTabComponent', () => {
  let component: MultiFormsTabComponent;
  let fixture: ComponentFixture<MultiFormsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiFormsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFormsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
