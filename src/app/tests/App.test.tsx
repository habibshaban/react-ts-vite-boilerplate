import { render } from "@testing-library/react";
import App from "../app";

describe("<App />", () => {
  it("should run without crash", () => {
    render(<App />);
    expect(/My Boilerplate .../i).toBeDefined();
  });
});
