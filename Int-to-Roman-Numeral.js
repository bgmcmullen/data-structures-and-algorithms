var intToRoman = function(num) {


    value = num;
    output = ''
    function findNumeral(placeValue, numeral, nextFiveNumeral, nextTenNumeral){
        localValue = 0;
        localValue = Math.floor(value / placeValue);
        
        numerals = '';
        value = value - (localValue * placeValue);
        if(localValue > 8 && nextTenNumeral){
            numerals =  numeral.repeat(10 - localValue) + nextTenNumeral;
        } else if(localValue >= 5  && nextFiveNumeral){
            numerals = nextFiveNumeral + numeral.repeat(localValue - 5);
        } else if(localValue > 3 && nextFiveNumeral){
            numerals =  numeral.repeat(5 - localValue) + nextFiveNumeral;
        } else {
            numerals = numeral.repeat(localValue);
        }
        output += numerals;

    }
    findNumeral(1000, 'M', null, null);
    findNumeral(100, 'C', 'D', 'M');
    findNumeral(10, 'X', 'L', 'C');
    findNumeral(1, 'I', 'V', 'X');
    return output
};