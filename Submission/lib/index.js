/**
 * NOTE!! You can ignore this code (it makes the form work)
 * Add your code to script.js
 */

// Import the addToTotal function that's created as part of the exercise
import { getName } from "../script.js";

/// Get all the HTML elements from the web page
const formEl = document.querySelector("#form-name");
const inputEl = document.querySelector("#nameInput");
const totalEl = document.querySelector("#name");

const onSubmit = (event) => {
  // stop the form from reloading the page when it's submitted
  event.preventDefault();

  // get the amount from the form input
  const amount = inputEl.value;

  try {
    // get the new total amount from the addToTotal function
    const newTotal = getName(amount);

    // update the total element text with the new total
    totalEl.innerText = newTotal;
    inputEl.value = "";
    inputEl.focus();
  } catch (error) {
    totalEl.innerText =
      "There was an error getting an answer. Check the Console in Developer Tools for an error";
    answerResultEl.classList.add("error");
    throw error;
  }
};

formEl.addEventListener("submit", onSubmit);
