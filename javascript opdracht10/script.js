

const checking = function (age) {
    if (age <= 18){ 
        return true
         }else{
             return false
        }    
};

const Greet = function (age) {
   checking(); 
    if (checking(age)){
       return "Hello there!"
    }else{
        return "Hey Kiddo!"
    }
};

console.log (Greet(35));
console.log (Greet(15))


//deel 2:
//A:
/*
const BTWberekenen = function (basisprijs, btwpercentage){
    return basisprijs * (btwpercentage / 100)
}

const metBTW = function (basisprijs, btwpercentage){
    const metBTW = BTWberekenen(basisprijs, btwpercentage)
    return basisprijs + metBTW
}

console.log (metBTW(1000, 21));
console.log (metBTW(2, 9));
*/
//deel 2:
//B:

const BTWterugrekenen = function(prijsmetBTW, btwpercentage){
    const berekenbaisbedrag = prijsmetBTW / ((100 + btwpercentage) / 100);
    return berekenbaisbedrag
};

const berekenprijsenBTW = function(prijsmetBTW, btwpercentage){
const baisbedrag = BTWterugrekenen(prijsmetBTW, btwpercentage);
const btw = prijsmetBTW - baisbedrag;
return [baisbedrag, btw];
};

console.log(berekenprijsenBTW(1210, 21)); // [1000, 210]
console.log(berekenprijsenBTW(2.18, 9)); // [2, 0.18]
