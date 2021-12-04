import { render } from "@testing-library/react";
import { Typography } from "@mui/material";

describe("Typography Component", () => {
  it("Should be defined", () => {
    expect(Typography).toBeDefined();
  });
  it("Should render text expected", () => {
    const expected = "Hello World";
    const { getByText } = render(<Typography>{expected}</Typography>);

    expect(getByText(expected)).toBeInTheDocument();
  });
});
