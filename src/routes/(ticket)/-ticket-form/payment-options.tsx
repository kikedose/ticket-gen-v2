import { CircleDollarSign, CirclePercent } from 'lucide-react';
import type { ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  Field,
  // FieldContent,
  // FieldDescription,
  // FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  // FieldTitle,
} from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  // SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import type { DiscountType, TicketState } from '~/stores/ticket-store-types';
import { useTicketStore } from '~/stores/ticket-store';
import { PAYMENT_METHODS } from '../-payment-methods';
// import { formatMoney as money } from '~/lib/utils';

const paymentItems = PAYMENT_METHODS.map((method) => ({
  value: method.value,
  label: (
    // Tells the Select component to render this node insted of the raw 'value'.
    // Mimics the visual style of the dropdown list.
    // This is hardcoded and might change if BaseUI does.
    <div className="inline-flex items-center gap-2">
      <method.icon size={12} />
      {method.tag}
    </div>
  ),
}));

const DISCOUNT_TYPES: { label: ReactNode; value: DiscountType }[] = [
  {
    label: (
      <>
        <CircleDollarSign size={12} />
        Fixed
      </>
    ),
    value: 'fixed',
  },
  {
    label: (
      <>
        <CirclePercent size={12} />
        Percent
      </>
    ),
    value: 'percent',
  },
];

export default function PaymentOptions() {
  const { paymentMethod, discount, deliveryCost } = useTicketStore(
    useShallow((s) => ({
      paymentMethod: s.paymentMethod,
      discount: s.discount,
      deliveryCost: s.deliveryCost,
    })),
  );

  const setField = useTicketStore((s) => s.setField);

  const handleDiscountTypeChange = (type: DiscountType | null) => {
    if (!type) return;

    setField({ discount: { type, value: 0 } });
  };

  const handleDiscountValueChange = (raw: string) => {
    if (!/^\d*$/.test(raw)) return;

    const n = Number(raw);

    setField({
      discount: {
        ...discount,
        value: discount.type === 'percent' ? Math.min(n, 100) : n,
      },
    });
  };

  return (
    <>
      <FieldSet>
        <FieldLegend>Payment Options</FieldLegend>
        <FieldSeparator />

        <FieldGroup className="grid grid-cols-4">
          <Field className="col-span-3">
            <FieldLabel>Payment Method</FieldLabel>

            <Select
              items={paymentItems}
              value={paymentMethod}
              onValueChange={(value) =>
                setField({
                  paymentMethod: value as TicketState['paymentMethod'],
                })
              }
            >
              <SelectTrigger className="min-w-24">
                <SelectValue placeholder="Select a payment method" />
              </SelectTrigger>

              <SelectContent alignItemWithTrigger>
                {PAYMENT_METHODS.map((method) => (
                  <SelectItem key={method.value} value={method.value}>
                    <method.icon size={12} />
                    {method.tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>

        <FieldGroup className="grid grid-cols-4 items-center">
          <Field className="col-span-1">
            <FieldLabel>Discount </FieldLabel>
            <Select
              items={DISCOUNT_TYPES}
              value={discount.type}
              onValueChange={handleDiscountTypeChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent alignItemWithTrigger>
                {DISCOUNT_TYPES.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field className="col-span-2">
            <FieldLabel>Amount</FieldLabel>
            <Input
              name="discount"
              autoComplete="off"
              inputMode="numeric"
              value={discount.value || ''}
              onChange={({ target }) => handleDiscountValueChange(target.value)}
            />
          </Field>

          <Field className="col-span-2">
            <FieldLabel>Delivery Cost</FieldLabel>
            <Input
              name="deliveryCost"
              autoComplete="off"
              inputMode="numeric"
              value={deliveryCost || ''}
              onChange={({ target }) => {
                if (!/^\d*$/.test(target.value)) return;
                setField({ deliveryCost: Number(target.value) });
              }}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </>
  );
}
