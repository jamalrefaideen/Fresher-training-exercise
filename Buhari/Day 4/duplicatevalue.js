
//4.Remove the duplicate Values in the array

function removeDuplicate(arr) {
    var letters = ['g', 'e', 'e', 'k', 's', 'f',
        'o', 'r', 'g', 'e', 'e', 'k', 's'];
        var result =[];
        for(var i=0;i<array.length;i++){
     for (var  j = i + 1 ; j < array.length; j++) {
         if (array[i]==(array[j])) {
                result.push(array[i]);
         }
     }
        }
        return result;
    }
    console.log(removeDuplicate(num))

