import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLabComponent } from './data-lab.component';

describe('DataLabComponent', () => {
  let component: DataLabComponent;
  let fixture: ComponentFixture<DataLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
