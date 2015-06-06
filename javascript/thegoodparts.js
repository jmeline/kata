
String.method('deentityify', function() {
    // the table. it maps entity names to characters
    var entity = {
        quot: "",
        lt: '<',
        gt: '>'
    };

    // Return the deentityify method.
    return function(){
        return this.replace(/&(^&;]+);/g, function(a,b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
            }
        );
    };
}
()
);
