import {Product} from "./product";

export class Order {
  id: number;
  customerId: number;
  orderDate: Date;
  deliveryDate: Date;
  deliveryAddress: string;
  products: Product[];
  totalPrice: number;
}

