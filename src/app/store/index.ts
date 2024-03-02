import { createSelector } from "@ngrx/store";
import { InvoicesState } from "./invoices/state";

export interface AppState {
  invoices : InvoicesState
}

export const selectFeature = (state: AppState) => state.invoices;

export const selectInvoicesCollection = createSelector(
  selectFeature,
  (state: InvoicesState) => state.collection
);
