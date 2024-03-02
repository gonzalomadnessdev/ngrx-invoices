import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { invoicesReducer } from './store/invoices/reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './components/items/items.component';
import { InvoicesSearchComponent } from './components/invoices-search/invoices-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    ItemsComponent,
    InvoicesSearchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ invoices: invoicesReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
