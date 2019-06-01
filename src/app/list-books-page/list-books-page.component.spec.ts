import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksPageComponent } from './list-books-page.component';

describe('ListBooksPageComponent', () => {
  let component: ListBooksPageComponent;
  let fixture: ComponentFixture<ListBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
