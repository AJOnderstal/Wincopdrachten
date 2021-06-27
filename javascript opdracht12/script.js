const colors = ["yellow",  "blue", "red", "orange"];
/*
let i = 0;
while (i < myColorArray.length) {
  console.log(myColorArray[i]);
  i++;
}

for (let i = 0; i < myColorArray.length; i++) {
  console.log(myColorArray[i]);
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