
//3.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
// Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '


function eachLetterUpperCase(str) {
  var array = str.split('');
  var temp = [];
  for (var x = 0; x < str.length; x++) {
    temp.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
  }
  return temp.join('');
}
var name = 'the quick brown box';
console.log(eachLetterUpperCase(name))

