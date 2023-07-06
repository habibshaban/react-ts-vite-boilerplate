import { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/error-page/error-page";

const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={() => <ErrorPage />}>
        <div className=""></div>
      </ErrorBoundary>
    </StrictMode>
  );
};
export default App;
