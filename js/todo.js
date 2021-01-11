"use strict;"

// const이기 때문에 다른 js 파일에 있는 변수명들과 겹쳐서 사용하면 안 된다
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCALSTORAGE = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌"; // window키 + .(마침표)
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span); // appendChild: 부모 요소(선택자)에게 자식 요소의 최종 결과물을 넣어주는 역할
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LOCALSTORAGE);
  if(toDos !== null) {

  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();