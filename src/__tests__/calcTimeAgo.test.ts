import calcTimeAgo from "../utils/calcTimeAgo";

test("It should return 1 day ago given a date 1 day ago", () => {
  jest.useFakeTimers().setSystemTime(new Date(1643670878185).getTime());

  expect(calcTimeAgo(new Date("2022-01-30").toISOString())).toBe("1 days");
});
