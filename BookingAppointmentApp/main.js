const myForm = document.querySelector("#my-form");
const btn = document.querySelector(".btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const uLEl = document.querySelector("#users");

//delete user
uLEl.addEventListener("click", deleteUser);

function getAppointments() {
  let appointemntsString = localStorage.getItem("appointments");
  let parsedAppointemnts = JSON.parse(appointemntsString);
  if (parsedAppointemnts == null) {
    return [];
  } else {
    return parsedAppointemnts;
  }
}

let appointments = getAppointments();

function renderEachAppointment(each) {
  const li = document.createElement("li");
  li.id = each.id;
  li.appendChild(document.createTextNode(`${each.name}: ${each.email}`));

  let delButton = document.createElement("button");
  delButton.style.display = "inline";
  delButton.className = "del-btn";
  delButton.appendChild(document.createTextNode("X"));
  li.appendChild(delButton);
  uLEl.appendChild(li);
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("object");
  if (nameInput.value === "" || emailInput.value === "") {
    msg.textContent = "Please fill all the fields";
    msg.classList.add("error");
    setTimeout(() => {
      msg.classList.remove("error");
      msg.textContent = "";
    }, 3000);
  } else {
    let newAppointment = {
      id: emailInput.value,
      name: nameInput.value,
      email: emailInput.value,
    };
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    nameInput.value = "";
    emailInput.value = "";
    renderEachAppointment(newAppointment);
  }
});

appointments.map((each) => {
  renderEachAppointment(each);
});

function deleteUser(e) {
  if (e.target.classList.contains("del-btn")) {
    if (confirm("Are you sure?")) {
      const liItem = e.target.parentElement;
      const liId = liItem.id;
      let index = -1;
      appointments.map((each, i) => {
        if (each.id == liId) {
          index = i;
        }
      });
      appointments.splice(index, 1);
      localStorage.setItem("appointments", JSON.stringify(appointments));
      //console.log(id);
      uLEl.removeChild(liItem);
    }
  }
}
