import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { DefaultOptions, QueryClient } from '@tanstack/react-query';

export const CACHE_MAX_AGE = 1000 * 60 * 60 * 12; // 12 hours

export const persister = createSyncStoragePersister({
  storage: localStorage,
});

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});
