

const totaal = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(totaal(150));
console.log(totaal(50));
console.log(totaal(0));
console.log(totaal(999));



const reactieBot = function(
    maxBezoekers,
    aantalBinnen,
    leeftijdBezoeker
){
    if (leeftijdBezoeker < 18){
        return "alleen volwassenen kunnen naar binnen";
    }
    if (aantalBinnen >= maxBezoekers){
        return "het is te druk kom later terug";
    } else {
        return "kom binnen";
    }
};

console.log(reactieBot(2000, 0, 15))
console.log(reactieBot(2000, 1999, 35))
console.log(reactieBot(2000, 2000, 19))

const berekengemiddelde = function(
    number1,
    number2,
    number3,
    number4,
    number5
){
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;

};

console.log(berekengemiddelde(1, 1, 1, 1, 1));
console.log(berekengemiddelde(4, 5, 6, 3, 1));
console.log(berekengemiddelde(-500, 0, 0, 0, 150));
