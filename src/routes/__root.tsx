import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from '~/components/theme-provider';

export const Route = createRootRoute({
  component: RootComponent,
});

// oxlint-disable-next-line only-export-components
function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  );
}
