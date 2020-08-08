var form = document.querySelector("form");
var empName = document.querySelector("#empName");
var empId = document.querySelector("#empId");
var salary = document.querySelector("#salary");
var submitBtn = document.querySelector(".submit-btn");
var updateBtn = document.querySelector(".update-btn");
var tbody = document.querySelector("tbody");
var position;

function init () {
 
  document.addEventListener('DOMContentLoaded',Ui.empDetail)
}
init()

function User(empName, empId, salary) {
  this.empName = empName;
  this.empId = empId;
  this.salary = salary;
}

function Ui() {}

Ui.empDetail = function(){
  var userList = Store.getDataFromLocal();
  userList.forEach(function(users){
Ui.addUser*(users);
  });
}

Ui.addUser = function (users) {
  tbody.innerHTML = "";
  users.forEach(function (value) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${value.empName}</td>
    <td>${value.empId}</td>
    <td>${value.salary}</td>
    <td><button type ="button" class="style" id="edit-btn">Edit</button></td>
    <td><button type ="button" class="style" id="delete-btn">Delete</button></td>`;
    tbody.appendChild(tr);
  });
  Ui.clearFields();
  
};

Ui.clearFields = function () {
  empName.value = "";
  empId.value = "";
  salary.value = "";
};

Ui.deleteEmployee = function (data) {
  var empDetails = Store.getDataFromLocal();
  empDetails.forEach(function (user, index) {
    if (user.empId == data) {
      empDetails.splice(index, 1);
    }
  });
  Store.addDataToLocal(empDetails);
};

Ui.editEmployee = function (id) {
  var empDetails = Store.getDataFromLocal();
  empDetails.forEach(function (user, index) {
    if (user.empId == id) {
      empName.value = user.empName;
      empId.value = user.empId;
      salary.value = user.salary;
      updateBtn.style.display = "block";
      submitBtn.style.display = "none";
      position = index;
    }
  });
};

Ui.upadteEmployee = function () {
  var obj = {
    empName: empName.value,
    empId: empId.value,
    salary: salary.value,
  };
  var empDetails = Store.getDataFromLocal();
  empDetails.splice(position, 1, obj);
  Store.addDataToLocal(empDetails);
  Ui.addUser(empDetails);
  updateBtn.style.display = "none";
  submitBtn.style.display = "block";
  Ui.clearFields();
};

submitBtn.addEventListener("click", userDetails);
function userDetails(event) {
  event.preventDefault();
  var employeeName = empName.value;
  var employeeId = empId.value;
  var employeesalaray = salary.value;
  var userInfo = new User(employeeName, employeeId, employeesalaray);
  var userList = Store.getDataFromLocal();
  userList.push(userInfo);
  Store.addDataToLocal(userList);
  Ui.addUser(userList);
}

tbody.addEventListener("click", onEdit);
function onEdit(event) {
  if (event.target.id == "delete-btn") {
    var empId = event.target.parentElement.parentElement.cells.item(1)
      .textContent;
    Ui.deleteEmployee(empId);
    event.target.parentElement.parentElement.remove();
  } else if (event.target.id == "edit-btn") {
    var empId = event.target.parentElement.parentElement.cells.item(1)
      .textContent;
    Ui.editEmployee(empId);
  }
}

updateBtn.addEventListener("click", updateDetails);
function updateDetails(event) {
  Ui.upadteEmployee();
}

function Store() {}

Store.addDataToLocal = function (empDetails) {
  localStorage.setItem("user", JSON.stringify(empDetails));
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