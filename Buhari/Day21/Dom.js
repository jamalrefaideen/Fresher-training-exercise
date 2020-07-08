


function js_style() {

text.style.fontSize = "25px";
text.style.color ="violet";
text.style.backgroundColor ="black";
text.style.padding ="12px"
}



function getAttributes()
{
 var u = document.getElementById("w3r").href;
 console.log(('href value is  : '+u));

 var v = document.getElementById("w3r").hreflang;   
 console.log((' hreflang is : '+v));

 var w = document.getElementById("w3r").rel; 
  console.log(('Link value is : '+w));

 var x = document.getElementById("w3r").target; 
  console.log(('Target value is : '+x));
  
 var y = document.getElementById("w3r").type; 
  console.log(('type value  is : '+y));  
}
