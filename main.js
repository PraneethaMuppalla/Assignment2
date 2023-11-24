let form = document.getElementById("addForm");
let items = document.getElementById("items");
let inputEl = document.getElementById("inputEl");

//add list item
form.addEventListener("submit", addListItem);
//delete list item
items.addEventListener("click", deleteListItem);

function addListItem(e) {
  e.preventDefault();
  let liItem = document.createElement("li");
  liItem.className = "list-group-item";
  liItem.appendChild(document.createTextNode(inputEl.value));
  let delButton = document.createElement("button");
  delButton.className = "btn btn-danger btn-sm float-right delete";
  delButton.appendChild(document.createTextNode("X"));
  liItem.appendChild(delButton);
  items.appendChild(liItem);
}

function deleteListItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let liItem = e.target.parentElement;
      //console.log(liItem);
      items.removeChild(liItem);
    }
  }
}
