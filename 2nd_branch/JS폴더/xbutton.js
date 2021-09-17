function deleteObj(){
  
  if (!confirm("정말 삭제하시겠습니까?")) {
            alert("취소(아니오)를 누르셨습니다.");
            return; } 
  else {
  const li= event.target.parentElement; //target이 대상의 부모
  li.remove();
  SList=SList.filter((toDo)=>toDo.id !==parseInt(li.id));
  saveObj();
  alert("즐겨찾기가 삭제되었습니다."); 
  }

}


// if (confirm(메시지))
