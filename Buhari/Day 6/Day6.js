//Write a JavaScript function to find the difference of two arrays.
//console.log(difference([1, 2, 3], [100, 2, 1, 10]));//input :
//output:[3, 10, 100]

//note: -1 

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



//3,Write a JavaScript function to find the unique elements from two arrays.
//console.log(difference([1, 2, 3], [100, 2, 1, 10]));input:
//output:[1, 2,3,10,100]


function uniqueElemts(array1, array2) {
    var result = [];
    for (i = 0; i <= array1.length; i++) {
        if (array2.indexOf(array1[i] == 1))
            result.push(array1[i])
    }
    for (j = 0; j <= array2.length; j++) {
        if (array1.indexOf(array2[j]) == 1)
            result.push(array2[j])
    }
    return result
}
console.log(uniqueElemts([1, 2, 3,], [100, 2, 1, 10]))





//2,Write a JavaScript function to remove a specific element from an array.
//console.log(remove_array_element([2, 5, 9, 6], 5)); //input :
//output:[2, 9, 6]

function remove_array_element(array, n) {

    var index = array.indexOf(n);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

console.log(remove_array_element([2, 5, 9, 6,], 5));

