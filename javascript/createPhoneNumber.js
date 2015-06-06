exports.createPhoneNumber = function(numbers){
    var tmp = numbers.join(""); 
    console.log("tmp: " + tmp);
    return tmp.replace(/^([0-9]{3})([0-9]{3})([0-9]{4})/, "($1) $2-$3")

}

