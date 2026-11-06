import type { Discount, OrderItem, TicketState } from './ticket-store-types';

export const getSubtotal = (order: OrderItem[]) =>
  order.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const getDiscountAmount = (subtotal: number, discount: Discount) => {
  const raw =
    discount.type === 'percent'
      ? (subtotal * discount.value) / 100
      : discount.value;

  return Math.round(Math.min(Math.max(raw, 0), subtotal));
};

export const getTotal = (state: TicketState) => {
  const subtotal = getSubtotal(state.order);

  return (
    subtotal - getDiscountAmount(subtotal, state.discount) + state.deliveryCost
  );
};
