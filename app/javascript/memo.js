//const e = require("turbolinks");

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();        //new HMLHttpRequestの記述で新しいオブジェクトを生成している
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    //console.log("イベント発火")
  });
};

window.addEventListener('load', post);
