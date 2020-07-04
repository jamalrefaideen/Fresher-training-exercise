//2,Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output : "United States of Ame



function longestCountryName(countryname) {

  var temp = [];
  for (var i = 0; i < countryname.length; i++) {
    temp.push(countryname[i].length)
  }

  return temp.reduce(countryname)
}
console.log(longestCountryName(['australia', 'france', 'bali', 'united states of America']))

