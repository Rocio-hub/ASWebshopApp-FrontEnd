import {Product} from "./product";

export class Order {
  id: number;
  orderDate: Date;
  deliveryDate: Date;
  deliveryAddress: string;
  listOfProducts: Product[];
  totalPrice: number;
}
