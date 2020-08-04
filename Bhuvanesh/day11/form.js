var form = document.querySelector("form");
var empName = document.querySelector("#empName");
var empId = document.querySelector("#empId");
var salary = document.querySelector("#salary");
var submitBtn = document.querySelector(".submit-btn");
var submitBtn = document.querySelector(".submit-btn");
var tbody = document.querySelector("tbody");

function User(empName,empId,salary){
    this.empName=empName
    this.empId=empId
    this.salary=salary
    }
    function Ui(){}
     Ui.addUser = function(user){
      var tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${user.empName}</td>
      <td>${user.empId}</td>
      <td>${user.salary}</td>
      <td><button type ="button" class="style" id="edit-btn">Edit</button></td>
      <td><button type ="button" class="style" id="delete-btn">Delete</button></td>`;
  
      tbody.appendChild(tr);
      
    }
    Ui.clearFields = function () {
        empName.value = "";
        empId.value = "";
        salary.value = "";
    }
    
    


  submitBtn.addEventListener("click", userDetails);
  function userDetails(event){
    event.preventDefault();
    var employeeName = empName.value;
    var employeeId    = empId.value;
    var employeesalaray  = salary.value;
 var userInfo = new User(employeeName,employeeId,employeesalaray);
 Ui.addUser (userInfo);
 Ui.clearFields();
 }
 /*function clearFields() {
    empName.value = "";
    empId.value = "";
    salary.value = "";
  }*/
  




