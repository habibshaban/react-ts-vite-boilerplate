/* eslint-disable react/display-name */
import { Suspense } from "react";
import LoadingScreen from "./loading-screen";

const Loadable =
  (Component: React.LazyExoticComponent<() => JSX.Element>, fallback = true) =>
  (props: any) => {
    return (
      <Suspense fallback={fallback && <LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };

Loadable.displayName = "MyComponent";

export default Loadable;
