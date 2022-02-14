import { render, screen, fireEvent } from "../utils/test-utils";
import LoginRoute from "../routes/LoginRoute";
import { rest } from "msw";
import { setupServer } from "msw/node";

describe("login form", () => {
  const server = setupServer(
    rest.post("http://localhost:8000/auth/login", (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({ message: "Incorrect email or password" })
      );
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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

  it("should display alert on error response from server", async () => {
    render(<LoginRoute />);

    expect(
      screen.queryByText(/Incorrect email or password/i)
    ).not.toBeInTheDocument();

    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });

    await fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(
      await screen.findByText(/Incorrect email or password/i)
    ).toBeInTheDocument();
  });
});
