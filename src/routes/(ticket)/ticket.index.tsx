import { createFileRoute } from '@tanstack/react-router';
import TicketPreview from './-ticket-preview';
import TicketForm from './-ticket-form';
import TicketActions from './-ticket-actions';

export const Route = createFileRoute('/(ticket)/ticket/')({
  component: RouteComponent,
});

// oxlint-disable-next-line only-export-components
function RouteComponent() {
  return (
    <main className="flex h-svh w-full flex-row gap-4 p-4">
      <section className="flex h-full w-2/3 flex-col gap-4">
        <TicketForm />
        <TicketActions />
      </section>

      <section className="h-full w-1/3">
        <TicketPreview />
      </section>
    </main>
  );
}
