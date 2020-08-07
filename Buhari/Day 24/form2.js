var form = document.querySelector("form");
var employeeId = document.querySelector("#empId");
var name = document.querySelector("#name");
var  address = document.querySelector("#address");
var submitBtn = document.querySelector(".submitbtn");
var updateBtn = document.querySelector(".updatebtn")
var tbody = document.querySelector("tbody");

function UserDetails (employeeId, name , address, ){
    this.employeeId = employeeId
    this.name = name 
    this.address = address
}
function Ui(){
}
Ui.addUser = function (user){
  var tr = document.createElement('tr');
  tr.innerHTML=`
  <td>${user.employeeId}</td>
  <td>${user.name}</td>
  <td>${user.address}</td>
  <td><button type ="button" id="edit-btn">Edit</button></td>
  <td><button type ="button" id="delete-btn">Delete</button></td>`;
tbody.appendChild(tr);
}
Ui.clearFields = function (){
  employeeId.value ="";
  name.value="";
  address.value="";
}
submitBtn.addEventListener("click", userDetails)
function userDetails(event){    
  var employeeId = employeeId.value;
  var name = name.value;
  var address = address.value;
var UserInfo = new User(employeeId,name,address);
Ui.addUser(UserInfo)
Ui.clearFields();
}

//     showUserDetails() {
//             if (event.target.id == "edit-btn") {
//               var employeeId = event.target.parentElement.parentElement.cells.item(0)
//                 .textContent;
//               editUserField(employeeId);
//             } else if (event.target.id == "delete-btn") {
//               var employeeId = event.target.parentElement.parentElement.cells.item(0)
//                 .textContent;
//               deleteField(employeeId);
//               event.target.parentElement.parentElement.remove();
//             }
//           }
//     };

//     deleteUserDetails() {

//     };

//     editUserDetails(){

//     };

//     updateUserDetails(){

//     };
// }


    
    