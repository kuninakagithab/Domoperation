let idanswer = document.getElementById("idanswer");
idanswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = document.getElementById('id名');";
  let gap = document.getElementsByClassName("gap")[0];
  gap.appendChild(list);
});


let classanswer = document.getElementById("classanswer");
classanswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = document.getElementsByClassName('class名');";
  let gap = document.getElementsByClassName("gap")[1];
  gap.appendChild(list);
});


let elementanswer = document.getElementById("elementanswer");
elementanswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = document.getElementsByTagName('タグ名');";
  let gap = document.getElementsByClassName("gap")[2];
  gap.appendChild(list);
});


let nameanswer = document.getElementById("nameanswer");
nameanswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = document.getElementsByName('タグ名');";
  let gap = document.getElementsByClassName("gap")[3];
  gap.appendChild(list);
});


let selectoranswer = document.getElementById("selectoranswer");
selectoranswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = document.querySelector('セレクタ');";
  let gap = document.getElementsByClassName("gap")[4];
  gap.appendChild(list);
});


let selectorsanswer = document.getElementById("selectorsanswer");
selectorsanswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = document.querySelectorAll('セレクタ');";
  let gap = document.getElementsByClassName("gap")[5];
  gap.appendChild(list);
});


let parentanswer = document.getElementById("parentanswer");
parentanswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = ノード.parentElement;";
  let gap = document.getElementsByClassName("gap")[6];
  gap.appendChild(list);
});


let childeanswer = document.getElementById("childeanswer");
childeanswer.addEventListener("click",function(){
  let list = document.createElement("li");
  list.textContent= "let 変数名 = ノード.children;";
  let gap = document.getElementsByClassName("gap")[7];
  gap.appendChild(list);
});



