import { useShallow } from 'zustand/react/shallow';
import { useTicketStore } from '~/stores/ticket-store';
import { formatMoney as money } from '~/lib/utils';

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
    })),
  );

  return (
    <div className="flex w-[72mm] flex-col gap-4 font-mono">
      {/* Ticket No */}
      <div className="text-right">#T-4567</div>

      {/* Handover details */}
      <ul>
        <li className="uppercase">{handout}</li>
        {isDelayed && (
          <li>
            Entrega <span className="font-bold">{dispatchTime}</span>
          </li>
        )}
      </ul>

      {/* Customer details */}
      <ul>
        <li>{name}</li>
        <li className="font-bold">{address}</li>
        <li>{phone}</li>
      </ul>

      {/* Order details */}
      <ol>
        {order?.map((item) => (
          <li className="grid grid-cols-6 py-2">
            <div className="col-span-1">{item.quantity}</div>
            <div className="col-span-3">{item.name}</div>
            <div className="col-span-2 text-right">
              {money(item.price * item.quantity)}
            </div>
          </li>
        ))}
      </ol>

      {/* Total */}
      <ul className="text-right">
        <li>Subtotal: $ 231,000</li>
        <li>Descuento: - $ 15,000</li>
        <li>Delivery: $ 3,500</li>
        <br />
        <li>
          Total: <span className="font-bold">$ 219,500</span>
        </li>
        <br />
        <li className="capitalize">{paymentMethod}</li>
      </ul>

      <div>05/ABR/2022 19:30</div>
    </div>
  );
}
