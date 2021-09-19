// localStorage에 저장된 데이터를 화면에 출력하는 함수
function paintObj(newDataObj){
  // li와 a, button 생성 및 기타 속성들 설정 
  const li = document.createElement("li");
  li.id=newDataObj.id;
  const a = document.createElement("a");
  a.innerText = newDataObj.Name+" "; 
  a.href = newDataObj.Url;
  a.target = "_blank";
  const button = document.createElement("button");
  button.innerText="❌"; 
  button.style ="float:right; margin-top:4px;"
  button.addEventListener("click", deleteObj);
  li.appendChild(a); 
  li.appendChild(button);

  // for문 반복 => 아래 구현부들을 계속 반복해서 작성해주는 것과 같다. 
  for (i=0; i<=5; i++) {
     if (newDataObj.Category === Group[i])
      {
        const LIST = document.querySelector("."+List[i]); //"." 센스.... //여기서 List는 지역변수
        LIST.appendChild(li);
      }
  }
}

