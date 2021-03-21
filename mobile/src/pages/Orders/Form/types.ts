export interface OrderProduct {
  id: string;
  name: string;
  price: string;
  qty: string;
}

export interface OrderValues {
  deliveryDate: Date;
  paymentType: string;
  paymentCondition: string;
  client: string;
  products: OrderProduct[];
}
