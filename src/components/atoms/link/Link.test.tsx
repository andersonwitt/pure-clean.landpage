import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Link from "./Link";

describe("Link Component", () => {
  it("Should be defined", () => {
    expect(<Link />).toBeDefined();
  });

  it("Should render text", () => {
    const { getByText } = render(<Link>Im a Link</Link>);

    expect(getByText("Im a Link")).toBeInTheDocument();
  });

  it("Should render a link tag", () => {
    const { getByRole } = render(<Link />);

    expect(getByRole("link")).toBeInTheDocument();
  });

  it("Should call onClick function", () => {
    const mockClick = jest.fn();
    const { getByRole } = render(<Link onClick={mockClick}>Im a Link</Link>);

    const link = getByRole("link");

    act(() => {
      userEvent.click(link);
    });

    expect(mockClick).toHaveBeenCalled();
  });
});
