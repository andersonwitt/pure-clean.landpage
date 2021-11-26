import { render } from "@testing-library/react";
import NavLink, { NavDataType } from ".";

const initialNavData: NavDataType[] = [
  {
    title: "Nossos Serviços",
    onClick: jest.fn(),
  },
  {
    title: "Sobre Nós",
    onClick: jest.fn(),
  },
  {
    title: "Portifólio",
    onClick: jest.fn(),
  },
  {
    title: "Nosso Time",
    onClick: jest.fn(),
  },
];

const renderComponent = (navData = initialNavData) => {
  return render(<NavLink navData={navData} />);
};

describe("NavLink Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should be defined", () => {
    expect(<NavLink navData={[]} />).toBeDefined();
  });

  it("Should render child items passing their titles", () => {
    const { getByText } = renderComponent();

    initialNavData.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument();
    });
  });

  it("Should call onClick mock for each nav data", () => {
    const { getByText } = renderComponent();

    initialNavData.forEach((item) => {
      const navLink = getByText(item.title);
      navLink.click();
      expect(item.onClick).toHaveBeenCalled();
    });
  });
});
