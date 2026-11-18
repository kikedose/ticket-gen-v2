import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from '~/components/theme-provider';
import { SidebarProvider } from '~/components/ui/sidebar';
import { AppSidebar } from '~/components/app-sidebar';

export const Route = createRootRoute({
  component: RootComponent,
});

// oxlint-disable-next-line only-export-components
function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </ThemeProvider>
  );
}
