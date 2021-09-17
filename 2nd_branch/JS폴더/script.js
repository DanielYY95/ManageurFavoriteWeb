// localStorage에 SList 배열을 Json형태로 문자열화해서 저장
// KEY 값은 SITELIST
function saveObj(){
  localStorage.setItem(SITELIST,JSON.stringify(SList));
} 

// 
function submitObj(){
  event.preventDefault();
  if ((nameINPUT.value !=="") && (urlINPUT.value!=="") && (category.value !==""))  { 
    const newDataObj={Name:nameINPUT.value, Url: urlINPUT.value, Category: category.value, id:Date.now()  
  };
    nameINPUT.value=""; 
    urlINPUT.value="";
    category.value="";
    SList.push(newDataObj); 
    paintObj(newDataObj);
    saveObj(); 
} 
  else{
    alert("값을 제대로 작성해주세요.");
  }
}

setButton.addEventListener("click", submitObj);

const savedData=localStorage.getItem(SITELIST);

if (savedData !==null){ 
	const parsedList = JSON.parse(savedData); 
	SList= parsedList;   
	parsedList.forEach(paintObj);
}



// JSON.parse : 인수로 전달받은 문자열을 자바스크립트 객체로 변환하여 반환하는 메서드
/* parsedList는 배열 객체라는 것을 알 수 있다. console.log(parsedList); 하면

[ { Name: '2', Url: '2', Category: '개발자공부정리', id: 1631768785694 },
  { Name: '2', Url: '32', Category: '개발참고', id: 1631853835846 },
  { Name: '12', Url: '231', Category: '개발자공부정리', id: 1631853927357 },
  { Name: '87', Url: '87', Category: '개인체크', id: 1631854808820 } ]

*/ //이런 식으로 나온다.
// forEach : 주어진 함수를 배열 요소마다 실행 
