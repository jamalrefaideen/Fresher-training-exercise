//1.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string
//Sample arguments : 'w3resource.com', 'o'
//Expected output : 2




function numberOfOccurence(str, letter) {
  var letterCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(numberOfOccurence('w3resource.com', 'o'));






//2.Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4

function secLowestSecGreatest(arrayNum) {

  var outputNum = []
  for (var i = o; i < arrayNum.length; i++) {




  }
}
console.log(secLowestSecGreatest([1,2,3,4,5]))


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

