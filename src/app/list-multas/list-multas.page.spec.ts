import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMultasPage } from './list-multas.page';

describe('ListMultasPage', () => {
  let component: ListMultasPage;
  let fixture: ComponentFixture<ListMultasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListMultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
