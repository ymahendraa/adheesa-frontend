import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisLaboratoriumComponent } from './regis-laboratorium.component';

describe('RegisLaboratoriumComponent', () => {
  let component: RegisLaboratoriumComponent;
  let fixture: ComponentFixture<RegisLaboratoriumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisLaboratoriumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisLaboratoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
