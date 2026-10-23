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
              value={paymentMethod}
              onValueChange={(value) => {
                setField({
                  paymentMethod: value as TicketState['paymentMethod'],
                });
              }}
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
