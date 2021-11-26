import { render } from "@testing-library/react";
import NavBar, { navData } from ".";

describe("NavBar Component", () => {
  it("Should be defined", () => {
    expect(<NavBar />).toBeDefined();
  });

  it("Should render Nav Link when is on desktop mode", () => {
    const { getAllByRole } = render(<NavBar />);

    expect(getAllByRole("link")).toHaveLength(navData.length);
  });

  it("Should render titles", () => {
    const { getByText } = render(<NavBar />);
    navData.forEach(({ title }) => {
      expect(getByText(title)).toBeInTheDocument();
    });
  });
});
