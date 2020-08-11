//CURD OPERATION WITH USING AN EMPTY ARRAY

// Interacting With HTML Using DOM to Collect the data's from there
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

// Getting User Form Inputs Data
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
// Inserting the User Inputs Data in Table after submiting the form
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

// While submiting should empty the Textfield
function clearFields() {
  employeeId.value = "";
  firstName.value = "";
  lastName.value = "";
  address.value = "";
  emailId.value = "";
  password.value = "";
}

// Attaching EvenListener to show the inputs in the TextField Box to Edit or Delete and to Update again
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

// To Edit the input Data's
function editUserField(data) {
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
//To delete the input Data's
function deleteField(data) {
  var employeeDetails = getStorage();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeDetails.splice(index, 1);
    }
  });
  alert("Form deleted succesfully");
}

// To Update the  edited Data
updateBtn.addEventListener("click", updateEmployeeDetails);

function updateEmployeeDetails(event) {
  var obj = {
    employeeId: employeeId.value,
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    emailId: emailId.value,
  };
  employeeDetails.splice(position, 1, obj);
  insertRow(employeeDetails);
  clearFields();
  alert("Form Updated successfully");
  updateBtn.style.display = "none";
  submitBtn.style.display = "block";
}
