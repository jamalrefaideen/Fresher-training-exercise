
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

 

  



