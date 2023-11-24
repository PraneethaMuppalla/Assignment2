let form = document.getElementById("addForm");
let items = document.getElementById("items");
let inputEl = document.getElementById("inputEl");
let inputEl2 = document.getElementById("inputEl2");
let filterEl = document.getElementById("filter");

//add list item
form.addEventListener("submit", addListItem);
//delete list item
items.addEventListener("click", deleteListItem);
//filter list items
filterEl.addEventListener("keyup", filterListItems);

function addListItem(e) {
  e.preventDefault();
  let liItem = document.createElement("li");
  liItem.className = "list-group-item";
  liItem.appendChild(
    document.createTextNode(`${inputEl.value} ${inputEl2.value}`)
  );
  let delButton = document.createElement("button");
  delButton.className = "btn btn-danger btn-sm float-right delete";
  delButton.appendChild(document.createTextNode("X"));
  let editButton = document.createElement("button");
  editButton.className = "btn btn-info btn-sm float-right mr-2 edit";
  editButton.appendChild(document.createTextNode("Edit"));
  liItem.appendChild(delButton);
  liItem.appendChild(editButton);
  items.appendChild(liItem);
  inputEl.value = "";
  inputEl2.value = "";
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

function filterListItems(e) {
  let searchText = e.target.value.toLowerCase();
  const listItems = items.getElementsByTagName("li");
  //console.log(searchText);
  Array.from(listItems).forEach(function (item) {
    let firstName = item.firstChild.textContent.toLowerCase();
    //console.log("first" + firstName.indexOf(searchText));

    if (firstName.indexOf(searchText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
