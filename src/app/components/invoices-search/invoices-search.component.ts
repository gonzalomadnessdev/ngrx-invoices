import { Component } from '@angular/core';
import { InvoicesService } from 'src/app/services/invoices.service';

@Component({
  selector: 'app-invoices-search',
  templateUrl: './invoices-search.component.html',
  styleUrls: ['./invoices-search.component.css']
})
export class InvoicesSearchComponent {
  id: string = "";

  /**
   *
   */
  constructor(
    private invoicesService: InvoicesService
  ) {

  }

  search() {
    this.invoicesService.get(Number(this.id))
    .subscribe((invoice) => alert(JSON.stringify(invoice) ?? "not found."))
    .unsubscribe();
  }

}
