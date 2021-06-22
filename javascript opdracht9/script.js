
/*function with an expression
const wiskunde = function(number1, number2) {
    const kwadraat1 =  number1 * number1;
    const kwadraat2 = number2 * number2;
    const som = kwadraat1 + kwadraat2;
    const kwadraat3 = som * som;
    return kwadraat3;
};
  */  
/*function with a declaration
function wiskunde (number1, number2) {
    const kwadraat1 =  number1 * number1;
    const kwadraat2 = number2 * number2;
    const som = kwadraat1 + kwadraat2;
    const kwadraat3 = som * som;
    return kwadraat3; 
}
*/

//arrow function
const wiskunde = (number1, number2) => {
    const kwadraat1 =  number1 * number1;
    const kwadraat2 = number2 * number2;
    const som = kwadraat1 + kwadraat2;
    const kwadraat3 = som * som;
    return kwadraat3; 
};


console.log(wiskunde(5, 10));


/* kortere manier volgens oplossing:
const square = function(number) {
    return number * number;
};

const doSquareCalculation = function(number1, number2) {
    return square(square(number1) + square(number2));
};

onst doSquareCalculation = (number1, number2) => {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};
*/
