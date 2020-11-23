import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNameComponent } from './check-name.component';

describe('CheckNameComponent', () => {
  let component: CheckNameComponent;
  let fixture: ComponentFixture<CheckNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
