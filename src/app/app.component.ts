import { Component } from '@angular/core';
import { InvoicesService } from './services/invoices.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sumTotal$ : Observable<number>;
  public sumTax$ : Observable<number>;

  constructor(
    private invoicesService : InvoicesService
  ) {
    this.sumTotal$ = invoicesService.sumTotal();
    this.sumTax$ = invoicesService.sumTax();
  }

  clear(){
    this.invoicesService.delete();
  }


}
