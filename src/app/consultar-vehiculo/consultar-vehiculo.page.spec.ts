import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarVehiculoPage } from './consultar-vehiculo.page';

describe('ConsultarVehiculoPage', () => {
  let component: ConsultarVehiculoPage;
  let fixture: ComponentFixture<ConsultarVehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultarVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
