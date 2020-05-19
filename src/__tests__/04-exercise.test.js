import exercise04 from "../04-exercise";

jest.useFakeTimers();

describe("04-exercise", () => {
  let timeoutSpy;

  beforeAll(() => {
    timeoutSpy = jest.spyOn(window, "setTimeout").mockImplementation();
  });

  afterAll(() => {
    timeoutSpy.mockRestore();
  });

  test("execute a function using a setTimeout", () => {
    exercise04();

    jest.runAllTimers();

    expect(timeoutSpy.mock.calls[0][0]).toEqual(expect.any(Function));
    expect(timeoutSpy.mock.calls[0][1]).toBe(1000);
  });
});
