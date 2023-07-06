import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { compress, decompress } from 'lz-string';
import { DefaultToastOptions } from 'react-hot-toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // 1 min
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export const persister = createSyncStoragePersister({
  key: `${import.meta.env.VITE_PREFIX_CACHE_KEY}_RQ_CACHE`,
  storage: window.localStorage,
  serialize: (data) => compress(JSON.stringify(data)),
  deserialize: (data) => {
    const decompressData = decompress(data) as string;
    return JSON.parse(decompressData);
  },
});

export const toastOptions: DefaultToastOptions = {
  position: 'top-right',
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
};
