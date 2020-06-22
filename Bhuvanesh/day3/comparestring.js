 function compareStr(str1,str2){
  if(str1.localeCompare(str2)){
    return false
  }
  else{
    return true
  }

return str1.localCompare(str2)
}
console.log(compareStr("BHU","bhu"));
console.log(compareStr("bhu","bhu"));