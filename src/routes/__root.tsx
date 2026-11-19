import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from '~/components/theme-provider';
import { SidebarProvider } from '~/components/ui/sidebar';
import { NavSidebar } from '~/components/navigation';

export const Route = createRootRoute({
  component: RootComponent,
});

// oxlint-disable-next-line only-export-components
function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false}>
        <NavSidebar />
        <Outlet />
      </SidebarProvider>
    </ThemeProvider>
  );
}
