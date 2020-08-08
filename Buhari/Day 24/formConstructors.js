var form = document.querySelector("form");
var employeeId = document.querySelector("#empId");
var employeeName = document.querySelector("#empName");
var employeeAddress = document.querySelector("#empAddress");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updatebtn");
var tbody = document.querySelector("tbody");
var position;

function init() {
  document.addEventListener("DOMContentLoaded", Ui.employeeDetails)
}
init()

function UserDetails(employeeId, employeeName, employeeAddress) {
  this.employeeId = employeeId;
  this.employeeName = employeeName;
  this.employeeAddress = employeeAddress;
}

function Ui() {}

Ui.employeeDetails = function () {
  var userList = Store.getDataFromLocal();
  userList.forEach(function (users) {
    Ui.addUser*(users);
  });
};

Ui.addUser = function (users) {
  tbody.innerHTML = "";
  users.forEach(function (value) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
  <td>${value.employeeId}</td>
  <td>${value.employeeName}</td>
  <td>${value.employeeAddress}</td>
  <td><button type ="button" id="edit-btn">Edit</button></td>
  <td><button type ="button" id="delete-btn">Delete</button></td>`;
    tbody.appendChild(tr);
  });
  Ui.clearUserField();
};
Ui.clearUserField = function () {
  employeeId.value = "";
  employeeName.value = "";
  employeeAddress.value = "";
};

Ui.deleteUserField = function (data) {
  var employeeDetails = Store.getDataFromLocal();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeDetails.splice(index, 1);
    }
  });
  Store.addDataToLocal(employeeDetails);
};

Ui.editUserField = function (id) {
  var employeeDetails = Store.getDataFromLocal();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == id) {
      employeeId.value = user.employeeId;
      employeeName.value = user.employeeName;
      employeeAddress.value = user.employeeAddress;
      updateBtn.style.display = "block";
      submitBtn.style.display = "none";
      position = index;
    }
  });
};

Ui.updateEmployeeDetails = function () {
  var obj = {
    employeeId: employeeId.value,
    employeeName: employeeName.value,
    employeeAddress: employeeAddress.value,
  };
  var employeeDetails = Store.getDataFromLocal();
  employeeDetails.splice(position, 1, obj);
  Store.addDataToLocal(employeeDetails);
  Ui.addUser(employeeDetails);
  updateBtn.style.display = "none";
  submitBtn.style.display = "block";
  Ui.clearField();
};

submitBtn.addEventListener("click", getUserDetails);

function getUserDetails(event) {
  event.preventDefault();
  var employeeId = employeeId.value;
  var employeeName = employeeName.value;
  var employeeAddress = employeeAddress.value;
  var userInfo = new UserDetails(employeeId, employeeName, employeeAddress);
  var userList = Store.getDataFromLocal();
  userList.push(userInfo);
  Store.addDataToLocal(userList);
  Ui.addUser(userList);
}

tbody.addEventListener("click", onEditShowUSerInput);
function onEditShowUSerInput(event) {
  if (event.target.id == "edit-btn") {
    var employeeId = event.target.parentElement.parentElement.cells.item(0)
      .textContent;
    Ui.editUserField(employeeId);
  } else if (event.target.id == "delete-btn") {
    var employeeId = event.target.parentElement.parentElement.cells.item(0)
      .textContent;
    Ui.deleteUserField(employeeId);
    event.target.parentElement.parentElement.remove();
  }
}

updateBtn.addEventListener("click", updateDetails);
function updateDetails(event) {
  Ui.upadteEmployee();
}

function Store() {}

Store.addDataToLocal = function (employeeDetails) {
  localStorage.setItem("user", JSON.stringify(employeeDetails));
};

Store.getDataFromLocal = function () {
  if (localStorage.getItem("user")) {
    var userList = localStorage.getItem("user");
    return JSON.parse(userList);
  } else {
    localStorage.setItem("user", "[]");
    var userList = localStorage.getItem("user");
    return JSON.parse(userList);
  }
};
