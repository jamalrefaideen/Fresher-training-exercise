function UserDetails (employeeId, name , address, ){
    this.employeeId = employeeId;
    this.name = name ;
    this.address = address
}
function Ui(){
    
}

function getInformations(){
event.preventDefault();
var userInformation = {
    employeeId: event.target.form[0].value,
    name: event.target.form[1].value,
    address: event.target.form[2].value,
    
}
    showUserDetails() {
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
    };

    deleteUserDetails() {

    };

    editUserDetails(){

    };

    updateUserDetails(){

    };
}
submitBtn.addEventListener("click", UserDetails)
function UserDetails(){    
var employeeId = document.querySelector("#empid");
var Name = document.querySelector("#name");
var address = document.querySelector("#address");
var Ui = new Ui(userInformation)
Ui.showUserDetails(UserDetails)
}



    
    