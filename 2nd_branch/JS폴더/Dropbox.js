const Category = document.getElementById("category");
const Group = ["개인체크", "개발자공부정리", "개발공부", "개발참고", "동기부여", "취미"];

const List = ["check_list", "summary_list", "study_list", "refer_list", "motivation_list", "hobby_list"]

const X = Category.value;

function plsSelect(){
  if (X === "")
    {
      alert ("선택해주세요.");
      return false;
    }
}
