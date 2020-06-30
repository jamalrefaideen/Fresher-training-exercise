function even(arr){
var result = [arr[0]];
  
for(var x=1; x<arr.length; x++)
  {
        if((arr[x-1]%2 === 0)&&(arr[x]%2 === 0))

     {
      result.push('-',arr[x]);
     }
    else
     {
      result.push(arr[x]);
     }
  
console.log(result.join(''));
}
}

even([0,2,5,4,6,8,11])