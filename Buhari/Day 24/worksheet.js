// CRUD OPERATIONS USING CONSTRUCTOR OJECTS 
//without Using Local storage 


// Interacting With HTML Using DOM
var form = document.querySelector("form");
var employeeId = document.querySelector("#employeeId");
var fullName = document.querySelector("#fullName");
var address = document.querySelector("#address");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updatebtn");
var tbody = document.querySelector("tbody");

var employeeDetails = [];

// CREATING FUNCTION CONSTRUCTOR (BLUEPRINT)
function User(employeeName, fullName, address) {
  this.employeeName = employeeName;
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
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeDetails.splice(index, 1);
    }
  });
  alert("Warning - All data will be Erased ");
};

Ui.editUserfield = function (data) {
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
  employeeDetails.splice(position, 1, obj);
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
  employeeDetails.push(userDetails);
  Ui.insertUserInfo(employeeDetails);
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
