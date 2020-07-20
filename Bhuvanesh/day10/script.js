var form = document.querySelector("form");
var empName = document.querySelector("#name");
var empId = document.querySelector("#empId");
var salary = document.querySelector("#salary");
var submitBtn = document.querySelector(".submit-btn");
var updateBtn = document.querySelector(".update-btn");
var tbody = document.querySelector("tbody");
var empDetails = [];
var position;

function getUserInfo(event) {
  event.preventDefault();
  var userInfo = {
    name: event.target.form[0].value,
    empId: event.target.form[1].value,
    salary: event.target.form[2].value,
  };

  if (userInfo.name && userInfo.empId && userInfo.salary) {
    empDetails.push(userInfo);
    insertRow(empDetails);
    clearFields();
  } else {
    alert("please fill all the fields");
  }
}

function insertRow(data) {
  tbody.innerHTML = "";
  data.forEach(function (value) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${value.name}</td>
    <td>${value.empId}</td>
    <td>${value.salary}</td>
    <td><button type ="button" id="edit-btn">Edit</button></td>
    <td><button type ="button" id="delete-btn">Delete</button></td>`;
    tbody.appendChild(tr);
  });
  alert("emp added successfully");
}

function clearFields() {
  empName.value = "";
  empId.value = "";
  salary.value = "";
}
tbody.addEventListener("click", onEdit);
function onEdit(event) {
  if (event.target.id == "edit-btn") {
    var empId = event.target.parentElement.parentElement.cells.item(1)
      .textContent;
    editField(empId);
  } else if (event.target.id == "delete-btn") {
    var empId = event.target.parentElement.parentElement.cells.item(1)
      .textContent;
    deleteField(empId);
    event.target.parentElement.parentElement.remove();
  }
}

function editField(data) {
  empDetails.forEach(function (user, index) {
    if (user.empId == data) {
      empName.value = user.name;
      empId.value = user.empId;
      salary.value = user.salary;
      updateBtn.style.display = "block";
      submitBtn.style.display = "none";
      position = index;
    }
  });
}

function deleteField(data) {
  empDetails.forEach(function (user, index) {
    if (user.empId == data) {
      empDetails.splice(index, 1);
    }
  });
  alert("emp deleted succesfully");
}

updateBtn.addEventListener("click", updateDetails);

function updateDetails(event) {
  empDetails.forEach(function (nam, index) {
    if (index == position) {
      var obj = {
        name: empName.value,
        empId: empId.value,
        salary: salary.value,
      };

      empDetails.splice(index, 1, obj);
      insertRow(empDetails);
      clearFields();
      alert("update emp successfully");
      updateBtn.style.display = "none";
      submitBtn.style.display = "block";
    }
  });
}
