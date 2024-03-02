import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesSearchComponent } from './invoices-search.component';

describe('InvoicesSearchComponent', () => {
  let component: InvoicesSearchComponent;
  let fixture: ComponentFixture<InvoicesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesSearchComponent]
    });
    fixture = TestBed.createComponent(InvoicesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
