//array로 호출
const textContent = document.querySelectorAll("textarea");
const textButton = document.querySelectorAll(".textbutton");


let textList_1 = [];
let textList_2 = [];
//// 이 배열들을 한꺼번에 묶어서 index를 통해 한꺼번에 다 처리하는 걸로 할까??

const TEXTLIST_1 = "textList_1";
const TEXTLIST_2 = "textList_2";

// localStorage에 저장 //JSON 문자열화
const saveText =((X)=>localStorage.setItem(TEXTLIST_1,JSON.stringify(textList_1)));
const saveText2 = ((X)=>localStorage.setItem(TEXTLIST_2,JSON.stringify(textList_2)));

// 화면 출력
const paintText = ((a)=>textContent[0].value = a.Content);
const paintText2 = ((a)=>textContent[1].value = a.Content);

function setText1(){
  textList_1.pop();
  localStorage.removeItem(TEXTLIST_1);
  const X = textContent[0]; 
  const newTextdata1 = {Content: X.value, id: Date.now() };
  textList_1.push(newTextdata1);
  paintText(newTextdata1);
  saveText(X);
}

function setText2(){
  localStorage.removeItem(TEXTLIST_2);
  const X = textContent[1];
  const newTextdata2 = {Content: X.value, id: Date.now() };
  textList_2.push(newTextdata2);
  paintText2(newTextdata2);
  saveText2(X);
}

//이벤트리스너

textButton[0].addEventListener("click", setText1);
textButton[1].addEventListener("click", setText2);

//데이터 불러오기
const getTextData1 = localStorage.getItem(TEXTLIST_1);
const getTextData2 = localStorage.getItem(TEXTLIST_2);
const getTextData = [getTextData1, getTextData2];

function getText(X){
  if (X !== null){
    textContent[getTextData.indexOf(X)].value = JSON.parse(X)[0].Content;
  }
}

for (i=0; i<getTextData.length;i++){
  getText(getTextData[i]);
}

// 배열의 각 요소에 함수를 적용하면서 각 요소를 함수의 매개변수로 넘길 수 없나???


/* 
1. const
2. let List = []

save
paint

function set--- {

}
addeventlistner()

호출한 대상이 누구인지: e.target


getdata

if List !==null
 
button.textcontent = "수정"


- 수정(delete 대신)


기존 메모들 내용 그대로(getdata 하고, 이를 textarea.value에)
입력하고나서 수정버튼 누르면 새로운 배열 만들기


*/


/*
function whichButton(e){
  if ((e.target) === (textButton[0])){
    const X = textContent[0];
    setText(X);

  }
  else if ((e.target) === (textButton[1])){
    const X = textContent[1];
    setText(X);
  }
  else
    return;
}
*/

//}


/*
const getTextData = localStorage.getItem(TEXTLIST_1);
const getTextData2 = localStorage.getItem(TEXTLIST_2);

if (getTextData !== null){
  const parsedText1 = JSON.parse(getTextData)[0];
  textContent[0].value = parsedText1.Content;
} 

if (getTextData2 !== null){
  const parsedText2 = JSON.parse(getTextData2)[0];
  textContent[1].value = parsedText2.Content;
} 
*/
