import React from 'react';

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ErrorBoundary } from 'react-error-boundary';

import { CACHE_MAX_AGE, persister, queryClient } from '@/lib/react-query';

import { GlobalStyle, ThemePreferenceProvider } from './theme';

const ErrorFallback = () => {
  return <div>Oops, something went wrong</div>;
};

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <React.Suspense>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ maxAge: CACHE_MAX_AGE, persister }}
        >
          <GlobalStyle />
          <ThemePreferenceProvider>{children}</ThemePreferenceProvider>
        </PersistQueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
