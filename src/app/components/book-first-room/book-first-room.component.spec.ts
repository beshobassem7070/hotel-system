import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFirstRoomComponent } from './book-first-room.component';

describe('BookFirstRoomComponent', () => {
  let component: BookFirstRoomComponent;
  let fixture: ComponentFixture<BookFirstRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFirstRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFirstRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
