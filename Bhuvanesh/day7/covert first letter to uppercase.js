function firstUppercase(string)
{
  var array = string.split(' ');
  var array1 = [];
    
  for(var i = 0; i < array.length; i++){
      array1.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
  }
  return array1.join(' ');
}
console.log(firstUppercase("the quick brown fox"));