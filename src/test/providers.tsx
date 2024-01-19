import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { ThemePreferenceProvider } from '@/providers/theme/theme';

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

export const providerWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = createTestQueryClient();

  return (
    <ThemePreferenceProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemePreferenceProvider>
  );
};

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui, { wrapper: providerWrapper });
};
