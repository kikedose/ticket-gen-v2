export interface OrderItem {
  slug: string;
  name: string;
  quantity: number;
  price: number;
}

export type DiscountType = 'fixed' | 'percent';

export interface Discount {
  type: DiscountType;
  value: number;
}

export type Handout = 'delivery' | 'take-away';

export type TicketState = {
  handout: Handout;
  isDelayed: boolean;
  name: string;
  phone: string;
  address: string;
  dispatchTime: string;
  paymentMethod: string;
  isPaid: boolean;
  discount: Discount;
  deliveryCost: number;
  order: OrderItem[];
};

export type TicketActions = {
  setField: (fields: Partial<TicketState>) => void;
  addItem: (item: Omit<OrderItem, 'quantity'>) => void; // Link to Product Type
  removeItem: (slug: string) => void;
  changeQuantity: (slug: string, type: 'plusOne' | 'minusOne') => void;
  reset: () => void;
};

export type TicketStore = TicketState & TicketActions;
