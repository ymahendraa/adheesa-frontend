import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisPasienComponent } from './regis-pasien.component';

describe('RegisPasienComponent', () => {
  let component: RegisPasienComponent;
  let fixture: ComponentFixture<RegisPasienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisPasienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
