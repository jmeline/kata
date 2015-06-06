exports.SubstitutionCipher = function(abc1, abc2) {
    this.encode = function (str) {
        var output = "";
        console.log(str);
        for(var i = 0; i < str.length; ++i){
            var tmp = abc2[abc1.indexOf(str[i])];
            tmp = undefined === tmp ? -1 : tmp;
            console.log("tmp: " + tmp);
            if ( tmp !== -1) {
                output += tmp;
            }
            else{
                output += str[i];
            }
        }
        return output;
    }
    this.decode = function (str) {
        var output = "";
        console.log(str);
        for( var i = 0; i < str.length; ++i) {
            var tmp = abc1[abc2.indexOf(str[i])] || -1;
            tmp = undefined === tmp ? -1 : tmp;
            if ( tmp !== -1) {
                output += tmp;
            }
            else{
                output += str[i];
            }
        }
        return output;
    }
}

// Clever results
function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
        return str.split('').map(function(s){return (t=abc1.indexOf(s))==-1?s:abc2[t];}).join('');
    }
    this.decode = function (str) {
        return new SubstitutionCipher(abc2, abc1).encode(str);
    }
}


