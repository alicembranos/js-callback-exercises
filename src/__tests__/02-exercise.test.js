import $ from "jquery";
import exercise02 from "../02-exercise";

jest.useFakeTimers();

describe("02-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-container"></div>`;
  });

  test("provide a callback function that receives the result", () => {
    exercise02();

    jest.runAllTimers();

    expect($(".exercise-02").text()).toMatch("exercise 02 is done");
  });
});
