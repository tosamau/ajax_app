const buildHTML = (XHR) => {
  const item = XHR.response.post;    //XHR.response.postと記述することで、レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
  const html = `
  <div class="post">
    <div class="post-date">
      投稿日時:${item.created_at}
    </div>
    <div class="post-content">
      ${item.content}
      </div>
    </div>`;
    return html;  //変数htmlのこと
};


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
    XHR.onload = () => {
      if (XHR.status !=200) {         //HTTPステータスコードが格納されている
        alert(`Error ${XHR.status}: ${XHR.statusText}`);  //XHR.statusTextには、ステータスコードに応じたメッセージが格納される
        return null;      //return null;によってJavaScriptの処理から抜け出すことができる
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");    //リセットの対象となるフォームの要素contentを取得して、変数formTextに格納     
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";       //フォームの中身をリセット
    };
  });
};

window.addEventListener('load', post);