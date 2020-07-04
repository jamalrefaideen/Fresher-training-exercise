
//4.Remove the duplicate Values in the array

function removeDuplicateValues(letter) {

    var temp = [];

    for (var x = 0; x < letter.length; x++) {
        for (var j = x + 1; j < letter.length; j++) {
            if (letter[x] == (letter[j])) {
                temp.push(letter[x]);
            }
        }
    }
    return temp;
}
var letters = ['g', 'e', 'e', 'k', 's', 'f',
    'o', 'r', 'g', 'e', 'e', 'k', 's']
console.log(removeDuplicateValues(letters))




