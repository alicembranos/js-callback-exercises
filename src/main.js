import $ from "jquery";

import exercise01 from "./01-exercise";
import exercise02 from "./02-exercise";
import exercise03 from "./03-exercise";

$(document).ready(function () {
  $(".run-ex").on("click", function () {
    const val = $("#chooseMethod").val();

    $(".ex-container").empty();

    if (val === "01") {
      exercise01();
    } else if (val === "02") {
      exercise02();
    } else if (val === "03") {
      exercise03();
    }
  });
});

const task = (cb, ...props) => setTimeout(() => cb(...props), 1000);

export function exercise01Task(cb) {
  task(cb);
}

export function exercise02Task(cb) {
  task(cb, "exercise 02 is done");
}

export function exercise03Task(cb) {
  task(cb, { message: "Failed to fetch the data" }, "exercise 03 is done");
}
