import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // default 0
      cacheTime: 0, // default 5 minitue 1000 * 60 * 5
      retry: 1, // default 6
      retryDelay: 1000, // default 1000
    },
  },
});

const Query: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {/* <ReactQueryDevtools initialIsOpen={GLOBAL_IS_LOCAL} /> */}
  </QueryClientProvider>
);

export default Query;