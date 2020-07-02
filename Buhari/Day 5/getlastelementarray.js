
/*4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Input  :
last([7, 9, 0, -2])
last([7, 9, 0, -2],3)
last([7, 9, 0, -2],6)*/



function parameterPassLast(){


    var last =(array,n);
    if (array == null)
    return 0;
    if (n==null)
    return array [array.length -1];
    
    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2],3));
    console.log(last([7, 9, 0, -2],6));
    
    }
    parameterPassLast()