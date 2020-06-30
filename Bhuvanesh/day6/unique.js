
function unique(array1,array2){
var array3=[];
var array4=[];
var array3 = array1.concat(array2)
for(i=0; i < array3.length; i++){
if(array4.indexOf(array3[i]) === -1) {
 array4.push(array3[i]);
            }
        }

return array4;
}
console.log(unique([1, 2, 3], [100, 2, 1, 10]));