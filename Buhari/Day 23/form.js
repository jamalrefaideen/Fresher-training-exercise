var form = document.querySelector("form");
var employeeId = document.querySelector("#empid");
var firstName = document.querySelector("#fName");
var lastName = document.querySelector("#lName");
var address = document.querySelector("#address");
var emailId = document.querySelector("#mailId");
var password = document.querySelector("#psw");
var submitBtn = document.querySelector(".submitbtn");
var tbody = document.querySelector("tbody");
var employeeDetails = [];

function getUserInfo(event) {
  event.preventDefault();

  var userInfo = {
    employeeId: event.target.form[0].value,
    firstName: event.target.form[1].value,
    lastName: event.target.form[2].value,
    address: event.target.form[3].value,
    emailId: event.target.form[4].value,
    password: event.target.form[5].value,
  };
  if (
    userInfo.employeeId &&
    userInfo.firstName &&
    userInfo.lastName &&
    userInfo.address &&
    userInfo.emailId &&
    userInfo.password
  ) {
    employeeDetails.push(userInfo);
    insertRow(employeeDetails);
  }
}
function insertRow(employeeDetails) {
  tbody.innerHTML = "";
  employeeDetails.forEach(function (employee) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${employee.employeeId}</td>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.address}</td>
    <td>${employee.emailId}</td>
    <td>${employee.password}</td>
    <td><button type ="button" id="edit-btn">Edit</button></td>
    <td><button type ="button" id="delete-btn">Update</button></td>
     `;
    tbody.appendChild(tr);
  });
}

function clearFields() {
    employeeId.value="";
    firstName.value="";
    lastName.value="";
    address.value="";
    emailId.value="";
    password.value="";
}
