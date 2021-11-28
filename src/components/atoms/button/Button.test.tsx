import { render } from "@testing-library/react";
import Button from "./";

describe("Button component", () => {
  it("Should be defined", () => {
    expect(<Button />).toBeDefined();
  });

  it("Should render a button", () => {
    const { getByRole } = render(<Button />);

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("Should render text child", () => {
    const { getByText } = render(<Button>Hello</Button>);

    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("should call onClick mock", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Im a Button</Button>
    );

    getByText("Im a Button").click();

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
