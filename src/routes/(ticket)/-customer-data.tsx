import { useState } from 'react';
import { Checkbox } from '~/components/ui/checkbox';
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
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { getTime } from '~/lib/utils';

export default function CustomerData() {
  const [handout, setHandout] = useState('take-away');
  const [isDelayed, setIsDelayed] = useState(false);

  const [time, setTime] = useState(() => {
    // rounds up to the next 10 min (600000ms) mark
    // 20:03 -> 20:10
    const t = getTime((Math.floor(Date.now() / 600000) + 1) * 600000);
    return t > '00:00' && t < '19:30' ? '19:30' : t;
  });

  return (
    <>
      <FieldSet>
        <FieldLegend>Customer Data</FieldLegend>
        <FieldSeparator />

        <FieldGroup>
          <Field>
            <FieldLabel>Handout</FieldLabel>
            <RadioGroup
              value={handout}
              onValueChange={(value) => setHandout(value)}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="take-away" id="take-away" />
                <Label htmlFor="take-away">Take-Away</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery">Delivery</Label>
              </div>
            </RadioGroup>
          </Field>

          <Field className="col-span-1" orientation="horizontal">
            <Checkbox
              id="delayed"
              name="delayed"
              checked={isDelayed}
              onCheckedChange={(checked) => setIsDelayed(!!checked)}
            />
            <FieldLabel htmlFor="delayed" className="pl-1">
              Delayed
            </FieldLabel>
          </Field>
        </FieldGroup>

        <FieldSeparator />

        <FieldGroup className="grid grid-cols-4 items-center">
          <Field className="col-span-3">
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" autoComplete="off" />
          </Field>

          <Field className="col-span-1">
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input id="phone" autoComplete="off" />
          </Field>

          <Field className="col-span-4" data-disabled={handout === 'take-away'}>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input
              id="address"
              autoComplete="off"
              disabled={handout === 'take-away'}
            />
          </Field>

          <Field className="col-span-1" data-disabled={!isDelayed}>
            <FieldLabel htmlFor="address">Dispatch Time</FieldLabel>
            <Input
              disabled={!isDelayed}
              type="time"
              id="time"
              step={600}
              min="19:30"
              max="00:00"
              autoComplete="off"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </>
  );
}
