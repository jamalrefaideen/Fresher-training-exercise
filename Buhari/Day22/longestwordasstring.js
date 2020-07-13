/*1.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Sample Data and output:
Example string: 'Web Development Tutorial'
Expected Output: 'Development'*/




function findLongestWord(str) {

    var words = str.split(' ');
    var output = words[0];


    for (var i = 0; i <words.length; i++) {

        if (output.length < words[i].length) {
            output = words[i]
        }
    }
    return output;
}

findLongestWord("web Development Tutorial")


