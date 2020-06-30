/*1,input ="india"
output ="india","india","india";
2,
input ="" check whether input is empty or not?
output input is empty retrun is true. input is not empty output is false.
3,
input two string check whether two input string compare equal to uppercase.
output comparision is equeal return true otherwise false.*/






function func() {

  var name = "india";
  var string = name.repeat(3)
  console.log(string)
}
func()



function func() {


  var str = 'mohamed buhari';
  var string = str.toUpperCase();
  console.log(string);
}

func();

function compararison() {
  var name1 = "mohamed buahri s";
  var name2 = "MOHAMED BUHARI S";
  var result = name1.localeCompare(name2);

  console.log( "result");

}
compararison();



var str1 = "this iS geeks";
var str2 = "This IS GeeksfOrgeeks";
var p_up = console.log = str1 + "<br>" + str2;

function myGeeks() {
    var p_down = console.log();
    var areEqual = str1.toLowerCase() === str2.toLowerCase();
    p_down.innerHTML = areEqual;
}
myGeeks();