import { Item } from "./item";

export interface IInvoice {
  total: number,
  subtotal: number,
  tax: number,
  items: { description: string, price: number, units: number }[]
}

export class Invoice implements IInvoice {

  private static autoIncrement = 0;

  public readonly id: number;
  public readonly total: number = 0;
  public readonly subtotal: number = 0;
  public readonly tax: number;
  public readonly items: { description: string, price: number, units: number }[];

  /**
   *
   */
  constructor(
    tax : number, ... items : Item[]
  ) {
    this.tax = tax;
    this.items = items;
    this.id = ++Invoice.autoIncrement;

    for (const item of this.items){
      this.subtotal =+ (item.price * item.units)
    }
    let rawResult = this.subtotal * (1 - (this.tax / 100));
    this.total = Math.round(rawResult * 100) / 100;
  }

}
