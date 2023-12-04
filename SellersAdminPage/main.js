//axios instance
let axiosInstance = axios.create({
  baseURL: "https://crudcrud.com/api/76c88da219f7458d86a4ddeb48b54681",
});

let totalSum = 0;
//dom elemets
let msgEl = document.getElementById("msg");
let priceEl = document.getElementById("price");
let productEl = document.getElementById("product");
let formEl = document.getElementById("form");
let productsList = document.getElementById("productsList");
let sumEl = document.getElementById("sum");

function updateSum() {
  console.log("hit" + totalSum);
  sumEl.textContent = `Rs. ${totalSum.toFixed(2)}`;
}

function deleteProduct(id, price) {
  if (confirm("Are you sure?")) {
    const liItem = document.getElementById(id);
    axiosInstance
      .delete(`/products/${id}`)
      .then((res) => {
        productsList.removeChild(liItem);
        totalSum -= parseFloat(price);
        updateSum();
      })
      .catch((e) => console.error(error));
  }
}

function renderEachProduct(each) {
  let newLiItem = `
        <li id=${each._id} class="list-group-item fw-bold">${each.product}- Rs.${each.price}
            <button class="btn btn-danger btn-sm" style="float:right;" onclick="deleteProduct('${each._id}','${each.price}')">X</button>
        </li>`;
  productsList.innerHTML += newLiItem;
}

function getProducts() {
  axiosInstance.get(`/products`).then((res) => {
    res.data.map((eachProduct) => {
      totalSum += parseFloat(eachProduct.price);
      renderEachProduct(eachProduct);
    });
    updateSum();
  });
}

function addProduct(e) {
  e.preventDefault();
  if (priceEl.value === "" || productEl.value === "") {
    msgEl.textContent = "Please fill all the fields";
    msgEl.className = "bg-danger-subtle p-1 mb-2";
    setTimeout(() => {
      msgEl.className = "";
      msgEl.textContent = "";
    }, 2000);
  } else {
    let newProduct = {
      price: priceEl.value,
      product: productEl.value,
    };
    axiosInstance
      .post(`/products`, newProduct)
      .then((res) => {
        renderEachProduct(res.data);
        priceEl.value = "";
        productEl.value = "";
        totalSum += parseFloat(res.data.price);
        updateSum();
      })
      .catch((e) => {
        console.error(error);
      });
  }
}

window.addEventListener("DOMContentLoaded", getProducts);
formEl.addEventListener("submit", addProduct);
