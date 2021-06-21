const Age=19;
if (Age<18) {
    document.write("Helaas je bent te jong voor de kroeg.<br>");
  }else{
    document.write ("Welkom in de kroeg je betaald het normale tarief voor je bier.<br>");
  }
if (Age>=18 && Age<=25) {
  document.write ("Je krijgt 50% korting op je bier!<br>");
} else {
  
}
const isFemale=true;
if (isFemale){
    document.write("Je kan verder met bestellen voor de kaarten van de ladies Night<br>");
}else{
    document.write("Helaas het is Ladies Night dus mannen zijn deze keer niet welkom<br>");
}
let bob=false
const driverStatus=bob;
if (bob){
    document.write("ok je mag naar huis rijden wel thuis!<br>");
}else{
    document.write("Ik bel een taxi voor je zo kun jij niet meer rijden!<br>");
}

const Bram = true;
const Sarah = false;


if (Bram || Sarah){
  document.write("je krijgt een gratis biertje<br>");
}else{
  document.write("helaas geen gratis bier voor jou<br>");
}

var totalAmount =24;

if (totalAmount>= 100){
  document.write ("Een gratis flesje champagne!");
}else if(totalAmount>= 50){
document.write ("Een portie Nacho's gratis!");
}else if(totalAmount>= 25){
  document.write ("Een portie bitterballen gratis!");
}else{
  document.write ("geen extra voor jou.")
}
/*
const myAge=15;

if(myAge>=18 && myAge<=25){
  document.write ("Je krijgt 50% korting op je bier!");
}else{
  document.write ("Je betaald het normale tarief voor het bier.");
}
*/