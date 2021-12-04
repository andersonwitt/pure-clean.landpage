import { render } from "@testing-library/react";
import Home from ".";

describe("Home Template Component", () => {
  it("Should be defined", () => {
    expect(<Home />).toBeDefined();
  });

  it("Should render navbar", () => {
    const { getByRole } = render(<Home />);
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("Should render header", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("header-section")).toBeInTheDocument();
  });
});
