//1,Write a JavaScript function to find the first not repeated character. Go to the editor
//Sample arguments : 'abacddbec'
//Expected output : 'e'


function firstNotRepatedCharacter(str) {
    var arr = str.split('');
    var temp = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i])=== arr.lastIndexOf(arr[i])){
            temp = arr[i]
        }
    }
    return temp
}
console.log(firstNotRepatedCharacter('abacddbec'))

