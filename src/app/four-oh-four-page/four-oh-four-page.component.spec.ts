import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOhFourPageComponent } from './four-oh-four-page.component';

describe('FourOhFourPageComponent', () => {
  let component: FourOhFourPageComponent;
  let fixture: ComponentFixture<FourOhFourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourOhFourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOhFourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
