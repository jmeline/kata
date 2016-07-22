export const validate = function(n) {

  let total = 0;
  var convertInt2IntArray = function(n){
    return ("" + n).split("").map(Number);
  };

  var arrayOfIntegers = convertInt2IntArray(n);
  var length = arrayOfIntegers.length;

  var addArrayElements = function (tmp){
    total = 0;
    for(var i = 0; i < tmp.length; i++)
      total += tmp[i];
    return total;
  };
  var isEven = length % 2 === 0;
  var modifiedArray = arrayOfIntegers.map(function(value, index){
    var new_value = value;
    if (isEven && index % 2 === 0)
      new_value = value + value;
    else if(!isEven && index % 2 !== 0)
      new_value = value + value;
    if(new_value > 9)
    {
      var intArray = convertInt2IntArray(new_value);
      new_value = addArrayElements(intArray);
    }

    return new_value;
  });

  total = addArrayElements(modifiedArray);
  return total % 10 === 0;
};

