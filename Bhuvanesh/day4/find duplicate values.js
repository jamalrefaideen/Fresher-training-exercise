//find duplicate items fron array

var num = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
function removeDuplicateValues(array){
    var result =[];
    for(var i=0;i<array.length;i++){
 for (var  j = i + 1 ; j < array.length; j++) {
     if (array[i]==(array[j])) {
            result.push(array[i]);
     }
 }
    }
    return result;
}
console.log(removeDuplicateValues(num));