import { render, screen, fireEvent } from "../utils/test-utils";
import LoginRoute from "../routes/Login";
import { rest } from "msw";
import { setupServer } from "msw/node";

describe("login form", () => {
  const server = setupServer(
    rest.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      (req, res, ctx) => {
        return res(
          ctx.status(401),
          ctx.json({ message: "Incorrect email or password" })
        );
      }
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should display error when submitted empty", async () => {
    render(<LoginRoute />);

    expect(
      screen.queryByText(/Please enter an email./i)
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/Please enter a password./i)
    ).not.toBeInTheDocument();

    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(
      await screen.findByText(/Please enter an email./i)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/Please enter a password./i)
    ).toBeInTheDocument();
  });

  it("should display alert on error response from server", async () => {
    render(<LoginRoute />);

    expect(
      screen.queryByText(/Incorrect email or password/i)
    ).not.toBeInTheDocument();

    fireEvent.input(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@gmail.com" },
    });

    fireEvent.input(screen.getByLabelText(/Password/i), {
      target: { value: "123456" },
    });

    await fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(
      await screen.findByText(/Incorrect email or password/i)
    ).toBeInTheDocument();
  });
});
