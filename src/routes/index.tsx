import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

// oxlint-disable-next-line only-export-components
function RouteComponent() {
  return <div>Hello "/"!</div>;
}
