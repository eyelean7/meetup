import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupApiComponent } from './meetup-api.component';

describe('MeetupApiComponent', () => {
  let component: MeetupApiComponent;
  let fixture: ComponentFixture<MeetupApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
