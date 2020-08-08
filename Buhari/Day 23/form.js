var form = document.querySelector("form");
var employeeId = document.querySelector("#empid");
var firstName = document.querySelector("#fName");
var lastName = document.querySelector("#lName");
var city = document.querySelector("#address");
var emailId = document.querySelector("#emailId");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updatebtn");
var tbody = document.querySelector("tbody");
var position;

function init() {
  var userList = getStorage();
  var empList = userList;
  insertRow(empList);
}
init();

function getUserInfo(event) {
  event.preventDefault();
  var userInfo = {
    employeeId: event.target.form[0].value,
    firstName: event.target.form[1].value,
    lastName: event.target.form[2].value,
    address: event.target.form[3].value,
    emailId: event.target.form[4].value,
  }
  if (
    userInfo.employeeId &&
    userInfo.firstName &&
    userInfo.lastName &&
    userInfo.address &&
    userInfo.emailId
  ) {
    var userList = getStorage();
    userList.push(userInfo);
    addStorage(userList);
    insertRow(userList);
    clearFields();
  } else {
    alert("Kindly Fill all the fields");
  }
}

function insertRow(data) {
  tbody.innerHTML = "";
  data.forEach(function (value) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${value.employeeId}</td>
    <td>${value.firstName}</td>
    <td>${value.lastName}</td>
    <td>${value.address}</td>
    <td>${value.emailId}</td>
    <td><button type ="button" id="edit-btn">Edit</button></td>
    <td><button type ="button" id="delete-btn">Delete</button></td>
     `;
    tbody.appendChild(tr);
  });
}
function clearFields() {
  employeeId.value = "";
  firstName.value = "";
  lastName.value = "";
  address.value = "";
  emailId.value = "";
}
tbody.addEventListener("click", showUserInput);

function showUserInput(event) {
  if (event.target.id == "edit-btn") {
    var employeeId = event.target.parentElement.parentElement.cells.item(0)
      .textContent;
    editUserField(employeeId);
  } else if (event.target.id == "delete-btn") {
    var employeeId = event.target.parentElement.parentElement.cells.item(0)
      .textContent;
    deleteField(employeeId);
    event.target.parentElement.parentElement.remove();
  }
}
function editUserField(data) {
  var employeeDetails = getStorage();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeId.value = user.employeeId;
      firstName.value = user.firstName;
      lastName.value = user.lastName;
      address.value = user.address;
      emailId.value = user.emailId;
      updateBtn.style.display = "block";
      submitBtn.style.display = "none";
      position = index;
    }
  });
}
function deleteField(data) {
  var employeeDetails = getStorage();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeDetails.splice(index, 1);
    }
  });
  addStorage(employeeDetails);
  alert("Form deleted succesfully");
}

updateBtn.addEventListener("click", updateEmployeeDetails);
function updateEmployeeDetails(event) {
  var obj = {
    employeeId: employeeId.value,
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    emailId: emailId.value,
  };
  var employeeDetails = getStorage();
  employeeDetails.splice(position, 1, obj);
  addStorage(employeeDetails);
  insertRow(employeeDetails);
  clearFields();
  alert("Form Updated successfully");
  updateBtn.style.display = "none";
  submitBtn.style.display = "block";
}
function addStorage(employeeDetails) {
  localStorage.setItem("userDetails", JSON.stringify(employeeDetails));
}
function getStorage() {
  if (localStorage.getItem("userDetails")) {
    var userList = localStorage.getItem("userDetails");
    return JSON.parse(userList);
  } else {
    localStorage.setItem("userDetails", "[]");
    var userList = localStorage.getItem("userDetails");
    return JSON.parse(userList);
  }
}
