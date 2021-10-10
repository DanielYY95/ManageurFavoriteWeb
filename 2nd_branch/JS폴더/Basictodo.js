const LI = document.body.querySelectorAll('div>li');
const BasicA = document.body.querySelectorAll('li>a');
const BasicForm = document.body.querySelectorAll("#Basictodo");
const BasicDiv = document.querySelectorAll("fourthBox>div");
const SBUTTON = document.querySelectorAll("#setbutton");
// 공통

const NameInput = BasicForm[0].querySelector("input:first-child");
const UrlInput = BasicForm[0].querySelector("input:nth-child(2)");
const sButton = BasicForm[0].querySelector("button:first-of-type");
const NEWLIST = "nList";
let nList = []; 

// FROM의 인덱스에 따라 
// 아예 처음부터 nList = [{},{},{}]를 만들까?


function saveBasic() {
  localStorage.setItem(NEWLIST, JSON.stringify(nList));
}
// 인덱스를 변수로


// X버튼 누를 때 div를 target으로 가리키게하고, 이것의 하위 태그인 Form과 Li를 불러온다. 허나, x버튼이 Li의 하위태그인디..... 
//1. Form 인덱스와 LI 인덱스. 현재 Form 과 Li는 div 소속 형제 태그들
function deleteBasic() {
  const newBasic = { nickname: NameInput.value, url: UrlInput.value, id: Date.now() };
  localStorage.removeItem(NEWLIST);
  nList = nList.filter((toBye) => toBye.id !== parseInt(BasicForm[0].id));
  saveBasic();
  paintBasic(newBasic);
  LI[0].querySelector("button").remove();
  alert("해당 즐겨찾기를 삭제하였습니다.");
}

//2. NameInput, UrlInput, nList 인덱스 부여 필요,
function setBasicTodo() {
  event.preventDefault();
  const newBasic = { nickname: NameInput.value, url: UrlInput.value, id: Date.now() };
  NameInput.value = "";
  UrlInput.value = "";
  nList.push(newBasic); 
  saveBasic();
  paintBasic(newBasic); 
  createX();
}

//3. Li인덱스 부여
function createX() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  LI[0].appendChild(xButton);
  xButton.addEventListener("click", deleteBasic);
} 

//4. Form 과 A 태그의 인덱스 부여
function paintBasic(newBasic) {
  BasicForm[0].classList.add("hidden");
  BasicA[0].innerText = newBasic.nickname;
  BasicA[0].href = newBasic.url;
  BasicForm[0].id = newBasic.id;
} 

// sButton의 인덱스 부여 필요
sButton.addEventListener("click", setBasicTodo);

// 불러오는 매개변수의 인덱스 필요
const getBasic = localStorage.getItem(NEWLIST);

// nList 인덱스 필요
if ((getBasic !== null) && (getBasic !== '[]')) {
  const parsedList = JSON.parse(getBasic);
  nList = parsedList; 
  parsedList.forEach(paintBasic); 
  createX();
}

////////////////////

const NameInput2 = BasicForm[1].querySelector("input:first-child");
const UrlInput2 = BasicForm[1].querySelector("input:nth-child(2)");
const sButton2 = BasicForm[1].querySelector("button:first-of-type");
const NEWLIST2 = "nList2";
let nList2 = []; 

// FROM의 인덱스에 따라 
// 아예 처음부터 nList2 = [{},{},{}]를 만들까?


function saveBasic2() {
  localStorage.setItem(NEWLIST2, JSON.stringify(nList2));
}
// 인덱스를 변수로


// X버튼 누를 때 div를 target으로 가리키게하고, 이것의 하위 태그인 Form과 Li를 불러온다. 허나, x버튼이 Li의 하위태그인디..... 
//1. Form 인덱스와 LI 인덱스. 현재 Form 과 Li는 div 소속 형제 태그들
function deleteBasic2() {
  const newBasic = { nickname: NameInput2.value, url: UrlInput2.value, id: Date.now() };
  localStorage.removeItem(NEWLIST2);
  nList2 = nList2.filter((toBye) => toBye.id !== parseInt(BasicForm[1].id));
  saveBasic2();
  paintBasic2(newBasic);
  LI[1].querySelector("button").remove();
  alert("해당 즐겨찾기를 삭제하였습니다.");
}

