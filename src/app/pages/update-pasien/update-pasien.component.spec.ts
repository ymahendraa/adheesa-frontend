import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasienComponent } from './update-pasien.component';

describe('UpdatePasienComponent', () => {
  let component: UpdatePasienComponent;
  let fixture: ComponentFixture<UpdatePasienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
