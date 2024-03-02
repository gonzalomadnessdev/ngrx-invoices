import { Injectable } from '@angular/core';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { Invoice } from '../models/invoice';
import { addInvoice, deleteInvoices } from '../store/invoices/actions';
import { map, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(
    private store: Store<AppState>,
  ) { }

  add(invoice : Invoice){
    this.store.dispatch(addInvoice({ invoice }))
  }

  delete(){
    this.store.dispatch(deleteInvoices())
  }

  getAll(){
    return this.store.pipe(select('invoices')).pipe(map(invoicesState => invoicesState.collection))
  }

  get(id: number){
    return this.getAll().pipe(map(invoices => invoices.find(i => i.id == id)))
  }

  sumTotal(){
    return this.getAll().pipe(map(invoices => invoices.reduce((acc, curr) => acc + curr.total, 0)))
  }

  sumTax(){
    return this.getAll().pipe(map(invoices => invoices.reduce((acc, curr) => acc + curr.tax, 0)))
  }
}
