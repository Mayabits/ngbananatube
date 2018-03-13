import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectionComponent } from './insection.component';

describe('InsectionComponent', () => {
  let component: InsectionComponent;
  let fixture: ComponentFixture<InsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
