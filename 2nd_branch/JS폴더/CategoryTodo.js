// localStorage에 SList 배열을 Json형태로 문자열화해서 저장
// KEY 값은 SITELIST
function saveObj(){
  localStorage.setItem(SITELIST,JSON.stringify(SList));
} 

// submit 함수 //event.preventDefault(); 가 필요없다. submit이 아니니
function submitObj(){
  // 값들이 모두 올바르게 설정되었다면
  if ((nameINPUT.value !=="") && (urlINPUT.value!=="") && (category.value !==""))  { 
    // localStorage에 저장할 객체를 만들어준다.
    const newDataObj={Name:nameINPUT.value, Url: urlINPUT.value, Category: category.value, id:Date.now()  
  };
    // 지금 값들을 화면에서 reset 한다.
    nameINPUT.value=""; 
    urlINPUT.value="";
    category.value="";
    
    SList.push(newDataObj); // 배열에 넣어준다
    paintObj(newDataObj); // 배열 화면 출력
    saveObj(); // 배열을 localStorage에 저장
} 
  else{
    alert("값을 제대로 작성해주세요.");
  }
}

// 클릭할 때, submit 한다.
setButton.addEventListener("click", submitObj);

// localStorage에 저장된 string화된 배열을 불러온다.
const savedData=localStorage.getItem(SITELIST);

// 그 배열이 null 값이 아니라면 JSON 분할해주고 각각에 paint 함수 적용
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
