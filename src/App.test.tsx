import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("should render home page", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("home-page")).toBeInTheDocument();
});
