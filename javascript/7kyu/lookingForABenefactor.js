
var Benefactor = function(arr, newavg){
    var avg = newavg * (arr.length + 1) - arr.reduce(function(pv, cv) { return pv + cv;}, 0);
    var result = Math.ceil(avg);
    if (result > 0)
        return result;
    throw "RangeError";
};

exports.Benefactor= Benefactor;
