
//2)Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//Sample Output :
//"0 is even"
//"1 is odd"
//"2 is even"


function oddOrEven(num) {

    for (var i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i + "is even Number")
        }
        else {
            console.log(i + "is odd Number")
        }
    }
}

oddOrEven(15)


