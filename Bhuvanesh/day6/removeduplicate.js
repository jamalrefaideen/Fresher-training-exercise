
function difference (array1, array2) {
var result = [];
for (var i=0;i<array1.length;i++) {
if(array2.indexOf(array1[i])== -1)
result.push(array1[i]);
}
for(j=0;j<array2.length;j++) {
if(array1.indexOf(array2[j])== -1)
result.push(array2[j]);
}
return result
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));