var form = document.querySelector("form");
var employeeId = document.querySelector("#employeeId");
var fullName = document.querySelector("#fullName");
var address = document.querySelector("#address");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updatebtn");
var tbody = document.querySelector("tbody");
var position;

var employeeDetails = [];

class Ui {
  constructor(employeeId, fullName, address) {
    (this.employeeId = employeeId),
      (this.fullName = fullName),
      (this.address = address);

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
        // Ui.clearUserField();
      });
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
  }
}

submitBtn.addEventListener("click", getUserInfo);

function getUserInfo() {
  event.preventDefault();
  var empId = employeeId.value;
  var name = fullName.value;
  var city = address.value;
  var userDetails = new Ui(empId, name, city);
  employeeDetails.push(userDetails);
  Ui.insertUserInfo(employeeDetails);
  alert("Registered Succesfully");
  Ui.clearUserField();
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
