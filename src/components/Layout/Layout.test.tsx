import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "../../utils/test-utils";
import Layout from "./Layout";

describe("Layout (Appbar + Sidebar) component", () => {
  test("User should be able to close the sidebar when it's initially open", () => {
    render(<Layout />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByTestId("sidebar")).toHaveClass("md:w-0");
  });
});
