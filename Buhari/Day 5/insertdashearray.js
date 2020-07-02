

//5.Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.


function betweenDash() {
    var elements = [0, 2, 5, 4, 6, 8];
    var x = [];
    for (var x = 1; x < str.length; x++) {
      if ((str[x - 1] % 2 === 0) || (str[x] % 2 === 0)) {
        result.push('-', str[x]);
      }
      else {
        result.push(str[x]);
      }
    }
  }
  console.log(betweenDash.join(''))
  