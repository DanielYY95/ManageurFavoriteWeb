const firfir = document.body.querySelector(".firfir");
const first_1 = firfir.querySelector(".first_first");
const first1_Form = document.body.querySelector("#first_1_Form");
const first1_NameInput = first1_Form.querySelector("input:first-child");
const first1_UrlInput = first1_Form.querySelector("input:nth-child(2)");
const sButton = first1_Form.querySelector("button:first-of-type");
const NEWLIST="nList";

let nList=[]; //array 형태로 초기화 시작

function saveData() {
  localStorage.setItem(NEWLIST, JSON.stringify(nList));
} // {name: ---- , url: ----, id:----}}이 하나의 요소인 형태로 + 각 값을 string 형태로 저장!
//웹 스토리지를 사용할 때 주의할 점은 오직 문자형 데이터 타입만 지원한다는 것이다. 

function deleteData() {
  const newData= {nickname: first1_NameInput.value, url: first1_UrlInput.value, id:Date.now()};
  // x버튼을 누를 때 form에 해당하는 게 X. 그리고 이의 id를 조회하여 이를 localStorage에서만 삭제할 수 있으면 좋은데....
  localStorage.removeItem(NEWLIST); //array를 통쨰로 지웠다가
  
  // function deletedData(element)  {if(element.id === 'apple') return true;}
  //nList.findindexof();
  nList=nList.filter((toBye)=>toBye.id !==parseInt(first1_Form.id)); //필터한 새로운 array 설정 // nList=nList.filter(function(toBye) {if toBye.id !==parseInt(first1_Form.id)return true;}
  saveData(); // 그 array를 저장
  paintData(newData);
  alert("해당 즐겨찾기를 삭제하였습니다.");
} // 노마드의 경우, 새로 생성된 객체를 없애면 되는 거지만, 여기는 localStorage에서 없애야....
// 누른 것에 해당되는 localStorage만 없애기는 어떻게???

function paintData(newData) {
  first1_Form.classList.add("hidden");
  first_1.innerText = newData.nickname;
  first_1.href = newData.url;
  first1_Form.id = newData.id; // 가능한가??
  firfir.onclick = ""; 
  first_1.onclick = "";
}

function createX() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  firfir.appendChild(xButton); 
  xButton.addEventListener("click", deleteData); 
}

function setWeb(event) {
  event.preventDefault();
  const newData= {nickname: first1_NameInput.value, url: first1_UrlInput.value, id:Date.now()};
  first1_NameInput.value = "";
  first1_UrlInput.value = "";
  nList.push(newData); // array에 저장
  saveData();
  paintData(newData);
  createX();
}  // 값 저장, 공백, array 저장, 폼 가리고, 결과 나타내고,      x버튼 생성

function showMeInput() {
  first1_Form.classList.toggle('hidden');
}

first1_Form.addEventListener("submit", setWeb);
sButton.addEventListener("click", setWeb);

const getData = localStorage.getItem(NEWLIST); // array에 저장된 각 값 불러오기

if ((getData !== null) &&  (getData !== '[]')) {
  const parsedList = JSON.parse(getData); // 각 값에 인덱스 부여
  nList = parsedList; // 인덱스가 부여된 상태 유지 
  parsedList.forEach(paintData); // 위 과정들을 유지한 상태에서 각 값에 paintData 적용
  createX();
} 

/// x가 삭제되지 않았던 문제... getData 로 바꾸고나서 단순히 null 이 아니라 '[]'로 해야하는 거였다!!!! 


