//we need two arrays

let var1Arr = [];
let var2Arr = [];

// Store data function
let storeData = function() {
    
    //get our values
    var1Value = document.getElementById("var1").value;
    var2Value = document.getElementById("var2").value;
   
    //push our value into the array
    var1Arr.push(1);
    var2Arr.push(var2Value);
    console.log(var1Arr);
    console.log(var2Arr);
}

//display data function
displayData = function(data) {
    return data;
}





