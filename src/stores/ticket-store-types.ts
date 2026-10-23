export type Handout = 'delivery' | 'take-away';

export type TicketState = {
  handout: Handout;
  isDelayed: boolean;
  name: string;
  phone: string;
  address: string;
  dispatchTime: string;
  paymentMethod: string;
};

export type TicketActions = {
  setField: (fields: Partial<TicketState>) => void;
  reset: () => void;
};

export type TicketStore = TicketState & TicketActions;
