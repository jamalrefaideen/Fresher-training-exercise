
               
        var str1 = "this iS geeks"; 
        var str2 = "This IS GeeksfOrgeeks"; 
        var p_up = console.log = str1 + "<br>" + str2; 
          
        function myGeeks() { 
            var p_down = console.log(); 
            var areEqual = str1.toLowerCase() === str2.toLowerCase(); 
            p_down.innerHTML = areEqual; 
        } 
        myGeeks();