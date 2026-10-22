import { create } from 'zustand';

const useTicketStore = create((set) => ({
  count: 0,
}));
