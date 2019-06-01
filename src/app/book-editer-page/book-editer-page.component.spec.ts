import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditerPageComponent } from './book-editer-page.component';

describe('BookEditerPageComponent', () => {
  let component: BookEditerPageComponent;
  let fixture: ComponentFixture<BookEditerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
