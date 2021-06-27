const colors = ["yellow",  "blue", "red", "orange"];
/*
console.log (colors)

while (colors [< 4]){
    console.log colors[]
    colors ++
}
*/

colors.forEach(colors => console.log(colors));

//vragen: 1. for loop 5 regels 2. 1 regel 3. foreach is makkelijker is korter en overzichtelijker. 
// 4.
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// je bent nu wel aan het itereren.