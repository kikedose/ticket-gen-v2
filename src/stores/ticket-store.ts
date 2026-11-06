import { create } from 'zustand';
import type { TicketState, TicketStore } from './ticket-store-types';

const initialState: TicketState = {
  handout: 'take-away',
  isDelayed: false,
  name: '',
  phone: '',
  address: '',
  dispatchTime: '',
  paymentMethod: 'transfer',
  discount: { type: 'fixed', value: 0 },
  deliveryCost: 0,
  order: [],
};

export const useTicketStore = create<TicketStore>((set) => ({
  ...initialState,
  setField: (fields) => set((state) => ({ ...state, ...fields })),

  addItem: (newItem) =>
    set((state) => {
      const exists = state.order.some((item) => item.slug === newItem.slug);

      if (exists) {
        return {
          order: state.order.map((item) =>
            item.slug === newItem.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        order: [
          ...state.order,
          {
            slug: newItem.slug,
            name: newItem.name,
            quantity: 1,
            price: newItem.price,
          },
        ],
      };
    }),

  removeItem: (slug: string) =>
    set((state) => ({
      order: state.order.filter((i) => i.slug !== slug),
    })),

  reset: () => set(initialState),
}));
