// CRUD OPERATIONS USING CONSTRUCTOR AND LOCAL STORAGE

// NOTE : PARTIALY IMPLEMENTED THE CLASS CONSTRUCTOR METHOD

// Interacting With HTML Using DOM
var form = document.querySelector("form");
var employeeId = document.querySelector("#empId");
var firstName = document.querySelector("#fName");
var lastName = document.querySelector("#lName");
var address = document.querySelector("#address");
var emailId = document.querySelector("#emailId");
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
function User(employeeId, firstName,lastName, address, emailId) {
  this.employeeId = employeeId;
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.emailId = emailId;
}

function Ui() {}

Ui.insertUserInfo = function (users) {
  tbody.innerHTML = "";
  users.forEach(function (value) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${value.employeeId}</td>
    <td>${value.firstName}</td>
    <td>${value.lastName}</td>
    <td>${value.address}</td>
    <td>${value.emailId}</td>
    <td><button type ="button" id="edit-btn">Edit</button></td>
    <td><button type ="button" id="delete-btn">Delete</button></td>`;
    tbody.appendChild(tr);
  });
  Ui.clearUserField();
};

Ui.clearUserField = function () {
  employeeId .value = "";
  firstName.value = "";
  lastName.value="";
  address.value = "";
  emailId.value = "";
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
    if (user.employeeId  == data) {
      employeeId .value = user.employeeId ;
      firstName.value = user.firstName;
      lastName.value = user.lastName;
      address.value = user.address;
      emailId.value = user.emailId;
      updateBtn.style.display = "block";
      submitBtn.style.display = "none";
      position = index;
    }
  });
};

Ui.upadteEmployeeDetails = function () {
  var obj = {
    employeeId : employeeId .value,
    firstName: firstName.value,
    lastName:lastName.value,
    address: address.value,
    emailId:emailId.value,

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
  var employeeId  = employeeId.value;
  var firstName = firstName.value;
  var lastName = lastName.value;
  var address = address.value;
  var emailId = emailId.value


  if (employeeId  === "" && firstName ==="" && lastName === "" && address ==="" && emailId === "") {
    alert("Please Kidly fill all fields")
  } else {
    var userDetails = new User(employeeId , firstName,lastName, address, emailId);
    var userList = Store.getDataFormLocalStorage();
    userList.push(userDetails);
    Store.addDataToLocalStorage(userList);
    Ui.insertUserInfo(userList);
    alert ("Registered Succesfully")
  }
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
    event.target.parentElement.parentElement.remove();
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
  Ui.insertUserInfo(userList);
}
init();
