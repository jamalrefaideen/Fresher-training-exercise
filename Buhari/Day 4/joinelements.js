
//3.Join the all elemnts  


//The join() method returns the array as a string.
//The elements will be separated by a specified separator. The default separator is comma (,).


//opt 1

function joinAllElement() {
    var color = ["black", "white", "red", "voilet"]
    console.log(color.join());

}

joinAllElement()


//opt with " and "

function joinAllElement() {
    var color = ["black", "white", "red", "voilet"]
    console.log(color.join( " and " ));

}
joinAllElement()