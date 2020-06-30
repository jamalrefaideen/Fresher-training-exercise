   function arrayOrNot(input) {
   if (Array.isArray(input))
    return true;
  return false;   
    }
console.log(arrayOrNot("William"));
console.log(arrayOrNot([1, 2, 2, 3]));