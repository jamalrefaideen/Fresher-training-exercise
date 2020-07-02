
//3,Write a JavaScript function to find the unique elements from two arrays.
//console.log(difference([1, 2, 3], [100, 2, 1, 10]));input:
//output:[1, 2,3,10,100]




function uniqueElemts(array1, array2) {
    var arr3 = [];
    var arr4 =[];
    var arr3 = array1.concat(array2)
    for (i = 0; i <= array1.length; i++) {
        if (arr4.indexOf(arr3[i] == -1))
            arr4.push(array3[i]);
    }
    return arr4;
}
console.log(uniqueElemts([1, 2, 3,], [100, 2, 1, 10]))