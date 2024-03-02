import { Invoice } from "src/app/models/invoice";

export interface InvoicesState{
  collection : Invoice[]
}

export const initialState : InvoicesState = {
  collection : []
}
