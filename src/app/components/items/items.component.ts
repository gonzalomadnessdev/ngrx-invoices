import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Invoice } from 'src/app/models/invoice';
import { Item } from 'src/app/models/item';
import { InvoicesService } from 'src/app/services/invoices.service';
import { AppState } from 'src/app/store';
import { addInvoice } from 'src/app/store/invoices/actions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items : Item[] = [];
  form : FormGroup;

  constructor(
    private invoicesService : InvoicesService,
    private fb : FormBuilder
  ) {
    this.form = this.fb.group({
      description : [''],
      price : [''],
      units : [''],
    })
  }

  createItem(){
    let item = new Item(
      this.form.get('description')?.value,
      this.form.get('price')?.value,
      this.form.get('units')?.value,
    )

    this.items.push(item);
  }

  saveInvoice(){
    let tax = 5;
    let invoice = new Invoice(tax, ...this.items);

    this.invoicesService.add(invoice);

    this.items = [];
  }
}
