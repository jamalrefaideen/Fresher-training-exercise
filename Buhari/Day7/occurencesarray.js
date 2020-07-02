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
  