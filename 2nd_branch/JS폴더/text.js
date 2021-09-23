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

function saveText(X){
  if(textContent[0])
    localStorage.setItem(TEXTLIST_1,JSON.stringify(textList_1));
  else
    localStorage.setItem(TEXTLIST_2,JSON.stringify(textList_2));
}

function paintText(a){
  textContent[0].value = a.Content;

}

function setText(X){
  const newTextdata = {Content: X.value, id: Date.now() };
  if (X = textContent[0]){
  textList_1.push(newTextdata);
  } else {
  textList_2.push(newTextdata);
  }
  paintText(newTextdata);
  saveText(X);
}


textButton[0].addEventListener("click", whichButton);
textButton[1].addEventListener("click", whichButton);

const getTextData = localStorage.getItem(TEXTLIST_1);


if (getTextData !== null){
  const XXX = JSON.parse(getTextData)[0];
  textContent[0].value = XXX.Content;
} 






