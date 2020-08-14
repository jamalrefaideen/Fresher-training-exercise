// CRUD OPERATIONS USING CLASS CONSTRUCTOR WITH STATIC METHODS ,LOCAL STORAGE

// Interacting With HTML Using DOM
var form = document.querySelector("form");
var employeeId = document.querySelector("#employeeId");
var fullName = document.querySelector("#fullName");
var address = document.querySelector("#address");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updatebtn");
var tbody = document.querySelector("tbody");
var position;

// CREATING CLASS CONSTRUCTOR (BLUEPRINT)
class Ui {
  constructor(employeeId, fullName, address) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.address = address;
  }

  // CREATING TABLE FOR DATA FROM USERS INPUT

  static insertUserInfo = function (users) {
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
      Ui.clearUserField();
    });
  };

  // TO VANISH THE DATE IN TEXT FIELD
  static clearUserField = function () {
    employeeId.value = "";
    fullName.value = "";
    address.value = "";
  };

  // CREATING THE EDIT FOR DATA 
  static editUserfield = function (data) {
    var employeeDetails = Store.getDataFromLocalStorage();
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
  // TO DELETE TH DATA IN TH TABLE
  static deleteUserField = function (data) {
    var employeeDetails = Store.getDataFromLocalStorage();
    employeeDetails.forEach(function (user, index) {
      if (user.employeeId == data) {
        employeeDetails.splice(index, 1);
      }
    });
    alert("Warning - All data will be Erased ");
    Store.addDataToLocalStorage(employeeDetails);
  };

  // TO UPDATE DATAS  AFTER EDITING THE DATA IN TEXT FIELD 
  static updateUserField = function (data) {
    var obj = {
      employeeId: employeeId.value,
      fullName: fullName.value,
      address: address.value,
    };
    var employeeDetails = Store.getDataFromLocalStorage();
    employeeDetails.splice(position, 1, obj);
    Store.addDataToLocalStorage(employeeDetails);
    Ui.insertUserInfo(employeeDetails);
    alert("Form Data Updated successfully");
    updateBtn.style.display = "none";
    submitBtn.style.display = "block";
    Ui.clearFields();
  };
}

//ADD TO LOCAL STORAGE
class Store {
  static addDataToLocalStorage = function (employeeDetails) {
    localStorage.setItem("user", JSON.stringify(employeeDetails));
  };
  static getDataFromLocalStorage = function () {
    if (localStorage.getItem("user")) {
      var userList = localStorage.getItem("user");
      return JSON.parse(userList);
    } else {
      localStorage.setItem("user", "[]");
      var userList = localStorage.getItem("user");
      return JSON.parse(userList);
    }
  };
}

// GETTING USERS INPUT AFTER CLICKING SUMBIT BUTTON
submitBtn.addEventListener("click", getUserInfo);

function getUserInfo() {
  event.preventDefault();
  var empId = employeeId.value;
  var name = fullName.value;
  var city = address.value;
  if (empId === "" || name === "" || city === "") {
    alert("Please Kindly fill All  Fields");
  } else {
    var userDetails = new Ui(empId, name, city);
    var userList = Store.getDataFromLocalStorage();
    userList.push(userDetails);
    Store.addDataToLocalStorage(userList);
    Ui.insertUserInfo(userList);
    alert("Registered Succesfully");
    Ui.clearUserField();
  }
}

// TO SHOW THE DATA IN TEXTFIELD TO EDIT UPDATE THE DATAS
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
  Ui.updateUserField();
}


//Preventing Data's  in Ui from refreshing or reloding page
function init() {
  var userList = Store.getDataFromLocalStorage();
  Ui.insertUserInfo(userList);
}
init();
