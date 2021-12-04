import { render } from "@testing-library/react";
import Header from "./";

describe("Header Component", () => {
  it("Should be defined", () => {
    expect(Header).toBeDefined();
  });
  it("Should render component", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header-section")).toBeInTheDocument();
  });
  it("Should render header content component", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header-content")).toBeInTheDocument();
  });
});
