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

const textContent = document.querySelectorAll("textarea");
const textButton = document.querySelectorAll("firstbox>button");
//array로 호출

let textList_1 = [];
let textList_2 = [];
//// 이 배열들을 한꺼번에 묶어서 index를 통해 한꺼번에 다 처리하는 걸로 할까??

const TEXTLIST_1 = "textList_1";
const TEXTLIST_2 = "textList_2";

/*
function whichButton(e){
  if ((e.target) === (textButton[0])){
    let X = textContent[0];
    setText(X);

  }
  else if ((e.target) === (textButton[1])){
    let X = textContent[1];
    setText(X);
  }
  else
    return;
}
*/



function saveText(X){
    localStorage.setItem(TEXTLIST_1,JSON.stringify(textList_1));
}

function saveText2(X){
    localStorage.setItem(TEXTLIST_2,JSON.stringify(textList_2));
}

function paintText(a){
  textContent[0].value = a.Content;
}
function paintText2(a){
  textContent[1].value = a.Content;
}

function setText1(){
  const X = textContent[0];
  const newTextdata1 = {Content: X.value, id: Date.now() };
  textList_1.push(newTextdata1);
  paintText(newTextdata1);
  saveText(X);
}

function setText2(){
  const X = textContent[1];
  const newTextdata2 = {Content: X.value, id: Date.now() };
  textList_2.push(newTextdata2);
  paintText2(newTextdata2);
  saveText2(X);
}



textButton[0].addEventListener("click", setText1);
textButton[1].addEventListener("click", setText2);


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




