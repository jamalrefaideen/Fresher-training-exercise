
function removeArray(array, n)
 {
   var index = array.indexOf(n);
   if (index > 0) {
    array.splice(index, 1);
}
   return array;
 }

console.log(removeArray([2, 5, 9, 6], 5));