const inputval = document.getElementById("inputval");
const listCont = document.querySelector(".list-container ul");

function addtask() {
  if (inputval.value == "") {
    alert("add task first....");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputval.value;
    listCont.appendChild(li);
    let dlt = document.createElement("span");
    dlt.innerHTML = "\u00d7";
    li.appendChild(dlt);
  }
  inputval.value = "";
  saveItem();
}

listCont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveItem();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveItem();
    }
  },
  false
);

function saveItem() {
  localStorage.setItem("data", listCont.innerHTML);
}

function displayTask() {
  listCont.innerHTML = localStorage.getItem("data");
}
displayTask();
