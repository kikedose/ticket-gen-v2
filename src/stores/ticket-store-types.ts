export type Handout = 'delivery' | 'take-away';

export interface OrderItem {
  slug: string;
  name: string;
  quantity: number;
  price: number;
}

export type TicketState = {
  handout: Handout;
  isDelayed: boolean;
  name: string;
  phone: string;
  address: string;
  dispatchTime: string;
  paymentMethod: string;
  order: OrderItem[];
};

export type TicketActions = {
  setField: (fields: Partial<TicketState>) => void;
  addItem: (item: Omit<OrderItem, 'quantity'>) => void; // Link to Product Tyoe
  removeItem: (slug: string) => void;
  reset: () => void;
};

export type TicketStore = TicketState & TicketActions;
