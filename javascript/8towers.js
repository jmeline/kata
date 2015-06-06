function towerCombination(n){
    if (n <= 0)
        return null;
    var factorial = function(n){
        if (n == 0) 
            return 1;
        return n * factorial(n-1);
    }

    return factorial(n);
}

console.log(towerCombination(39));
