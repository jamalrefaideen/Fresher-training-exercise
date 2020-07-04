

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



 function passingParameterGetFirstElement(array, n) {
  if (array == null) 
  return  0;
if (n == null) 
  return array[0];
if (n < 0)
  return [];
return array.slice(0, n); 
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

passingParameterGetFirstElement()













