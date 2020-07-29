var form = document.querySelector("form");
var employeeId = document.querySelector("#empid");
var firstName = document.querySelector("#fName");
var lastName = document.querySelector("#lName");
var address = document.querySelector("#address");
var emailId = document.querySelector("#emailId");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updateBtn");
var tbody = document.querySelector("tbody");

var employeeDetails = [];
var position;

function getUserInfo(event) {
  event.preventDefault();
  var userInfo = {
    employeeId: event.target.form[0].value,
    firstName: event.target.form[1].value,
    lastName: event.target.form[2].value,
    address: event.target.form[3].value,
    emailId: event.target.form[4].value,
  };
  if (
    userInfo.employeeId &&
    userInfo.firstName &&
    userInfo.lastName &&
    userInfo.address &&
    userInfo.emailId
  ) {
    employeeDetails.push(userInfo);
    insertRow(employeeDetails);
    clearFields();
  } else {
    alert("Please Fill all the Input fields");
  }
}

function insertRow(employeeDetails) {
  tbody.innerHTML = "";
  employeeDetails.forEach(function (value) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${value.employeeId}</td>
    <td>${value.firstName}</td>
    <td>${value.lastName}</td>
    <td>${value.address}</td>
    <td>${value.emailId}</td>
    <td><button type ="button" id="edit-btn">Edit</button></td>
    <td><button type ="button" id="delete-btn">Update</button></td>
     `;
    tbody.appendChild(tr);
  });
  alert("Form Created & added Succesfully")
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
  if (event.target.id == "edit-Btn") {
    var emailId = event.target.parentElement.parentElement.cells.item(1).textContent;
    showUserInput(emailId);
  } else if (event.target == "delete-Btn") {
    var emailId = event.target.parentElement.parentElement.cells.item(1).textContent;
    deleteField(emailId);
    event.target.parentElement.parentElement.remove();
  }
}


function editUserField(data) {
  data.forEach(function (user, index) {
    if (user.emailId == data) {
      (employeeId.value = user.employeeId),
        (firstName.value = user.firstName),
        (lastName.value = user.lastName),
        (address.value = user.address),
        (emailId.value = user.emailId),
        (updateBtn.style.display = "block");
      submitBtn.style.display = "none";

      position = index;
    }
  });
}

updateBtn.addEventListener("click", updateEmployeeDetails);

function updateEmployeeDetails(event) {
  employeeDetails.forEach(function (name, index) {
    if (index == position) {
      var obj = {
        employeeId: employeeId.value,
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        emailId: emailId.value,
      };

      employeeDetails.splice(index, 1, obj);
      insertRow(employeeDetails);
      clearFields();
      alert("Form updated successfully");
      updateBtn.style.display = "none";
      submitBtn.style.display = "block";
    }
  });
}









