const inputval = document.getElementById("inputval");
const listCont = document.querySelector(".list-container ul");

function addtask() {
  if (inputval.value == "") {
    alert("add task first....");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputval.value;
    listCont.appendChild(li);
  }
  inputval.value = "";
}
