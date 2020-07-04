

//2.Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4



function secLowestSecGreatest(arrayNum) {

  var temp = 0
  var outputNum = []
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i - 1] !== arrayNum[i]) {
      temp.push(arrayNum[i])
    }
    outputNum.push(temp[1], temp[temp.length - 2])
  }
  return outputNum.join()
}
console.log(secLowestSecGreatest([1, 2, 3, 4, 5]))




