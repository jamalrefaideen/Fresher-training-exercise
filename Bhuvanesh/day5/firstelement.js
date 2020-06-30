function firstElement(array,n){
    if (array==null)
        return  [array];
   
    if(n==null)
    return (array[0])
if(n<0)
    return [];
    return array.slice(0, n);
 
    
}
    


console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));