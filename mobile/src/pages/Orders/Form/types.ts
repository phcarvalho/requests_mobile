export interface OrderProduct {
  id: string;
  name: string;
  price: string;
  qty: string;
  percDiscount: string;
  total: string;
  unity: string;
}

export interface OrderValues {
  deliveryDate: Date;
  creationDate: Date;
  paymentType: string;
  paymentCondition: string;
  client: string;
  products: OrderProduct[];
}
