// 삭제 함수
function deleteObj(){
  // 예/아니오 알림
  if (!confirm("정말 삭제하시겠습니까?")) {
            alert("취소(아니오)를 누르셨습니다.");
            return; } 
  
  // '예'라고 클릭하면 요소를 삭제한다.
  else {
  const byeli= event.target.parentElement; 
  byeli.remove();
  // 새로운 배열은 지역변수 li의 id와 일치하지않는 것들로 filter된다.
  // filter((매개변수)=>조건식)
  SList=SList.filter((toDo)=>toDo.id !==parseInt(byeli.id));
  // 다시 localStorage에 저장해준다.
  saveObj();
  alert("즐겨찾기가 삭제되었습니다."); 
  }

}


