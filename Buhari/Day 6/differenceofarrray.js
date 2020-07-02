//Write a JavaScript function to find the difference of two arrays.
//console.log(difference([1, 2, 3], [100, 2, 1, 10]));//input :
//output:[3, 10, 100]



function difference(arr1, arr2) {
    var result = [];
    for (i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1)
            result.push(arr1[i]);
    }
    for (j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) == -1)
            result.push(arr2[j])
    }
    return result
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]))