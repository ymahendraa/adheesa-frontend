import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsulPasienComponent } from './konsul-pasien.component';

describe('KonsulPasienComponent', () => {
  let component: KonsulPasienComponent;
  let fixture: ComponentFixture<KonsulPasienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonsulPasienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsulPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
