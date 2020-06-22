function getFirstElement() {
    var name = ["apple", "banana", "orange", "kiwi"]
    var string = "";
    var i;
    for (i = 0; i <= name.length; i++) {
        string = name[0];
        console.log(string)
    }
}
getFirstElement()


function getLastElement() {
    var name = ["apple", "banana", "orange", "kiwi"]
    var string = "";
    var i;
    for (i = 0; i <= name.length; i++) {
        string = name[-1];
        console.log(string)
    }
}
getLastElement()

function joinAllElement() {
    var color = ["black", "white", "red", "voilet"]
    console.log(color.join());

}

joinAllElement()


function removewithfilter(arr) {
    var letters = ['g', 'e', 'e', 'k', 's', 'f',
        'o', 'r', 'g', 'e', 'e', 'k', 's'];
    var outputArray = [];

    var outputArray = letters.filter
    console.log(removewithfilter(array));

}
removewithfilter()