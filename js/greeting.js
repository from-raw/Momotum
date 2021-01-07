"use strict";

// querySelector는 찾은 것 중 첫 번째 것을 가지고 오고, querySelectorAll은 전부 다 가지고 온다
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

// null: doesn't exist (like undefined, cannot find)
// localStorge 이용하기
const CURRENT_LOCALSTORAGE = "currentUserName",
  CLASSNAME_SHOWING = "showing"; // 반복적으로 사용되기 때문에 만들어 놓은 변수

function paintingGreeting(text) {
  form.classList.remove(CLASSNAME_SHOWING);
  greeting.classList.add(CLASSNAME_SHOWING);
  greeting.innerText = `Hello, ${text}`;
}

function loadUserName() {
  const currentUserName = localStorage.getItem(CURRENT_LOCALSTORAGE);
  if(currentUserName == null) {
    // 사용자가 존재하지 않을 때
  } else {
    // 사용자가 존재할 때
    paintingGreeting(currentUserName);
  }
}

function init() {
  loadUserName();
}

init();