/*
현재 상황

- 전체로 적용될 수 있으려면,,,,  // 느낌상 function(x) 으로 argument를 미지수로 설정한다음,
전체 함수를 main 함수로 포괄하는 것이 좋을듯. 다만 html로부터 js로 다 불러와야하는 건....
=> class 통일하라고 하는디...
- x에 id를 부여해야하나... 사라졌을 때 해당 값이 몇 번째 요소였는지??? 흠,,,, 나중에 리스트끼리 순서 바꾸고 그러고 싶은데, 막 꼬이잖아.....

** index
(1) findindex 객체의 주소찾기(특히, 객체가 갖고있는 속성을 활용하여)
예시)
const arr = [
  {name : 'banana', price: 1000},
  {name : 'apple', price:1500},
  {name : 'orange', price: 2000}
];

function findApple(element)  {
  if(element.name === 'apple') return true;
}

document.writeln(arr.findIndex(findApple)); // 1
===> 이걸로 localStorage에서 id 찾아가지구... 아니면 id를 class의 i번째 요소인지 따라 
i로 부여해야하나?
--------------
// 배열에서 특정 항목이 몇번째 원소인지를 알고 싶을 때 사용한다.

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index); // 2
1
2
3
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index); // 2
배열 안에 있는 값들이 객체이거나 특정 조건을 확인해야하는 경우에는 findIndex를 사용한다.


---------------------------------------완료
- 아래 x버튼을 누르면 바로 적용되진 않음 => 해결. 삭제하는 function 안에 화면 출력 유지 함수를 넣어야한다. 그러고나니 삭제하고나서 바로 적용되고 x버튼이 대신 자리를 차지하게되는.... 나쁘지 않은데??? 새로고침하면 다시 생성된다.
- x버튼을 링크 옆에 생성했으나 아래 x버튼처럼 작동하진 않음 => 해결 => 이제는 전체 localStorage가 아니라 해당하는 것만 지우게끔해야.
- 링크와 x버튼 사이의 간격을 벌려줘야 ==> 대충 해결함. but 이쁘지가....
- 이제 localStorage에서 id를 부여하는 등.... ==> 해결
- ##가 아니라 같은 줄의 여백을 눌러도 toggle이 되는 문제를 어떻게 해결할까? ==>> li 태그 대신 a태그에 토글함수를 부여했더니 되었다!!! li가 display: block; 이었기에 쫙 이어진 것이었다. display: inline; 같은 걸로 했다간 세로가 아니라 가로 배열이 되어버리는 문제..
li vs a 태그의 크기가 다르다.




/


/**##

const first_1 = document.body.querySelector(".first_first");
const first1_Form = document.body.querySelector("#first_1_Form");
const first1_NameInput = document.body.querySelector("input:first-child");
const first1_UrlInput = document.body.querySelector("input:nth-child(2)");
const firfir = document.body.querySelector(".firfir");
const sButton = document.body.querySelector("button:first-of-type");

/* querySelector와 getElementById, getElemenByClassName 같은거 사용하는 차이 구별!!*/
/*:first-child 의 경우 div 하위 엘리멘트중에 p 엘리먼트가 가장 첫번째에 위치해야  :first-child 가상클래스를 통해 선택할 수 있기 때문입니다.
위 마크업은 div 하위 요소중에 가장 첫번째는 div 엘리먼트이기 때문에 선택할 수 없었던 것입니다. 
반면에, :firt-of-type 은 실제 p 엘리먼트만을 기준으로 카운트를 하기 때문에 선택할 수 있는 것입니다.*/

/**##
function saveName(nickname) {
  localStorage.setItem("nickname", nickname);
}

function saveUrl(url) {
  localStorage.setItem("url", url); //이걸 하는 이유가 무엇인지 다시한번 알아보자. 또한, JSON.stringify 을 하면 url을 망친다.
}


/* 이제 삭제 버튼을 만들고 단체로 적용하면 될듯 싶다!!!*/
/**##
function deleteData() {
  localStorage.removeItem("nickname");
  localStorage.removeItem("url"); // 이걸로 키와 값을 없앴으나 바로 반영되지는 않는듯함. localStorage.clear();은 아예 초기화//
   paintData();

}

function paintData() {
  const getNickName = localStorage.getItem("nickname"); //삭제하고나서 유용하다.
  const getUrl = localStorage.getItem("url");
  first1_Form.classList.add("hidden");
  first_1.innerText = getNickName;
  first_1.href = getUrl;
  firfir.onclick = ""; // 이것덕분에 li태그의 onclick 이벤트를 없애는 
  first_1.onclick = ""; // a태그의 onclick 이벤트를 없애는 이렇게 간단한 걸.... 

}

/**##
function createX() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌"; //innertext 왜 안 되지.... 그래도 innerHTML 은 되네!! 
  // 링크와 x 버튼 사이의 공백은 css에서 건들여줘야할 듯....
  //const x = document.createTextNode("❌"); // innerText 대신 사용...
  //xButton.appendChild(x);
  firfir.appendChild(xButton); // 안 되었던 게 아니라 파묻혀있었던 거네...
  //first1_Form.insertBefore(xButton, null); // 이것도 되긴하다. null은 삽입시점

  // 생성이 되지 않았던 이유. appendChild() 안에 ""가 들어가지 않는다!!
  //xButton.addEventListener("click", deleteData);
  xButton.addEventListener("click", deleteData); // x버튼을 눌러도 작동하지 않았던 이유가 내가 바깥에다가 xbutton을 만들어놓고 addEventListener 이벤트를 바깥에다가 만들었기에... 어떻게든 setWeb(값을 저장, 화면 출력)과 paint(화면출력 유지) 같은 function에 설정해야한다.
}


const dButton = document.body.querySelector("#deleteButton");
dButton.innerText = "❌";
dButton.addEventListener("click", deleteData);


//* 일단 만들어져있는걸 없애야... */


