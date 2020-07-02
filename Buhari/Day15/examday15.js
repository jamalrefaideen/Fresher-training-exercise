//1. sum the 2 agruments 

function sumAdd (num1,num2){
 var temp = num1+num2
return temp 
}
console.log(sumAdd(5,5))


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


//3.Write a Javascript function which will take a string and  get out the odd characters alone 


function getOddCharacterOnly(letter){

    var output = ''

    for (var i =0; i<letter.length;i++){
        if (i % 2 !=0){
            output=output+letter[i]
        }
    }
    return output
}
var str = "BUHARI"
console.log(getOddCharacterOnly(str))

 

  



