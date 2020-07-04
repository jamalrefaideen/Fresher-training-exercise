//Write a JavaScript conditional statement to find the largest of five numbers
//Sample numbers : -5, -2, -6, 0, -1
//Output : 0

function largestOfFiveNumbers(a, b, c, d, e) {

    if (a > b && a > c && a > d && a > e) {
        console.log(a + "is the Largest of five numbers")
    }
    else if (b > a && b > c && b > d && b > e) {
        console.log(b + "is the Largest of five numbers")

    } else if (c > a && c > b && c > d && c > e) {
        console.log(c + "is the Largest of five numbers")

    } else if (d > a && d > b && d > c && d > e) {
        console.log(d + "is the Largest of five numbers")
    }
    else {
        console.log(e + "is the Largest of five numbers")
    }
}
largestOfFiveNumbers(-5, -2, -6, 0, -1)