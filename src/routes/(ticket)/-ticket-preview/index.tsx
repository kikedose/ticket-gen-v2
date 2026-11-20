import { EllipsisVertical, Minus, Plus, Trash } from 'lucide-react';
import FAB from './print-FAB';
import { Button } from '~/components/ui/button';
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from '~/components/ui/button-group';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { useTicketStore } from '~/stores/ticket-store';
import { formatMoney as money } from '~/lib/utils';
import {
  getDiscountAmount,
  getSubtotal,
  getTotal,
} from '~/stores/ticket-store-helpers';

export default function TicketPreview() {
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
    changeQuantity,
    removeItem,
  } = state;

  const subtotal = getSubtotal(order);

  return (
    <div className="light bg-background/90 text-foreground flex h-full flex-col gap-2 rounded-lg p-8 font-mono text-sm">
      {/* Handover details */}
      <div className="inline-flex">
        <div className="bg-foreground text-background inline-flex gap-2 p-1 font-bold uppercase">
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
      <ol className="border-y-foreground flex flex-1 flex-col overflow-y-auto border-b-2 border-solid py-4">
        {order?.map((item) => (
          <li
            className="group mb-1 grid grid-cols-9 items-center first:mt-auto"
            key={item.slug}
          >
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    size="icon-xs"
                    variant="default"
                    className="rounded-full opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-popup-open:opacity-100 pointer-coarse:opacity-100"
                  >
                    <EllipsisVertical />
                  </Button>
                }
              />
              <PopoverContent align="start" className="w-fit">
                <ButtonGroup>
                  <ButtonGroup>
                    <Button
                      variant="outline"
                      size="icon-xs"
                      onClick={() => changeQuantity(item.slug, 'plusOne')}
                    >
                      <Plus />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon-xs"
                      onClick={() => changeQuantity(item.slug, 'minusOne')}
                    >
                      <Minus />
                    </Button>
                  </ButtonGroup>

                  <ButtonGroupSeparator />

                  <ButtonGroup>
                    <Button
                      variant="destructive"
                      size="icon-xs"
                      onClick={() => removeItem(item.slug)}
                    >
                      <Trash />
                    </Button>
                  </ButtonGroup>
                </ButtonGroup>
              </PopoverContent>
            </Popover>

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
        {!isPaid && <li className="font-bold uppercase">(Unpaid)</li>}
      </ul>
    </div>
  );
}
