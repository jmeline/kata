class StringCalculator{
    // Simple String Calculator

    add(num1, num2, num3) {
        let sum = 0;
        let values = [num1, num2, num3];
        for(var i = 0; i < values.length; i++){
            if(values[i] !== undefined){
                sum += values[i];
            }
        }
        return sum;
    }
}

module.exports = StringCalculator;
