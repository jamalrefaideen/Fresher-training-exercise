//1,input ="india"
//output ="india","india","india";

function myCountry(){
  var str="india";
  
 console.log((str.repeat(3))); 
}
myCountry();



//2.input ="" check whether input is empty or not?
//output input is empty retrun is true. input is not empty output is false.



function emptyOrNot(input) {

  if (input) {
    return true
  } else {
    return false
  }

}

console.log(emptyOrNot(""))

//3.input two string check whether two input string compare equal to uppercase.
//output comparision is equeal return true otherwise false.


function compareString(str1, str2) {
  if (str1.localeCompare(str2)) {
    return true
  } else {
    return false
  }
  return str1.localeCompare(str2)
}
console.log(compareString('MOHAMED', 'buhari'))



