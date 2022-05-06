import { exercise01Task } from './main';

/**
 * Execute the `exercise01Task` function and provide
 * a callback function that appends a `p` element
 * with the text content of `exercise-01 is done`
 * and a class name of `exercise-01`
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 */
function exercise01() {
  // Complete the code of the function
  exercise01Task(function () {
    const container = document.querySelector('.ex-container');
    const pElement = document.createElement('p');
    pElement.textContent = `exercise-01 is done`;
    pElement.classList.add('exercise-01');
    container.appendChild(pElement);
  });
}

export default exercise01;
