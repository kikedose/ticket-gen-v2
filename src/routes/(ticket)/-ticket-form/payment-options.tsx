import { useShallow } from 'zustand/react/shallow';
import { ButtonGroup } from '~/components/ui/button-group';
import { Checkbox } from '~/components/ui/checkbox';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import type { DiscountType, TicketState } from '~/stores/ticket-store-types';
import { useTicketStore } from '~/stores/ticket-store';
import { PAYMENT_METHODS } from '../-payment-methods';

const DISCOUNT_TYPES: { label: string; value: DiscountType }[] = [
  { label: '$', value: 'fixed' },
  { label: '%', value: 'percent' },
];

export default function PaymentOptions() {
  const { paymentMethod, discount, deliveryCost, isPaid, handout } =
    useTicketStore(
      useShallow((s) => ({
        paymentMethod: s.paymentMethod,
        discount: s.discount,
        deliveryCost: s.deliveryCost,
        isPaid: s.isPaid,
        handout: s.handout,
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
    <div className="bg-popover flex-1 rounded-lg p-4">
      <FieldSet>
        <FieldLegend className="text-muted-foreground">
          Payment Options
        </FieldLegend>
        <FieldSeparator />

        <FieldGroup>
          <Field>
            <FieldLabel>Payment Method</FieldLabel>

            <Select
              items={PAYMENT_METHODS}
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
                {PAYMENT_METHODS.map(({ value, label, icon: Icon }) => (
                  <SelectItem key={value} value={value}>
                    <Icon size={12} />
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field className="pt-2" orientation="horizontal">
            <Checkbox
              id="delayed"
              name="delayed"
              checked={isPaid}
              onCheckedChange={(checked) =>
                setField({
                  isPaid: !!checked,
                })
              }
            />
            <FieldLabel htmlFor="delayed" className="pl-1">
              Paid
            </FieldLabel>
          </Field>
        </FieldGroup>

        <FieldSeparator />

        <FieldGroup className="grid grid-cols-2">
          <Field className="col-span-1">
            <FieldLabel>Discount </FieldLabel>
            <ButtonGroup>
              <Select
                items={DISCOUNT_TYPES}
                value={discount.type}
                onValueChange={handleDiscountTypeChange}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent alignItemWithTrigger>
                  <SelectGroup>
                    {DISCOUNT_TYPES.map(({ label, value }) => (
                      <SelectItem key={value} value={value}>
                        <span className="w-[2ch]">{label}</span>
                        <span className="text-muted-foreground capitalize">
                          {value}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Input
                name="discount"
                autoComplete="off"
                inputMode="numeric"
                value={discount.value || ''}
                onChange={({ target }) =>
                  handleDiscountValueChange(target.value)
                }
              />
            </ButtonGroup>
          </Field>

          <Field className="col-span-1" data-disabled={handout === 'take-away'}>
            <FieldLabel>Delivery Cost</FieldLabel>
            <div className="relative flex items-center">
              {/* Visual Prefix */}
              <span className="text-muted-foreground pointer-events-none absolute left-3 select-none">
                $
              </span>
              <Input
                name="deliveryCost"
                autoComplete="off"
                inputMode="numeric"
                className="pl-7"
                value={deliveryCost || ''}
                disabled={handout !== 'delivery'}
                onChange={({ target }) => {
                  if (!/^\d*$/.test(target.value)) return;
                  setField({ deliveryCost: Number(target.value) });
                }}
              />
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
