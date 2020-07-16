var form = document.querySelector("form");
var name = document.querySelector("#name");
var empId = document.querySelector("#empid");
var salary = document.querySelector("#salary");
var submitBtn = document.querySelector(".submitbtn");
var tbody = document.querySelector("tbody");
var empDetails = [];
function getUserInfo(event) {
  event.preventDefault();
  var userInfo = {
    name: event.target.form[0].value,
    empId: event.target.form[1].value,
    salary: event.target.form[2].value,
    
  };
  if (
    userInfo.name &&
    userInfo.empId &&
    userInfo.salary 
    
  ) {
    empDetails.push(userInfo);
    insertRow(empDetails);
    clearFields();
  }
}
function insertRow(empDetails) {
  tbody.innerHTML = "";
  empDetails.forEach(function (emp) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${emp.name}</td>
    <td>${emp.empId}</td>
    <td>${emp.salary}</td>
    
    
     `;
    tbody.appendChild(tr);
  });
}
function clearFields(){
name.value=" ";
empId.value=" ";
salary.value=" ";
}