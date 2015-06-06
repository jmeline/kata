function onLine(points) {
    if (points.length >=2) {
        var tmp = [];
        for (var i = 0; i < points.length, i+1 < points.length; i++)  {
            if (isNotEqual(points[i],points[i+1]))
                tmp.push(slope(points[i], points[i+1]));
        }
        for (var i = 0; i < tmp.length; ++i) {
            if (tmp[0] != tmp[i]){
                return false;
            }
        }
        return true;
    }
    return true;
}

function isNotEqual(arr1, arr2) {
    for (var i = arr1.length; --i;)
        if ( arr1[i] !== arr2[i] )
            return true;
    return false;
}
function slope(a,b){
    return (b[1] - a[1])/(b[0] - a[0]);
}

console.log(onLine([[1,2], [22, 9]]) === true);
console.log(onLine([[1,2], [7, 4], [22, 9]]) === true);
console.log(onLine([[1,2], [-3, -14], [22, 9]]) === false);
