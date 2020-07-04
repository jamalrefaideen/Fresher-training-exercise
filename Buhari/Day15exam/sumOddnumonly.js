//2.Add the odd numbers alone in the array  

function oddNumberSum(numberArray) {
    var outputsum = 0
    for (var i = 0; i < numberArray.length; i++) {
        if (i % 2 != 0) {
            var oddIndex = numberArray[i];
            outputsum = oddIndex + outputsum;
        }
    }
    return outputsum
}
var numArr =[5, 2, 1, 3, 6, 8, 2]
console.log(oddNumberSum(numArr)) 
