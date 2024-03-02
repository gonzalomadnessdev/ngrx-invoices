import { createReducer, on } from "@ngrx/store";
import { initialState } from "./state";
import { addInvoice, deleteInvoices } from "./actions";

export const invoicesReducer = createReducer(
  initialState,
  on(addInvoice, (state, props) => {
    return { ...state, collection : [...state.collection, props.invoice ]}
  }),
  on(deleteInvoices, (state) => {
    return { ...state, collection : [] }
  })
);
