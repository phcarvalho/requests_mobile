export interface OrderProduct {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface OrderValues {
  deliveryDate: Date;
  creationDate: Date;
  paymentType: string;
  paymentCondition: string;
  client: string;
  products: OrderProduct[];
}
