

function calculate(num1, operation, num2) {
    var ops = {
        '+': function(x, y) { return x + y; },
        '-': function(x, y) { return x - y; },
        '*': function(x, y) { return x * y; },
        '/': function(x, y) { return y === 0 ? null : x / y; }
    };
    return (ops[operation] || function() { return null; })(num1, num2);
}

function calculate(num1, operation, num2) {
    return '+-*/'.indexOf(operation) > -1 ? eval(num1 + operation + num2) : null
}
