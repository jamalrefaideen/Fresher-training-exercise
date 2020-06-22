 // 1,find most frequent item of an array
 // Ans:
    function mostFrequentItems(){
var array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var x= 1;
var y = 0;
var item;
for (var i=0; i<array.length; i++)
{
        for (var j=i; j<array.length; j++)
        {
                if (array[i] == array[j])
                 y++;
                if (x<y)
                {
                  x=y; 
                  item = array[i];
                }
        }
        y=0;
}

console.log(item+" ( " +x +" times ) ") ;
}
mostFrequentItems()