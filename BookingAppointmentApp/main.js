// AXIOS INSTANCE
const axiosInstance = axios.create({
  baseURL: "https://crudcrud.com/api/cb4e05727dc1449fbb3028b885ab6ddd",
});
// axiosInstance.get('/comments').then(res => showOutput(res));

const myForm = document.querySelector("#my-form");
const btn = document.querySelector(".btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const uLEl = document.querySelector("#users");

//delete user
//uLEl.addEventListener("click", deleteUser);
window.addEventListener("DOMContentLoaded", getAppointments);

function getAppointments() {
  axiosInstance
    .get("/users")
    .then((res) => {
      //console.log(res.data);
      res.data.map((each) => renderEachAppointment(each));
    })
    .catch((e) => {
      if (e.response) {
        if (e.response.status === 404) {
          alert("Something went wrong");
        }
      } else if (e.request) {
        console.log(e.request);
      } else {
        console.log(e);
      }
    });
}

function renderEachAppointment(each) {
  const li = document.createElement("li");
  li.id = each._id;
  li.appendChild(document.createTextNode(`${each.name}: ${each.email}`));

  let delButton = document.createElement("button");
  delButton.className = "del-btn";
  delButton.appendChild(document.createTextNode("X"));
  delButton.onclick = () => {
    deleteUser(li.id);
  };
  let editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.appendChild(document.createTextNode("Edit"));
  editButton.onclick = () => {
    editUser(li.id);
  };
  li.appendChild(delButton);
  li.appendChild(editButton);
  uLEl.appendChild(li);
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
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
    // appointments.push(newAppointment);
    // localStorage.setItem("appointments", JSON.stringify(appointments));
    axiosInstance
      .post("/users", newAppointment)
      .then((res) => {
        renderEachAppointment(res.data);
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status === 404) {
            alert("Something went wrong");
          }
        } else if (e.request) {
          if (e.request.status === 404) {
            alert("Something went wrong");
          }
        } else {
          console.log(e);
        }
      });
    nameInput.value = "";
    emailInput.value = "";
  }
});

function deleteUser(id) {
  console.log("clicked");
  //   if (e.target.classList.contains("del-btn")) {
  //     if (confirm("Are you sure?")) {
  //       const liItem = e.target.parentElement;
  //       const liId = liItem.id;
  //       let index = -1;
  //       appointments.map((each, i) => {
  //         if (each.id == liId) {
  //           index = i;
  //         }
  //       });
  //       appointments.splice(index, 1);
  //       localStorage.setItem("appointments", JSON.stringify(appointments));
  //       //console.log(id);
  //       uLEl.removeChild(liItem);
  //     }
  //   } else if (e.target.classList.contains("edit-btn")) {
  //     if (confirm("Are you sure?")) {
  //       const liItem = e.target.parentElement;
  //       const liId = liItem.id;
  //       let index = -1;
  //       appointments.map((each, i) => {
  //         if (each.id == liId) {
  //           index = i;
  //         }
  //       });
  //       let editedAppt = appointments[index];
  //       nameInput.value = editedAppt.name;
  //       emailInput.value = editedAppt.email;
  //       appointments.splice(index, 1);
  //       localStorage.setItem("appointments", JSON.stringify(appointments));
  //       //console.log(id);
  //       uLEl.removeChild(liItem);
  //     }
  //   }
}

function editUser(id) {
  console.log("edit clicked");
}
