//CAN BE USED FOR INTERACTIVE COMMUNICATIONS WITH DATABASE 
// Read data from a web server - after the page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the background


//SENDING REQUEST TO THE SERVER 

xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();


// //EXAMPLE
// The onreadystatechange function is called every time the readyState changes.
// When readyState is 4 and status is 200, the response is ready:
// The readyState property holds the status of the XMLHttpRequest.

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }


// Example with Promise 

var btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
   var userId = document.querySelector("#userId").value;
   var URL = "https://api.github.com/users";
   getData(URL, "GET").then(processUserDetailsResponse, errorHandler);
});
function getData(url, methodType){
    var promiseObj = new Promise(function(resolve, reject){
       var xhr = new XMLHttpRequest();
       xhr.open(methodType, url, true);
       xhr.send();
       xhr.onload = function(){
          if (xhr.status === 200){
             var resp = xhr.responseText;
             var respJson = JSON.parse(resp);
             resolve(respJson);
          } else {
             reject(xhr.status);
             console.log("xhr failed");
          }
      
    }
    console.log("request sent successfully");
  });
  return promiseObj;
 }
 
function processUserDetailsResponse(data){
  console.log(data)
}
function errorHandler(error){
    console.log(error.message);
}
