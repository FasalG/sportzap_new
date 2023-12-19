import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfModalComponent } from './turf-modal.component';

describe('TurfModalComponent', () => {
  let component: TurfModalComponent;
  let fixture: ComponentFixture<TurfModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurfModalComponent]
    });
    fixture = TestBed.createComponent(TurfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
