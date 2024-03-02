import { createAction, props } from "@ngrx/store";
import { Invoice } from "src/app/models/invoice";

export const addInvoice = createAction('Add Invoice', props<{ invoice : Invoice }>())
export const deleteInvoices = createAction('Delete Invoices')
