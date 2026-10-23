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
// import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  // SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import type { TicketState } from '~/stores/ticket-store-types';
import { useTicketStore } from '~/stores/ticket-store';
import { PAYMENT_METHODS } from './-payment-methods';

const paymentItems = PAYMENT_METHODS.map((method) => ({
  value: method.value,
  label: (
    // Tells the Select component to render this node insted of the raw 'value'.
    // Mimics the visual style of the list of options.
    // This is hardcoded and might change if BaseUI does.
    <div className="inline-flex gap-2">
      <method.icon size={12} />
      {method.tag}
    </div>
  ),
}));

export default function PaymentOptions() {
  const { paymentMethod } = useTicketStore(
    useShallow((s) => ({
      paymentMethod: s.paymentMethod,
    })),
  );
  const setField = useTicketStore((s) => s.setField);

  return (
    <>
      <FieldSet>
        <FieldLegend>Payment Options</FieldLegend>
        <FieldSeparator />

        <FieldGroup>
          <Field>
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
      </FieldSet>
    </>
  );
}
