function paintObj(newDataObj){
  const li = document.createElement("li");
  li.id=newDataObj.id;
  const a = document.createElement("a");
  a.innerText = newDataObj.Name+"          "; 
  a.href = newDataObj.Url;
  const button = document.createElement("button");
  button.innerText="❌"; 
  button.addEventListener("click", deleteObj);
  li.appendChild(a); 
  li.appendChild(button);
  for (i=0; i<6; i++) {
     if (newDataObj.Category === Group[i])
      {
        const LIST = document.getElementById(List[i]);
        LIST.appendChild(li);
      }
  }
}
