//CURD OPERATION WITH USING LOCAL STORAGE


// NOTE :
// WITHOUT USING EMPTY ARRAY TO COLLECT DATA AND CONSTRUCTOR CLASS

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

//Preventing Data's  in Ui from refreshing or reloding page
function init() {
  var userList = getStorage();
  var empList = userList;
  insertRow(empList);
}
init();

// Getting User Form Inputs Data

submitBtn.addEventListener("click", getUserInfo);

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
    var userList = getStorage();
    userList.push(userInfo);
    addStorage(userList);
    insertRow(userList);
    clearFields();
  } else {
    alert("Kindly Fill all the fields");
  }
}

// Inserting the User Inputs Data in Table after submiting the form
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

// While submiting should empty the Textfield
function clearFields() {
  employeeId.value = "";
  firstName.value = "";
  lastName.value = "";
  address.value = "";
  emailId.value = "";
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

//To delete the input Data's
function deleteField(data) {
  var employeeDetails = getStorage();
  employeeDetails.forEach(function (user, index) {
    if (user.employeeId == data) {
      employeeDetails.splice(index, 1);
    }
  });
  addStorage(employeeDetails);
  alert("Warning - All Data Will Erase !?  ");
}

updateBtn.addEventListener("click", updateEmployeeDetails);

// To Update the  edited Data
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

// To store the Data's in the LOCAL STORAGE
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
