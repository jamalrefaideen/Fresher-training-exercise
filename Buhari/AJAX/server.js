var btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
   // var userId = document.querySelector("#userId").value;
   var URL = "https://api.github.com/users/Bhuvaneshpandian";
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

// const getTodo = () => {
//    setTimeout(() => {
//        return { text: 'Complete Code Example' }
//    }, 2000)
// }
// const todo = getTodo()
// console.log(todo)




