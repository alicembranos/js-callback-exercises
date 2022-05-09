import {
  exercise03Task
} from './main';

/**
 * Execute the `exercise03Task` function and provide
 * a callback function that receives an `error` parameter
 * that has a property of `message` that stores the
 * error message if there is an error.
 *
 * The function also receives a `result` parameter
 * that contains the result when the error is null
 *
 * The callback function should check if the `error`
 * is not null and append a `p` element with the text
 * content of the `error.message` parameter
 * and a class name of `exercise-03` if the error is not null
 *
 * Or a `p` element with the text content of
 * the `result` parameter and a class name of `exercise-03`
 * if the error is null
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 */
function exercise03() {
  // Complete the code of the function
  exercise03Task((error, result) => {
    const container = document.querySelector('.ex-container');
    const pElement = document.createElement('p');
    if (error) {
      pElement.textContent = error.message;
    } else {
      pElement.textContent = result;
    }
    pElement.classList.add('exercise-03');
    container.appendChild(pElement);
  });
}

export default exercise03;