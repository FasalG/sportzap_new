import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMngmntComponent } from './booking-mngmnt.component';

describe('BookingMngmntComponent', () => {
  let component: BookingMngmntComponent;
  let fixture: ComponentFixture<BookingMngmntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingMngmntComponent]
    });
    fixture = TestBed.createComponent(BookingMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
