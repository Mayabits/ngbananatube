import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperapassComponent } from './recuperapass.component';

describe('RecuperapassComponent', () => {
  let component: RecuperapassComponent;
  let fixture: ComponentFixture<RecuperapassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperapassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperapassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
