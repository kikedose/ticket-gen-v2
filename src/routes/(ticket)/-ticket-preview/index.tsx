import { useShallow } from 'zustand/react/shallow';
import { Trash } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { useTicketStore } from '~/stores/ticket-store';
import { formatMoney as money } from '~/lib/utils';
import {
  getDiscountAmount,
  getSubtotal,
  getTotal,
} from '~/stores/ticket-store-helpers';

export default function TicketPreview() {
  const {
    handout,
    isDelayed,
    name,
    phone,
    address,
    dispatchTime,
    paymentMethod,
    order,
    discount,
    deliveryCost,
    state,
  } = useTicketStore(
    useShallow((s) => ({
      handout: s.handout,
      isDelayed: s.isDelayed,
      name: s.name,
      phone: s.phone,
      address: s.address,
      dispatchTime: s.dispatchTime,
      paymentMethod: s.paymentMethod,
      order: s.order,
      discount: s.discount,
      deliveryCost: s.deliveryCost,
      state: s,
    })),
  );

  const subtotal = getSubtotal(order);

  return (
    <div className="bg-foreground/90 text-background flex h-full flex-col gap-2 rounded-lg p-8 font-mono text-sm">
      {/* Handover details */}
      <div className="inline-flex">
        <div className="bg-background text-foreground inline-flex gap-2 p-1 font-bold uppercase">
          <span>{handout}</span>
          {isDelayed && <span>{dispatchTime}</span>}
        </div>
        <div className="ml-auto text-right">#T-4567</div>
      </div>

      {/* Customer details */}
      <ul>
        <li>{name}</li>
        <li className="font-bold">{address}</li>
        <li>{phone}</li>
      </ul>

      {/* Order details */}
      <ol className="border-y-background flex flex-1 flex-col overflow-y-scroll border-b-2 border-solid py-4">
        {order?.map((item) => (
          <li className="mb-1 grid grid-cols-9 first:mt-auto" key={item.slug}>
            <span className="col-span-1 grid place-items-center">
              <Button size="xs" variant="destructive">
                <Trash />
              </Button>
            </span>

            <span className="col-span-1">{item.quantity}</span>

            <span className="col-span-4">{item.name}</span>

            <span className="col-span-3 text-right">
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

        <li>
          Total: <span className="font-bold">{money(getTotal(state))}</span>
        </li>
        <li className="uppercase">{`<${paymentMethod}>`}</li>
      </ul>
    </div>
  );
}
