import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnentComponent } from './comnent.component';

describe('ComnentComponent', () => {
  let component: ComnentComponent;
  let fixture: ComponentFixture<ComnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