/**##
function setWeb(event) {
  event.preventDefault();
  const nickname = first1_NameInput.value;
  const url = first1_UrlInput.value;
  first1_NameInput.value = "";
  first1_UrlInput.value = "";
  saveName(nickname);
  saveUrl(url);
  showMeInput();
  paintData();
  createX();
}

/* createX(); */


/**##
function showMeInput() {
  first1_Form.classList.toggle('hidden');
}

function closeInput() {
  first1_Form.classList.add('hidden');
}

/* 매우 중요!! 클릭 시, 토글을 통해 클래스 부여, 제거.
function(){} 은 어떻게 작동하는지 이해하자!!! 
그리고 toggle을 사용하면 input, button 까지 적용되기 때문에 일단은 remove로 적용해놨다. 다른 대안은 없나... ===> 닫기 버튼을 따로 만든다???
*/

/**##
first1_Form.addEventListener("submit", setWeb);
sButton.addEventListener("click", setWeb);

/* first_1.setAttribute("href",`${first1_Url}`); /* 태그의 속성을 바꾸는 방법 */

/**##
const getNickName = localStorage.getItem("nickname");
const getUrl = localStorage.getItem("url");

if (getNickName != null && getUrl != null) {
  paintData();
  createX();
  // 일단 x버튼도 이렇게 두긴 했다....
}  // 정확히 왜 있는지???? 아, 이게 없으니 계속 유지가 안된다. 이는 값이 없어질 때까지 계속 유지하라는 소리다.


*/

/* else{
  showMeInput();
  first_1.innerText = "##";
  first_1.href = "";
  firfir.onclick = "showMeInput()"; 
  first_1.onclick = "return aa();"; 
} // 삭제를 진행한 이후로 해야한다. 안 그러면 초기 값과 충돌되는 문제...


/** 
if (getNickName === null || getUrl === null) {
  first1_Form.classList.remove("hidden");
} else {
  first1_Form.classList.add("hidden");
  first_1.innerText = getNickName;
  first_1.href = getUrl;
} 
*/


