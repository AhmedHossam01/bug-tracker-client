import { render, screen, fireEvent } from "../utils/test-utils";
import LoginRoute from "../routes/LoginRoute";

describe("login form", () => {
  it("should display error when submitted empty", async () => {
    render(<LoginRoute />);

    expect(screen.getByLabelText(/email/i)).not.toHaveClass("border-red-500");
    expect(screen.getByLabelText(/password/i)).not.toHaveClass(
      "border-red-500"
    );

    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(await screen.findByLabelText(/email/i)).toHaveClass(
      "border-red-500"
    );

    expect(await screen.findByLabelText(/password/i)).toHaveClass(
      "border-red-500"
    );
  });
});
