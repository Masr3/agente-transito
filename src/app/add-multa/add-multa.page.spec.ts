import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMultaPage } from './add-multa.page';

describe('AddMultaPage', () => {
  let component: AddMultaPage;
  let fixture: ComponentFixture<AddMultaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
