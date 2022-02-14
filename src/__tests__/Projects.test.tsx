import { render, screen } from "../utils/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Layout from "../components/Layout/Layout";

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API_URL}/projects`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Inventory Management System",
          description: "A simple inventory management system",
          color: "#6366F1",
          updated_at: "2020-03-14T00:00:00.000Z",
          created_at: "2018-03-14T00:00:00.000Z",
        },
        {
          id: 2,
          name: "Music Player",
          description: "A simple music player",
          color: "#A855F7",
          updated_at: "2020-09-14T00:00:00.000Z",
          created_at: "2019-03-14T00:00:00.000Z",
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Projects hydration", () => {
  it("should hydrate projects on request for both homepage and sidebar", async () => {
    render(<Layout />);
    expect(
      screen.queryByText("Inventory Management System")
    ).not.toBeInTheDocument();

    expect(
      await screen.findByText("Inventory Management System")
    ).toBeInTheDocument();

    expect(await screen.findByText("Music Player")).toBeInTheDocument();
  });
});