/*
1. TypeError: Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'.
    at /script.js:19:9
==> 잘,,,,

2. 클릭 시 hidden 클래스를 없애고 form이 나와야하는데,,,, 일단 문제는 form 설정을 제대로 하지 않았고,,,

3. 계속 Cannot read property 'preventDefault' of undefined 에러가 있는데,
function argument에 event 넣어주고, addEventListener에 있는 function에 ()를 적지 않았더니 에러가 해결되었다???

4. 새로운 문제. a 태그에 대한 토글을 설정했더니 그 아래 있는 것들도 토글이 되어버렸네....

5. 토글 활용: first_1.addEventListener("click", function(){
  first1_Form.classList.toggle('hidden');
===>> 그냥 function 토글 하나 만들고 onclick="toggle()" 이런식으로 해놓으면 된다. 

6. 클릭하면 input창이 열려있는 것과 localStorage에 null 값인 경우 열려있는 것이 서로 상충하네.... 그냥 null 조건을 없애버려야하나... 

====>>> 일단 이름과 url 모두 null인 아닌 경우에 설정하게 해놨다... 이걸 삭제했을 때 문제를 생각해보기도 해야겠다. 

7. 즉시 반영되야하지만 새로고침해야 반영되는 부분을 어떻게 고칠까???


8. TypeError: Cannot read property 'addEventListener' of null
HTML이 모두 로드되기전에 자바스크립트 영역에서 HTML을 참조하는데 addEventListener에서 HTML태그를 참조하지 못해서 계속 에러가 발생했다.

첫번째 방법, script 영역(아래 코드에서 노랑부분)을 body 태그 아래에 위치시킵니다.

head 태그 내부에 script 영역(노랑부분)이 있죠.
<!DOCTYPE html> <html> <head> <script src="myscript.js"></script> </head> <body> <input type="button" id="hw" value="Hello world" /> </body> </html>
script 영역(노랑 부분)을 body 태그 아래로 이동시켜요!

<!DOCTYPE html> <html> <head> // body태그 아래로 이동 </head> <body> <input type="button" id="hw" value="Hello world" /> </body> <script src="myscript.js"></script> </html>
즉, script 영역을 페이지의 하단에 위치시켜서 HTML의 로드가 모두 완료된 후, script 영역을 부르는 거죠!
가장 일반적인 방법입니다.

두번째 방법, 문제가 되는 함수를 window.onload 함수 내부에 넣습니다.

window.onload = function(){} 함수는 웹브라우저의 모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해서 호출되는 함수로,
해당 부분에 넣으면 HTML을 모두 로드한 뒤에 함수를 호출합니다. 

head태그 내부에 script 영역을 참조하는 부분이 있지만, window.onload 함수 내부에 문제가 되는 함수를 넣어줌으로써 해결됩니다.

<!DOCTYPE html> <html> <head> <script src="script2.js"></script> </head> <body> <input type="button" id="hw" value="Hello world" /> </body> </html>

window.onload = function(){ var hw = document.getElementById('hw'); hw.addEventListener('click', function(){ alert('Hello world'); }) }

9. function page(){
  location.href= first1_UrlInput.value;
location.href 같은 경우는 href 에 있는 링크를 기본 페이지로 설정하겠다는 의미로, page() 함수가 호출되는 즉시 href에 설정된 링크로 이동하게 될 것

10. 닫기 버튼
- onclick="first_1_Form.style.display= 'none'" 로 닫을 수는 있으나, 한번 닫히나 새로고침할 때까지 못 여네.....

+ 보이기 버튼
onclick="first_1_Form.style.display='block'" 으로도 가능!!

11. TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'. 에러

12. li와 a, form 태그를 분리하면 toggle을 사용할 수 있는 장점이 있지만 데이터가 날라가버리는 문제.... 또한, 설정된 이름을 누를때마다 form이 또 열리는...
 
13. 표시만 하고 데이터 지우기

const getNickName = localStorage.getItem("nickname");
const getUrl = localStorage.getItem("url");

if (getNickName != null && getUrl != null) {
  first1_Form.classList.add("hidden");
  first_1.innerText = getNickName;
  first_1.href = getUrl;
  firfir.onclick=""; 
  first_1.onclick=""; 
  deleteData(); // localStorage.removeItem("nickname"); localStorage.removeItem("url");
} 

로컬스토리지에 데이터가 있을경우 그 데이터를 표시하고 지우도록 deleteData()를 콜했기 때문

14. 화면에 바로 뿌려주는...
해당 스크립트의 실행 시점에 따라 달라지는 문제입니다.
저게 function 으로 이루어져있다면 해당 function을 호출만 하면 화면에 뿌릴 수 있겠지만
function이 아닌 load 상태에서 이뤄지는 스크립트라면
saveName, saveUrl보다 이전에 실행되게 되어서
saveName, saveUrl이후에는 실행되지 않게 됩니다.

해당 로직을 이용하시려면 function으로 감싸시고 load되는 script에서 한번 콜하시고(바로 화면 출력)
saveName, saveUrl 동작할 때 한번 콜하시면(계속 유지) 저장 후 로드까지 될꺼에요

16. function aa() {
  return false; /* a href를 작동하지 않게 하는 것 
} // 이런식으로 기본적인 이벤트를 작동하지않게 할 수 있다.
// onclick 에 작성 시  onclick="return aa();"  이렇게 작성해야한다.


17. id 부여
- 빈 array 배열을 만든다.
- 저장할 때,  string 형태로 저장한다.
- newData 와 같이 각 요소를 {name: --- , url:----, id:----} 꼴로 저장할 수 있도록 선언.
- newData 를 활용하여 저장하고 표출.


18. findindex 객체의 주소찾기(특히, 객체가 갖고있는 속성을 활용하여)
예시)
const arr = [
  {name : 'banana', price: 1000},
  {name : 'apple', price:1500},
  {name : 'orange', price: 2000}
];

function findApple(element)  {
  if(element.name === 'apple') return true;
}

document.writeln(arr.findIndex(findApple)); // 1

19. filter

var arr2 = arr.filter(function (n) {
    return n % 5 == 0;
==> var arr2 = arr.filter((n)=>return n % 5 == 0);
// 5의 배수인 것만 포함한 배열로 탄생


20. 
TypeError: Cannot read property 'forEach' of null
    at /script.js:71:14
TypeError: Cannot read property 'push' of null
    at HTMLButtonElement.setWeb (/script.js:53:9)

forEach, push 쓰는 변수가 배열이 맞는지 콘솔 찍어서 확인

==>>> nList 를 콘솔했는데 null 인 경우도 있고, [] 경우도 있다. 뭐여...



});

*/

/*


*/
