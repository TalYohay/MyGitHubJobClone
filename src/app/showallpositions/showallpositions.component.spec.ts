import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallpositionsComponent } from './showallpositions.component';

describe('ShowallpositionsComponent', () => {
  let component: ShowallpositionsComponent;
  let fixture: ComponentFixture<ShowallpositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallpositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
