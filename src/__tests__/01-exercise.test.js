import $ from "jquery";

import exercise01 from "../01-exercise";

jest.useFakeTimers();

describe("01-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-container"></div>`;
  });

  test("provide a callback function to append the paragraph", () => {
    exercise01();

    jest.runAllTimers();

    expect($(".exercise-01").text()).toMatch("exercise-01 is done");
  });
});
