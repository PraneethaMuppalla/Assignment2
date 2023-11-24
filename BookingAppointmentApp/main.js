const myForm = document.querySelector("#my-form");
const btn = document.querySelector(".btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const uLEl = document.querySelector("#users");

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
  li.textContent = `${each.name}: ${each.email}`;
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
