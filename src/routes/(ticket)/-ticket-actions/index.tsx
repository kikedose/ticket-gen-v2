import { useNavigate } from '@tanstack/react-router';
import { ChefHat, Printer, SquarePen, TrashOff } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from '~/components/ui/button-group';

export default function TicketActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-popover rounded-lg p-4">
      <ButtonGroup className="float-right">
        <ButtonGroup>
          <Button onClick={() => null} size="lg" variant="ghost">
            Add Notes
            <SquarePen data-icon="inline-end" />
          </Button>

          <ButtonGroupSeparator />

          <Button onClick={() => null} size="lg" variant="ghost">
            Add Custom Item
            <ChefHat data-icon="inline-end" />
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button onClick={() => null} size="lg" variant="secondary">
            Clear Ticket
            <TrashOff data-icon="inline-end" />
          </Button>

          <Button onClick={() => navigate({ to: '/print' })} size="lg">
            Print Ticket
            <Printer data-icon="inline-end" />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
}
