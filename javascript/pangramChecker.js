exports.isPangram = function(string){
    var associativeArray = {};
    for(var i = 0; i < string.length; ++i){
        var value = string[i].toLowerCase();
        if (/^[a-z]/.test(value))
            associativeArray[value] = "-1";
    }
     return 26 === Object.keys(associativeArray).length ? true : false;
};

// function isPangram(string){
//     return false;
// }
