"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.log(error);
      //   toast.error(`API Error: ${error message}`);
    },
  }),
});

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(queryClient);

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
