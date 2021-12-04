import { render, screen } from "@testing-library/react";
import WImage, { IWImageProps } from "./";

const expectedProps: IWImageProps = {
  src: "https://via.placeholder.com/150",
  alt: "test",
  width: 150,
  height: 150,
  borderRadius: 25,
};

const getImage = () => screen.getByRole("img") as HTMLImageElement;
const hasCapitalLetter = (str: string) => /[A-Z]/.test(str);
const removeSufixes = (str: string) => Number(str.replace("px", ""));

describe("WImage Component", () => {
  it("Should be defined", () => {
    expect(WImage).toBeDefined();
  });

  it("Should render img", () => {
    const { getByRole } = render(<WImage />);
    expect(getByRole("img")).toBeInTheDocument();
  });

  describe("Should verify Properties", () => {
    beforeEach(() => {
      render(<WImage {...expectedProps} />);
    });

    for (const prop in expectedProps) {
      if (hasCapitalLetter(prop)) {
        it(`Should have ${prop}`, () => {
          expect(removeSufixes(getImage().style[prop])).toBe(
            expectedProps[prop]
          );
        });
        continue;
      }
      it(`Should render ${prop}`, () => {
        expect(getImage()[prop]).toBe(expectedProps[prop]);
      });
    }
  });
});
