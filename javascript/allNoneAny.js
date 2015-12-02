
function DetermineValidNumbers(func, array){
    var validNumbers = array.length;
    for( var i=0; i < array.length; ++i){
        if(!func(array[i]))
            --validNumbers;
    }
    return validNumbers;
}
Array.prototype.all = function (p) {
    return DetermineValidNumbers(p, this) === this.length;
};

Array.prototype.none = function (p) {
    var isValid = true;
    for( var i=0; i < this.length; ++i){
        if(p(this[i])){
            isValid = false;
        }
    }
    return isValid;
    // return !DetermineValidNumbers(p, this) === this.length;
};

Array.prototype.any = function (p) {
    return DetermineValidNumbers(p, this) === 2;
};
