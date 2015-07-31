var Vector = function(components){

    this.value = components;

    this.lengthEquals = function(rhs){
        if (this.value.length > rhs.value.length)
            throw "Invalid Length!";
    };
    this.equals = function(rhs){
        this.lengthEquals(rhs);
        for (var i = 0; i < rhs.value.length; ++i)
            if (this.value[i] != rhs.value[i])
                return false;
        return true;
    };

    this.add = function(vector){
        this.lengthEquals(vector);
        var tmp = [];
        for(var i = 0; i < vector.value.length; i++)
            tmp.push(this.value[i] + vector.value[i]);
        return new Vector(tmp);
    };

    this.subtract = function(vector){
        this.lengthEquals(vector);
        var tmp = [];
        for(var i = 0; i < vector.value.length; i++)
            tmp.push(this.value[i] - vector.value[i]);
        return new Vector(tmp);
    };

    this.dot = function(vector){
        this.lengthEquals(vector);
        var tmp = 0;
        for(var i = 0; i < vector.value.length; i++)
            tmp += (this.value[i] * vector.value[i]);
        return tmp;
    };

    this.norm = function(){
        var tmp = 0;
        for(var i = 0; i < this.value.length; i++)
            tmp += Math.pow(this.value[i], 2);
        return Math.sqrt(tmp);
    };

};
Vector.prototype.toString = function (){
    return '(' + this.value.join(',') + ')';
};
exports.Vector = Vector;
