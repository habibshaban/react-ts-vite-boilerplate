import { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/error-page/error-page";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { persister, queryClient, toastOptions } from "./config/config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={() => <ErrorPage />}>
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
          <div className=""></div>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
          <Toaster toastOptions={toastOptions} />
        </PersistQueryClientProvider>
      </ErrorBoundary>
    </StrictMode>
  );
};
export default App;
