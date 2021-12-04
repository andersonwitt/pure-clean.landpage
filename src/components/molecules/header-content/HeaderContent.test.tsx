import { render } from "@testing-library/react";
import HeaderContent from ".";

describe("Header Content", () => {
  it("Should be defined", () => {
    expect(HeaderContent).toBeDefined();
  });
  it("Should render title", () => {
    const { getByTestId } = render(<HeaderContent />);
    expect(getByTestId("header-content-title")).toBeInTheDocument();
  });
  it("Should render header text", () => {
    const { getByTestId } = render(<HeaderContent />);
    expect(getByTestId("header-content-text")).toBeInTheDocument();
  });
  it("Should render about button", () => {
    const expectedText = "Saiba Mais";
    const { getByRole } = render(<HeaderContent />);
    expect(getByRole("button", { name: expectedText })).toBeInTheDocument();
  });
});
