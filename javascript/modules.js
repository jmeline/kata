var scope = "I am global";
function whatismyscope() {
        var scope = "I am just a local";
            function func() {return scope;}
                return func;
}
console.log(whatismyscope()());

var modularpattern = (function() {
        // your module code goes here
        var sum = 0 ;
        return {
            add:function() {
                sum = sum + 1;
                return sum;
            },
            reset:function() {
                return sum = 0;    
            }  
        }   
}()
);
console.log(modularpattern.add());
console.log(modularpattern.add());
console.log(modularpattern.reset());
