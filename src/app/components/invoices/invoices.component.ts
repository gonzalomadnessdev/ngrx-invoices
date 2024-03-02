import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';
import { Invoice } from 'src/app/models/invoice';
import { Item } from 'src/app/models/item';
import { InvoicesService } from 'src/app/services/invoices.service';
import { AppState } from 'src/app/store';
import { addInvoice } from 'src/app/store/invoices/actions';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {

  items : Item[] = [];
  invoices : Invoice[] = [];

  constructor(
    private invoicesService : InvoicesService
  ) {
    this.getInvoices();
  }

  getInvoices(){
    this.invoicesService.getAll().subscribe((invoices)=>{
      this.invoices = invoices;
    })
  }

}
