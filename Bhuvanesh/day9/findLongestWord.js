function findLongestWord(name)
{
  var array1 = name.split(" ");
  var result = array1[0];

  for(var i = 1 ; i < array1.length ; i++)
  {
    if(result.length < array1[i].length)
    {
    result = array1[i];
    } 
  }
  return result;
}
console.log(findLongestWord('Web Development Tutorial'));