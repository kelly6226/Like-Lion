const addList = document.getElementById("addList");
const addButton = document.getElementById("addButton");
const showList = document.getElementById("showList");

addButton.addEventListener("click", function () {
  const list = document.createElement("li");
  if (!addList.value) {
    alert("추가될 할 일이 없습니다.");
  } else {
    list.innerText = addList.value;
    showList.appendChild(list);
    addList.value = "";
  }

  list.addEventListener("dblclick", function () {
    showList.removeChild(list);
  });

  list.addEventListener("click", function () {
    list.style.textDecorationLine = "line-through";
  });
});
