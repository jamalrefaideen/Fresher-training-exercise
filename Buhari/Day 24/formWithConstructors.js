// CRUD OPERATIONS USING CONSTRUCTOR OJECTS 

// Interacting With HTML Using DOM
var form = document.querySelector("form");
var employeeId = document.querySelector("#employeeId");
var fullName = document.querySelector("#fullName");
var address = document.querySelector("#address");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updatebtn");
var tbody = document.querySelector("tbody");
var position;

// var employeeDetails = [];


Store.addDataToLocalStorage = function (employeeDetails) {
  localStorage.setItem("user", JSON.stringify(employeeDetails));
};

Store.getDataFormLocalStorage = function () {
  if (localStorage.getItem("user")) {
    var userList = localStorage.getItem("user");
    return JSON.parse(userList);
  } else {
    localStorage.setItem("user", "[]");
    var userList = localStorage.getItem("user");
    return JSON.parse(userList);
  }
};


// CREATING FUNCTION CONSTRUCTOR (BLUEPRINT)
function User(employeeName, fullName, address) {
  this.employeeId = employeeName;
  this.fullName = fullName;
  this.address = address;
}

function Ui() {}

Ui.insertUserInfo = function (users) {
  tbody.innerHTML = "";
  users.forEach(function (value) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${value.employeeId}</td>
    <td>${value.fullName}</td>
    <td>${value.address}</td>
    <td><button type ="button" id="edit-btn">Edit</button></td>
    <td><button type ="button" id="delete-btn">Delete</button></td>`;
    tbody.appendChild(tr);
  });
  Ui.clearUserField();
};

Ui.clearUserField = function () {
  employeeId.value = "";
  fullName.value = "";
  address.value = "";
};

Ui.deleteUserField = function (data) {
  var employeeDetails = Store.getDataFormLocalStorage();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeDetails.splice(index, 1);
    }
  });
  alert("Warning - All data will be Erased ");
  Store.addDataToLocalStorage(employeeDetails);
};

Ui.editUserfield = function (data) {
  var employeeDetails = Store.getDataFormLocalStorage();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeId.value = user.employeeId;
      fullName.value = user.fullName;
      address.value = user.address;
      updateBtn.style.display = "block";
      submitBtn.style.display = "none";
      position = index;
    }
  });
};

Ui.upadteEmployeeDetails = function () {
  var obj = {
    employeeId: employeeId.value,
    fullName: fullName.value,
    address: address.value,
  };
  var employeeDetails = Store.getDataFormLocalStorage();
  employeeDetails.splice(position, 1, obj);
  Store.addDataToLocalStorage(employeeDetails);
  Ui.insertUserInfo(employeeDetails);
  alert("Form Data Updated successfully");
  updateBtn.style.display = "none";
  submitBtn.style.display = "block";
  Ui.clearFields();
};

submitBtn.addEventListener("click", getUserInfo);

function getUserInfo(event) {
  event.preventDefault();
  var empId = employeeId.value;
  var name = fullName.value;
  var city = address.value;
  var userDetails = new User(empId, name, city);
  var userList = Store.getDataFormLocalStorage();
  userList.push(userDetails);
  Store.addDataToLocalStorage(userList)
  Ui.insertUserInfo(userList);
  alert ("Registered Succesfully")
}

tbody.addEventListener("click", showUserInput);

function showUserInput(event) {
  if (event.target.id == "delete-btn") {
    var employeeId = event.target.parentElement.parentElement.cells.item(0)
      .textContent;
    Ui.deleteUserField(employeeId);
    event.target.parentElement.parentElement.remove();
  } else if (event.target.id == "edit-btn") {
    var employeeId = event.target.parentElement.parentElement.cells.item(0)
      .textContent;
    Ui.editUserfield(employeeId);
  }
}

updateBtn.addEventListener("click", updateUserField);

function updateUserField(event) {
  Ui.upadteEmployeeDetails();
}

// Setting UserData's Information to Local Storage

function Store() {}

//Preventing Data's  in Ui from refreshing or reloding page 

function init() {
  var userList = Store.getDataFormLocalStorage();
  // var empList = userList;
  Ui.insertUserInfo(userList);
}
init();
