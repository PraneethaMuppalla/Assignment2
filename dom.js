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
// let items = document.getElementsByClassName("list-group-item");
// console.log(items[0]);
// items[2].style.backgroundColor = "#00ff00";
// for (let item of items) {
//   item.style.fontWeight = "bold";
// }

// *** GETELEMENTSBYTAGNAME *** //
// let li = document.getElementsByTagName("li");
// //console.log(items[0]);
// li[1].textContent = "Hello";
// li[1].style.fontWeight = "bold";
// for (let item of li) {
//   item.style.backgroundColor = "#f4f4f4";
// }

// *** QUERYSELECTOR *** //
let header = document.querySelector("#main-header");
header.style.borderBottom = "4px solid #ccc";
let inputEl = document.querySelector("input");
inputEl.value = "Hello World!";
let submitBtn = document.querySelector('input[type="submit"]');
submitBtn.value = "SEND";
let firstItem = document.querySelector(".list-group-item");
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
//secondItem.style.backgroundColor = "#00ff00";
let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
//thirdItem.style.display = "none";
let lastItem = document.querySelector(".list-group-item:last-child");

// *** QUERYSELECTORALL *** //
let listItems = document.querySelectorAll("li");
listItems[1].style.color = "green";

let oddListItems = document.querySelectorAll("li:nth-child(odd)");
oddListItems.forEach((each) => (each.style.background = "green"));
