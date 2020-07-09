
/*2.Write a JavaScript function that reverse a number.
Sample Data and output:
Example x = 32243;
Expected Output: 34223*/


function reversingTheNumbers(num) {

    var temp = num + "";
    return temp.split('').reverse().join('');

}
var num = 32243;
console.log(reversingTheNumbers(num))