
/*3)There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]*/


function computeEachValue(array1, array2) {
    var output = []
    var res;
    for (var i = 0; i < length+1;i++) {
        for (var j = 0; j < array2.length; j++) {
            if(array1[i]===undefined){
               array1[i]=0;
            }
          res=array1[i]+array2[j];
          i++;
        output.push(res);
        }
      return output
    }
}
console.log(computeEachValue([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]))