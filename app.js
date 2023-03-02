// VARIABLES
let tasks = document.querySelectorAll(".task-item");
const taskText = document.querySelector("#text-input");
const taskBtn = document.querySelector("#btn-input");
const deleteBtn = document.querySelector(".trash");
const editBtn = document.querySelector("#edit");
const ul = document.querySelector(".tasks");
const alertMessage = document.querySelector(".alert-message");
const date = new Date();
const year = date.getFullYear();
const month =
  date.getMonth() + 1 < 10 ? "0" + date.getMonth() : date.getMonth();
const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();

console.log(taskText.value);
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

deleteBtn.addEventListener("click", (e) => {
  deleteLiElement(e.target.parentElement.parentElement);
});

// FUNCTIONS
function createLiElement(val) {
  return `
  <li class="task-item">
  <span class="task-time">${day}.${month}.${year} - ${hour}:${minute}</span>
  ${val}
  <span class="icons">
    <i id="trash" class="fa-solid fa-trash"></i>
    <i id="edit" class="fa-solid fa-pen"></i>
  </span>
  </li>
`;
}
function deleteLiElement(element) {
  console.log(element);
}
// SHOW ALERT MESSAGE
function showMessage() {
  alertMessage.style.display = "block";
  setTimeout(() => {
    alertMessage.style.display = "none";
  }, 1500);
}
