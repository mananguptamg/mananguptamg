const inputBox = document.querySelector("#input");
const saveBtn = document.querySelector("#save");
const clearBtn = document.querySelector("#clear");

document.querySelector("#save").addEventListener("click", function () {
  save();
});
document.querySelector("#clear").addEventListener("click", function () {
  clear();
});

function save() {
  localStorage.setItem("data", inputBox.value);
}
function clear() {
  localStorage.clear();
  inputBox.value = "";
}
function show() {
  inputBox.innerHTML = localStorage.getItem("data");
}
show();
