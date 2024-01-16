import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { persister, queryClient } from "@/lib/react-query";
import { GlobalStyle } from "./theme/global-styles";
import { ThemePreferenceProvider } from "./theme/theme";

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
          persistOptions={{ persister }}
        >
          <GlobalStyle />
          <ThemePreferenceProvider>{children}</ThemePreferenceProvider>
        </PersistQueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};