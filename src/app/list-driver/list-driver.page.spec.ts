import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDriverPage } from './list-driver.page';

describe('ListDriverPage', () => {
  let component: ListDriverPage;
  let fixture: ComponentFixture<ListDriverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
