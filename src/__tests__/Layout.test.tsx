import { render, screen, fireEvent } from "../utils/test-utils";
import Layout from "../components/Layout/Layout";

describe("Layout (Appbar + Sidebar) component", () => {
  test("User should be able to close the sidebar when it's initially open", () => {
    render(<Layout />);

    fireEvent.click(screen.getByTestId("hamburgerBtn"));

    expect(screen.getByTestId("sidebar")).toHaveClass("md:w-0");
  });
});
