import $ from "jquery";
import exercise03 from "../03-exercise";

jest.useFakeTimers();

describe("03-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-container"></div>`;
  });

  test("provide a callback function that receives an error and a result", () => {
    exercise03();

    jest.runAllTimers();

    expect($(".exercise-03").text()).toMatch("Failed to fetch the data");
  });
});
