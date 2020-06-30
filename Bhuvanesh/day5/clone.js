 var num1 = [1,2,4,0];
  var num2 = [1,2,[4,0]];
function cloneTwoArrary() {
  var clone = num1.concat(num2); 
  console.log(clone);
}
cloneTwoArrary()