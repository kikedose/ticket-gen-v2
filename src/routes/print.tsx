import { createFileRoute } from '@tanstack/react-router';
import { useTicketStore } from '~/stores/ticket-store';
import { formatMoney as money } from '~/lib/utils';
import {
  getDiscountAmount,
  getSubtotal,
  getTotal,
} from '~/stores/ticket-store-helpers';

export const Route = createFileRoute('/print')({
  component: RouteComponent,
});

function RouteComponent() {
  const state = useTicketStore();
  const {
    handout,
    isDelayed,
    isPaid,
    name,
    phone,
    address,
    dispatchTime,
    paymentMethod,
    order,
    discount,
    deliveryCost,
  } = state;

  const subtotal = getSubtotal(order);

  return (
    <div className="mx-auto flex w-[80mm] flex-col gap-2 bg-white p-[4mm] font-mono text-[12px] leading-tight text-black [print-color-adjust:exact]">
      {/* Handover details */}
      <div className="flex items-start justify-between">
        <div className="inline-flex gap-2 bg-black px-1.5 py-1 font-bold text-white uppercase">
          <span>{handout}</span>
          {isDelayed && <span>{dispatchTime}</span>}
        </div>
        <div className="text-right">#T-4567</div>
      </div>

      {/* Customer details */}
      <ul>
        <li>{name}</li>
        <li className="font-bold">{address}</li>
        <li>{phone}</li>
      </ul>

      {/* Order details */}
      <ol className="flex flex-col gap-1 border-y-2 border-dashed border-black py-2">
        {order?.map((item) => (
          <li className="grid grid-cols-[3ch_1fr_auto] gap-x-2" key={item.slug}>
            <span>{item.quantity}</span>
            <span className="break-words">{item.name}</span>
            <span className="text-right">
              {money(item.price * item.quantity)}
            </span>
          </li>
        ))}
      </ol>

      {/* Total */}
      <ul className="text-right">
        <li>Subtotal: {money(subtotal)}</li>

        {!!discount.value && (
          <li>Discount: - {money(getDiscountAmount(subtotal, discount))}</li>
        )}

        {handout === 'delivery' && <li>Delivery: + {money(deliveryCost)}</li>}

        <li className="text-sm">
          Total: <span className="font-bold">{money(getTotal(state))}</span>
        </li>
        <li className="uppercase">{`<${paymentMethod}>`}</li>
        {!isPaid && <li className="font-bold uppercase">(Unpaid)</li>}
      </ul>
    </div>
  );
}