//2. NameInput2, UrlInput2, nList2 인덱스 부여 필요,
function setBasicTodo2() {
  event.preventDefault();
  const newBasic = { nickname: NameInput2.value, url: UrlInput2.value, id: Date.now() };
  NameInput2.value = "";
  UrlInput2.value = "";
  nList2.push(newBasic); 
  saveBasic2();
  paintBasic2(newBasic); 
  createX2();
}

//3. Li인덱스 부여
function createX2() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  LI[1].appendChild(xButton);
  xButton.addEventListener("click", deleteBasic2);
} 

//4. Form 과 A 태그의 인덱스 부여
function paintBasic2(newBasic) {
  BasicForm[1].classList.add("hidden");
  BasicA[1].innerText = newBasic.nickname;
  BasicA[1].href = newBasic.url;
  BasicForm[1].id = newBasic.id;
} 

// sButton2의 인덱스 부여 필요
sButton2.addEventListener("click", setBasicTodo2);

// 불러오는 매개변수의 인덱스 필요
const getBasic2 = localStorage.getItem(NEWLIST2);

// nList2 인덱스 필요
if ((getBasic2 !== null) && (getBasic2 !== '[]')) {
  const parsedList2 = JSON.parse(getBasic2);
  nList2 = parsedList2; 
  parsedList2.forEach(paintBasic2); 
  createX2();
}

///////////////

const NameInput3 = BasicForm[2].querySelector("input:first-child");
const UrlInput3 = BasicForm[2].querySelector("input:nth-child(2)");
const sButton3 = BasicForm[2].querySelector("button:first-of-type");
const NEWLIST3 = "nList3";
let nList3 = []; 

// FROM의 인덱스에 따라 
// 아예 처음부터 nList3 = [{},{},{}]를 만들까?


function saveBasic3() {
  localStorage.setItem(NEWLIST3, JSON.stringify(nList3));
}
// 인덱스를 변수로


// X버튼 누를 때 div를 target으로 가리키게하고, 이것의 하위 태그인 Form과 Li를 불러온다. 허나, x버튼이 Li의 하위태그인디..... 
//1. Form 인덱스와 LI 인덱스. 현재 Form 과 Li는 div 소속 형제 태그들
function deleteBasic3() {
  const newBasic = { nickname: NameInput3.value, url: UrlInput3.value, id: Date.now() };
  localStorage.removeItem(NEWLIST3);
  nList3 = nList3.filter((toBye) => toBye.id !== parseInt(BasicForm[2].id));
  saveBasic3();
  paintBasic3(newBasic);
  LI[2].querySelector("button").remove();
  alert("해당 즐겨찾기를 삭제하였습니다.");
}

//2. NameInput3, UrlInput3, nList3 인덱스 부여 필요,
function setBasicTodo3() {
  event.preventDefault();
  const newBasic = { nickname: NameInput3.value, url: UrlInput3.value, id: Date.now() };
  NameInput3.value = "";
  UrlInput3.value = "";
  nList3.push(newBasic); 
  saveBasic3();
  paintBasic3(newBasic); 
  createX3();
}

//3. Li인덱스 부여
function createX3() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  LI[2].appendChild(xButton);
  xButton.addEventListener("click", deleteBasic3);
} 

//4. Form 과 A 태그의 인덱스 부여
function paintBasic3(newBasic) {
  BasicForm[2].classList.add("hidden");
  BasicA[2].innerText = newBasic.nickname;
  BasicA[2].href = newBasic.url;
  BasicForm[2].id = newBasic.id;
} 

// sButton3의 인덱스 부여 필요
sButton3.addEventListener("click", setBasicTodo3);

// 불러오는 매개변수의 인덱스 필요
const getBasic3 = localStorage.getItem(NEWLIST3);

// nList3 인덱스 필요
if ((getBasic3 !== null) && (getBasic3 !== '[]')) {
  const parsedList3 = JSON.parse(getBasic3);
  nList3 = parsedList3; 
  parsedList3.forEach(paintBasic3); 
  createX3();
}







