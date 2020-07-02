/*1. Write a JavaScript function to check whether an `input` is an array or not.
Input: William
Input: [1,2,2,3,]
Output: true, false*/


function arrayOrNot() {
  var name = ['dubai'];
  var num = [1, 2, 3, 4, 0];
  if (toString.name === toString.num)
    return true;
  return false;
}
console.log(arrayOrNot)


//2.Write a JavaScript function to clone an array.
//Input : [1, 2, 4, 0]
//Input: [1, 2, [4, 0]]
//Output: [1, 2, 4, 0], 1, 2, [4, 0]]


function cloneArray() {
  var clone1 = [1, 2, 4, 0];
  var clonetoo = [1, 2, 4, 0];
  var i;
  return i.push()
}
console.log(cloneArray)

/*3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
Input:
first([7, 9, 0, -2])
first([],3));
first([7, 9, 0, -2],3)
first([7, 9, 0, -2],6)
first([7, 9, 0, -2],-3)
*/

function parameterPassFirst() {
  var first = (array, n);
  if (array == null)
    return 0;
  if (n == null)
    return array[0];
  if (n < o)
    return [];
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));

}
parameterPassFirst()



/*4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Input  :
last([7, 9, 0, -2])
last([7, 9, 0, -2],3)
last([7, 9, 0, -2],6)*/



function parameterPassLast(){


var last =(array,n);
if (array == null)
return 0;
if (n==null)
return array [array.length -1];

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

}
parameterPassLast()





//5.Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.


function betweenDash() {
  var elements = [0, 2, 5, 4, 6, 8];
  var x = [];
  for (var x = 1; x < str.length; x++) {
    if ((str[x - 1] % 2 === 0) || (str[x] % 2 === 0)) {
      result.push('-', str[x]);
    }
    else {
      result.push(str[x]);
    }
  }
}
console.log(betweenDash.join(''))







