
//3.input two string check whether two input string compare equal to uppercase.
//output comparision is equeal return true otherwise false.


function compareString(str1, str2) {
    if (str1.localeCompare(str2)) {
      return true
    } else {
      return false
    }
    return str1.localeCompare(str2)
  }
  console.log(compareString('MOHAMED', 'buhari'))