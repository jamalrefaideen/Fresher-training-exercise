function specifiLetter(str, letter)
{
 var count = 0;
 for (var i = 0; i < str.length;i++)
 {
    if (str.charAt(i) == letter)
      {
      count += 1;
      }
  }
  return count;
}
console.log(specifiLetter('w3resource.com', 'o'));