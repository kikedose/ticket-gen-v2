import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(order)/order/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex h-svh w-full flex-row">
      <div className="h-full w-2/3 border border-solid border-red-500 py-4 pl-4">
        <div className="grid h-full w-full items-center rounded-2xl border border-solid border-white">
          <p>ORDER FORM</p>
        </div>
      </div>

      <div className="h-full w-1/3 border border-solid border-red-500 p-4">
        <div className="grid h-full w-full items-center rounded-2xl border border-solid border-white">
          <p>TICKET PREVIEW</p>
        </div>
      </div>
    </main>
  );
}
