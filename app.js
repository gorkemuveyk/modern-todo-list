// HTML ELEMENT VARIABLES
let tasks = document.querySelectorAll(".task-item");
const taskText = document.querySelector("#text-input");
const taskBtn = document.querySelector("#btn-input");
const deleteBtn = document.querySelector(".trash");
const ul = document.querySelector(".tasks");
const alertMessage = document.querySelector(".alert-message");

// DATE TIME VARIABLES
const date = new Date();
const year = date.getFullYear();
const month =
  date.getMonth() + 1 < 10 ? "0" + date.getMonth() : date.getMonth();
const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
const minute =
  date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

//KEYBOARD ENTER TRIGGER
function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    taskBtn.click();
    return false;
  }
  return true;
}

// ADD BTN CLICK
taskBtn.addEventListener("click", (e) => {
  if (taskText.value != "") {
    ul.innerHTML += createLiElement(taskText.value);
    showMessage();

    taskText.classList.remove("not-null");
    taskBtn.classList.remove("not-null");
    taskText.value = "";
  } else {
    taskText.classList.add("not-null");
    taskBtn.classList.add("not-null");
  }
  e.preventDefault();
});

ul.addEventListener("click", deleteLiElement);

// FUNCTIONS
function createLiElement(val) {
  return `
  <li class="task-item ">
  <span class="task-time">${day}.${month}.${year} - ${hour}:${minute}</span>
  ${val}
  <span class="icons">
    <i id="trash" class="trash fa-solid fa-trash "></i>
  </span>
  </li>
`;
}
let count = 0;
function deleteLiElement(element) {
  const item = element.target;
  // DELETE TODO
  if (item.classList[0] === "trash") {
    if (count % 2 === 0) {
      element.target.parentElement.parentElement.classList.add(
        "animate__animated",
        "animate__backOutRight"
      );
      count++;
    } else {
      element.target.parentElement.parentElement.classList.add(
        "animate__animated",
        "animate__backOutLeft"
      );
      count++;
    }

    setTimeout(() => {
      element.target.parentElement.parentElement.style.display = "none";
    }, 400);
  }
}
// SHOW ALERT MESSAGE
function showMessage() {
  alertMessage.style.display = "block";
  setTimeout(() => {
    alertMessage.style.display = "none";
  }, 1500);
}
