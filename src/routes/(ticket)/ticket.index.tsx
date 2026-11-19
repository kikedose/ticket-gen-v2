import { createFileRoute } from '@tanstack/react-router';
import TicketPreview from './-ticket-preview';
import TicketForm from './-ticket-form';

export const Route = createFileRoute('/(ticket)/ticket/')({
  component: RouteComponent,
});

// oxlint-disable-next-line only-export-components
function RouteComponent() {
  return (
    <div className="flex h-dvh w-full flex-row gap-4 p-4">
      <section className="h-full w-2/3">
        <TicketForm />
      </section>

      <section className="h-full w-1/3">
        <TicketPreview />
      </section>
    </div>
  );
}
