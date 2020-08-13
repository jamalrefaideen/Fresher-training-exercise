const form = document.querySelector("form");
const empName = document.querySelector("#empName");
const empId = document.querySelector("#empId");
const salary = document.querySelector("#salary");
const submitBtn = document.querySelector(".submit-btn");
const updateBtn = document.querySelector(".update-btn");
const tbody = document.querySelector("tbody");
const empList = [];
let position;
class Ui {
  constructor(employeeName, employeeId, employeeSalary) {
    (this.empName = employeeName),
      (this.empId = employeeId),
      (this.salary = employeeSalary);
  }
  static addUser(users) {
    tbody.innerHTML = "";
    users.forEach(function (value) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${value.empName}</td>
        <td>${value.empId}</td>
        <td>${value.salary}</td>
        <td><button type ="button" class="style" id="edit-btn">Edit</button></td>
        <td><button type ="button" class="style" id="delete-btn">Delete</button></td>`;
      tbody.appendChild(tr);
    });
    alert("employee details added");
  }
  static clearFeilds() {
    (empName.value = " "), (empId.value = " "), (salary.value = " ");
  }
  static editEmployee(id) {
    empList.forEach(function (user, index) {
      if (user.empId == id) {
        empName.value = user.empName;
        empId.value = user.empId;
        salary.value = user.salary;
        updateBtn.style.display = "block";
        submitBtn.style.display = "none";
        position = index;
      }
    });
  }
  static deleteEmployee(data) {
    empList.forEach(function (user, index) {
      if (user.empId == data) {
        empList.splice(index, 1);
      }
    });
  }
  static upadteEmployee(event) {
    empList.forEach(function (user, index) {
      if (index == position) {
        const obj = {
          empName: empName.value,
          empId: empId.value,
          salary: salary.value,
        };
        empList.splice(index, 1, obj);
        Ui.addUser(empList);
        updateBtn.style.display = "none";
        submitBtn.style.display = "block";
        Ui.clearFeilds();
      }
    });
  }
}
submitBtn.addEventListener("click", userDetails);
function userDetails(event) {
  event.preventDefault();
  const employeeName = empName.value;
  const employeeId = empId.value;
  const employeesalaray = salary.value;
  const userInfo = new Ui(employeeName, employeeId, employeesalaray);
  empList.push(userInfo);
  Ui.addUser(empList);
  Ui.clearFeilds();
}
tbody.addEventListener("click", onEdit);
function onEdit(event) {
  if (event.target.id == "edit-btn") {
    const empId = event.target.parentElement.parentElement.cells.item(1)
      .textContent;
    Ui.editEmployee(empId);
  } else if ((event.target.id = "delete-btn")) {
    const empId = event.target.parentElement.parentElement.cells.item(1)
      .textContent;
    Ui.deleteEmployee(empId);
    event.target.parentElement.parentElement.remove();
  }
}
updateBtn.addEventListener("click", updateDetails);
function updateDetails(event) {
  Ui.upadteEmployee();
}