// console.log(document.URL);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document);
// console.log(document.links);
//console.log(document.forms[0]);
document.title = "FirstDOMAssignment";

// *** GETELEMENTBYID *** //

// let headerEl = document.getElementById("main-header");
// headerEl.style.borderBottom = "3px solid #000";
// let mainContainer = document.getElementById("main");
// //console.log(mainContainer.firstChild);
// let addItemsEl = mainContainer.firstElementChild;
// addItemsEl.style.fontWeight = "bold";
// addItemsEl.style.color = "rgb(0,255,0)";

// *** GETELEMENTSBYCLASSNAME *** //
let items = document.getElementsByClassName("list-group-item");
console.log(items[0]);
items[2].style.backgroundColor = "#00ff00";
for (let item of items) {
  item.style.fontWeight = "bold";
}
