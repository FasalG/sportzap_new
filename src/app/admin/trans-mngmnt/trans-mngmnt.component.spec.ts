import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransMngmntComponent } from './trans-mngmnt.component';

describe('TransMngmntComponent', () => {
  let component: TransMngmntComponent;
  let fixture: ComponentFixture<TransMngmntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransMngmntComponent]
    });
    fixture = TestBed.createComponent(TransMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
