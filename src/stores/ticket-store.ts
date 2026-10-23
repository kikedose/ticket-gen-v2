import { create } from 'zustand';
import type { TicketState, TicketStore } from './ticket-store-types';

const initialState: TicketState = {
  handout: 'take-away',
  isDelayed: false,
  name: '',
  phone: '',
  address: '',
  dispatchTime: '',
  paymentMethod: '',
};

export const useTicketStore = create<TicketStore>((set) => ({
  ...initialState,
  setField: (fields) => set((state) => ({ ...state, ...fields })),
  reset: () => set(initialState),
}));
