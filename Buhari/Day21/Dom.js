
//1. using Js Dom change the style of paragraphs.
//2.backgroundColor.

function js_style() {

text.style.fontSize = "25px";
text.style.color ="violet";
text.style.backgroundColor ="black";
text.style.padding ="12px"

}

//2. backgroundColor using addEventListener

document.addEventListener("click", changeColor);

    function changeColor() {
      document.body.style.backgroundColor = "#FFC926";
    }


//3.Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link


function getAttributes()
{
 var u = document.getElementById("w3r").href;
 alert(('href value is  : '+u));

 var v = document.getElementById("w3r").hreflang;   
 alert((' hreflang is : '+v));

 var w = document.getElementById("w3r").rel; 
  alert(('Link value is : '+w));

 var x = document.getElementById("w3r").target; 
  alert(('Target value is : '+x));
  
 var y = document.getElementById("w3r").type; 
  alert(('type value  is : '+y));  
}








