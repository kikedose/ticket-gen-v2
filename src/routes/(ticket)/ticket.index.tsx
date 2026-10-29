import { createFileRoute } from '@tanstack/react-router';
import TicketPreview from './-ticket-preview';
import TicketForm from './-ticket-form';

export const Route = createFileRoute('/(ticket)/ticket/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex h-svh w-full flex-row">
      <section className="w-2/3 py-4 pl-4">
        <TicketForm />
      </section>

      <section className="h-full w-1/3 p-4">
        <TicketPreview />
      </section>
    </main>
  );
}
